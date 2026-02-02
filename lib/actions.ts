'use server';

import { headers } from "next/headers";
import { Resend } from "resend";

// ===============================
// Environment Validation
// ===============================
if (!process.env.RESEND_API_KEY) {
  throw new Error("⚠️ RESEND_API_KEY is missing in environment variables!");
}

const resend = new Resend(process.env.RESEND_API_KEY);

// ===============================
// Helper: Escape HTML
// ===============================
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ===============================
// Rate Limiting (Redis + In-Memory fallback)
// ===============================
interface RateLimitRecord {
  count: number;
  firstRequest: number;
}

const IN_MEMORY_RATE_LIMIT_STORE = new Map<string, RateLimitRecord>();

async function getRedisClient(): Promise<any | null> {
  if (!process.env.REDIS_URL) return null;
  const g = globalThis as any;
  if (g.__rateLimitRedis) return g.__rateLimitRedis;

  try {
    const { default: IORedis } = await import("ioredis");
    const client = new IORedis(process.env.REDIS_URL, { enableReadyCheck: true });
    g.__rateLimitRedis = client;
    return client;
  } catch (err) {
    console.warn("⚠️ Redis init failed. Falling back to in-memory:", err);
    return null;
  }
}

async function checkRateLimit(ip: string): Promise<{ allowed: boolean; remaining: number }> {
  const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
  const MAX_REQUESTS = 5;
  const now = Date.now();
  const windowKey = Math.floor(now / WINDOW_MS);

  const redis = await getRedisClient();
  if (redis) {
    try {
      const key = `rl:${ip}:${windowKey}`;
      const ttl = Math.ceil(WINDOW_MS / 1000);
      const count = await redis.incr(key);
      if (count === 1) await redis.expire(key, ttl);
      if (count > MAX_REQUESTS) return { allowed: false, remaining: 0 };
      return { allowed: true, remaining: MAX_REQUESTS - count };
    } catch (err) {
      console.warn("⚠️ Redis rate limit failed, using memory:", err);
    }
  }

  const recordKey = `${ip}:${windowKey}`;
  const record = IN_MEMORY_RATE_LIMIT_STORE.get(recordKey);

  if (!record) {
    IN_MEMORY_RATE_LIMIT_STORE.set(recordKey, { count: 1, firstRequest: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (record.count >= MAX_REQUESTS) return { allowed: false, remaining: 0 };
  record.count++;
  IN_MEMORY_RATE_LIMIT_STORE.set(recordKey, record);
  return { allowed: true, remaining: MAX_REQUESTS - record.count };
}

// Cleanup old in-memory records
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of IN_MEMORY_RATE_LIMIT_STORE.entries()) {
      if (now - record.firstRequest > 30 * 60 * 1000) { // 30 min
        IN_MEMORY_RATE_LIMIT_STORE.delete(key);
      }
    }
  }, 5 * 60 * 1000);
}

// ===============================
// Get Client IP
// ===============================
async function getClientIP(): Promise<string> {
  try {
    const h = await headers();
    const xff = h.get("x-forwarded-for");
    if (xff) return xff.split(",")[0].trim();
    const realIp = h.get("x-real-ip");
    if (realIp) return realIp;
    const cfIp = h.get("cf-connecting-ip");
    if (cfIp) return cfIp;
  } catch (err) {
    console.warn("⚠️ Failed to get client IP:", err);
  }
  return "unknown";
}

// ===============================
// Send Message Action
// ===============================
export async function sendMessage(formData: FormData) {
  try {
    // -----------------------------
    // Honeypot (spam protection)
    // -----------------------------
    const website = formData.get("website") as string | null;
    const company = formData.get("company") as string | null;
    if (website || company) {
      console.warn("🤖 Honeypot triggered — bot detected");
      return { success: true }; // pretend success
    }

    // -----------------------------
    // Extract & Validate Fields
    // -----------------------------
    const nameRaw = formData.get("name") as string | null;
    const emailRaw = formData.get("email") as string | null;
    const phoneRaw = formData.get("phone") as string | null;
    const subjectRaw = formData.get("subject") as string | null;
    const messageRaw = formData.get("message") as string | null;

    if (!nameRaw || !emailRaw || !messageRaw) {
      return { success: false, error: "Missing required fields." };
    }

    const name = escapeHtml(nameRaw.trim());
    const email = escapeHtml(emailRaw.trim());
    const phone = phoneRaw ? escapeHtml(phoneRaw.trim()) : "N/A";
    const subject = subjectRaw ? escapeHtml(subjectRaw.trim()) : "No subject";
    const message = escapeHtml(messageRaw.trim());

    if (name.length > 100) return { success: false, error: "Name too long" };
    if (subject.length > 150) return { success: false, error: "Subject too long" };
    if (message.length > 5000) return { success: false, error: "Message too long" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return { success: false, error: "Invalid email address" };

    // -----------------------------
    // Rate Limiting
    // -----------------------------
    const clientIP = await getClientIP();
    const rate = await checkRateLimit(clientIP);
    if (!rate.allowed) return { success: false, error: "Too many requests. Try again later." };

    const userAgent = (await headers()).get("user-agent") || "unknown";

    // -----------------------------
    // Prepare Email
    // -----------------------------
    const emailHtml = `
      <h2>📩 New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
      <hr />
      <p><strong>IP Address:</strong> ${clientIP}</p>
      <p><strong>User Agent:</strong> ${escapeHtml(userAgent)}</p>
      <p><strong>Submitted At:</strong> ${new Date().toISOString()}</p>
    `;

    // -----------------------------
    // Send Email via Resend
    // -----------------------------
    const { data, error } = await resend.emails.send({
      from: "I.O.M Innovations <onboarding@resend.dev>",
      to: ["brightlikho@gmail.com"],
      subject: `New Message from ${name} - I.O.M Innovations`,
      replyTo: email,
      html: emailHtml,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage:\n${message}`,
    });

    if (error) {
      console.error("❌ Resend API error:", error);
      return { success: false, error: "Failed to send message. Try again." };
    }

    console.log("✅ Message sent:", { name, email, clientIP, rateRemaining: rate.remaining });

    return { success: true };
  } catch (err) {
    console.error("❌ sendMessage unexpected error:", err);
    return { success: false, error: "Unexpected server error. Please try again." };
  }
}

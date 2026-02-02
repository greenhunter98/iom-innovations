// lib/actions.ts
"use server";

import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// ============================================================================
// TYPES
// ============================================================================

export type SendMessageResult = {
  success: boolean;
  error?: string;
};

// ============================================================================
// RATE LIMITING CONFIGURATION
// ============================================================================

// In-memory store for rate limiting (for development)
// For production, consider using Redis or a database
interface RateLimitRecord {
  count: number;
  firstRequest: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

/**
 * Simple rate limiting function
 * Limits: 5 submissions per IP per 15 minutes
 */
function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
  const MAX_REQUESTS = 5;
  
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record) {
    rateLimitStore.set(ip, { count: 1, firstRequest: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }
  
  if (now - record.firstRequest > WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, firstRequest: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }
  
  if (record.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }
  
  record.count++;
  rateLimitStore.set(ip, record);
  
  return { allowed: true, remaining: MAX_REQUESTS - record.count };
}

/**
 * Helper to extract IP address
 */
function getClientIP(): string {
  if (process.env.NODE_ENV === "development") {
    return "dev-" + Math.random().toString(36).substring(2, 10);
  }

  // TODO: Implement real IP extraction in production
  return "unknown";
}

// ============================================================================
// MAIN SERVER ACTION
// ============================================================================

export async function sendMessage(formData: FormData): Promise<SendMessageResult> {
  let clientIP = "";
  let submissionId = "pending";
  
  try {
    clientIP = getClientIP();

    // ========================================
    // 1. RATE LIMITING
    // ========================================
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      console.warn(`🚫 Rate limit exceeded for IP: ${clientIP}`);

      return {
        success: false,
        error: "Too many requests. Please try again later.",
      };
    }

    // ========================================
    // 2. EXTRACT & VALIDATE DATA
    // ========================================
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      console.error("❌ Missing required fields");

      return {
        success: false,
        error: "Missing required fields.",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("❌ Invalid email format:", email);

      return {
        success: false,
        error: "Invalid email address.",
      };
    }

    // ========================================
    // 3. LOG SUBMISSION
    // ========================================
    console.log("📧 Form submission received:", {
      name,
      email: `${email.substring(0, 3)}...@${email.split("@")[1]}`,
      messagePreview: message.substring(0, 50) + (message.length > 50 ? "..." : ""),
      timestamp: new Date().toISOString(),
      ip: clientIP,
      rateLimitRemaining: rateLimit.remaining,
    });

    // ========================================
    // 4. PREPARE EMAIL CONTENT
    // ========================================
    const currentTime = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    const emailHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="font-family: system-ui, sans-serif; background:#f3f4f6; padding:20px;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#3b82f6,#1d4ed8);color:white;padding:24px;text-align:center;">
        <h1 style="margin:0;">📬 New Contact Form Submission</h1>
        <p style="margin:6px 0 0;opacity:.9;">I.O.M Innovations Website</p>
      </div>

      <div style="padding:24px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Submitted:</strong> ${currentTime}</p>

        <hr style="margin:20px 0;" />

        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;">${message}</p>

        <hr style="margin:20px 0;" />

        <p style="font-size:12px;color:#6b7280;">
          Submission ID: ${submissionId}<br />
          Sent from I.O.M Innovations contact form.
        </p>
      </div>
    </div>
  </body>
</html>
`;

    const emailText = `
NEW CONTACT FORM SUBMISSION
===========================

FROM: ${name} (${email})
SUBMITTED: ${currentTime}

MESSAGE:
${message}

===========================
Submission ID: ${submissionId}
Sent from I.O.M Innovations website
`;

    // ========================================
    // 5. SEND EMAIL (RESEND)
    // ========================================
    const { data, error } = await resend.emails.send({
      from: "I.O.M Innovations Contact Form <onboarding@resend.dev>",
      to: ["brightlikho@gmail.com"],
      subject: `New Message from ${name} - I.O.M Innovations`,
      replyTo: email,
      html: emailHtml,
      text: emailText,
    });

    if (data?.id) {
      submissionId = data.id;
    }

    if (error) {
      console.error("❌ Resend API Error:", {
        error: error.message,
        statusCode: error.statusCode,
        ip: clientIP,
      });

      return {
        success: false,
        error: "Failed to send message. Please try again.",
      };
    }

    console.log("✅ Email sent successfully:", {
      emailId: data?.id,
      ip: clientIP,
      rateLimitRemaining: rateLimit.remaining,
      timestamp: new Date().toISOString(),
    });

    // ========================================
    // ✅ SUCCESS
    // ========================================
    return {
      success: true,
    };

  } catch (error) {
    console.error("⚠️ Unexpected error in sendMessage:", {
      error: error instanceof Error ? error.message : String(error),
      ip: clientIP,
      submissionId,
      timestamp: new Date().toISOString(),
    });

    return {
      success: false,
      error: "Unexpected server error. Please try again.",
    };
  }
}

// ============================================================================
// OPTIONAL: CLEAN UP OLD RATE LIMIT RECORDS
// ============================================================================

if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    const FIFTEEN_MINUTES = 15 * 60 * 1000;
    
    for (const [ip, record] of rateLimitStore.entries()) {
      if (now - record.firstRequest > FIFTEEN_MINUTES * 2) {
        rateLimitStore.delete(ip);
      }
    }

    if (process.env.NODE_ENV === "development") {
      console.log(`🧹 Cleaned rate limit store. Current size: ${rateLimitStore.size}`);
    }
  }, 5 * 60 * 1000);
}

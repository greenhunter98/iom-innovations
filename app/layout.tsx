import "./globals.css";
import type { Metadata } from "next";
import { DarkToaster } from "@/components/DarkToaster"

export const metadata: Metadata = {
  title: {
    default: "I.O.M Innovations",
    template: "%s | I.O.M Innovations",
  },
  description:
    "I.O.M Innovations is a registered consultancy firm in Malawi offering business, marketing, and technology solutions.",
  keywords: [
    "Business Consultancy Malawi",
    "Marketing Agency Malawi",
    "Web Development Malawi",
    "IOM Innovations",
  ],
  metadataBase: new URL("https://iom-innovations.vercel.app"),
  openGraph: {
    title: "I.O.M Innovations",
    description:
      "Professional business, marketing, and technology consultancy in Malawi.",
    url: "https://iom-innovations.vercel.app",
    siteName: "I.O.M Innovations",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "I.O.M Innovations",
      },
    ],
    locale: "en_MW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I.O.M Innovations",
    description:
      "Business, marketing, and technology consultancy in Malawi.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}
        <DarkToaster />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PractiSight - Monitor Your Practice's Online Reputation in Real-Time",
  description:
    "AI-powered review monitoring and insights for dental practices. Track reviews across Google and Yelp, get actionable recommendations powered by GPT-4, and see how you stack up against competitors.",
  keywords: [
    "dental practice",
    "review monitoring",
    "online reputation",
    "AI insights",
    "dental reviews",
    "practice management",
  ],
  authors: [{ name: "PractiSight" }],
  openGraph: {
    title:
      "PractiSight - Monitor Your Practice's Online Reputation in Real-Time",
    description:
      "AI-powered review monitoring and insights for dental practices",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PractiSight - Monitor Your Practice's Online Reputation in Real-Time",
    description:
      "AI-powered review monitoring and insights for dental practices",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563EB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

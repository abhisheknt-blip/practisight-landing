import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";

export const metadata: Metadata = {
  title: "PractiSight - Monitor Your Practice's Online Reputation in Real-Time",
  description:
    "AI-powered review monitoring and insights for dental practices. Track Google reviews in real-time, get actionable recommendations powered by GPT-4, and see how you stack up against competitors.",
  keywords: [
    "dental practice",
    "review monitoring",
    "online reputation",
    "AI insights",
    "dental reviews",
    "practice management",
  ],
  authors: [{ name: "PractiSight" }],
  icons: {
    icon: "/favicon.svg",
  },
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
      <body>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('consent', 'default', {
                    'analytics_storage': 'denied',
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'wait_for_update': 500
                  });

                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

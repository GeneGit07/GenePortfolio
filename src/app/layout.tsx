import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getSiteUrl } from "@/lib/siteUrl";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: {
    default: "Eugene Dalida",
    template: "%s | Eugene Dalida",
  },
  description:
    "Eugene Dalida is a visual designer and content creator in Batangas, Philippines, creating social campaigns, short-form video, and visual systems for brands.",
  keywords: ["visual design", "brand identity", "social media", "content creation", "UI/UX", "Philippines"],
  authors: [{ name: "Eugene Dalida" }],
  creator: "Eugene Dalida",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/assets/home/favicon-black-gold.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Eugene Dalida — Visual Designer & Content Creator",
    description: "Social campaigns, short-form video, and visual systems for brands.",
    siteName: "Eugene Dalida Portfolio",
    images: [
      {
        url: "/assets/video-posters/solarworks-featured-poster.jpg",
        width: 1600,
        height: 900,
        alt: "SolarWorks PH featured campaign video",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eugene Dalida — Visual Designer & Content Creator",
    description: "Social campaigns, short-form video, and visual systems for brands.",
    images: ["/assets/video-posters/solarworks-featured-poster.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/video-posters/rendezvous-all-day-favorites-poster.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* App Router root layout loads these Google Fonts globally. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}

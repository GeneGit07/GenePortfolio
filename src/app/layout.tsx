import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IntroAnimation from "@/components/layout/IntroAnimation";

const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const deploymentDomain = process.env.VERCEL_URL;
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl = configuredSiteUrl ??
  (productionDomain ? `https://${productionDomain}` :
    deploymentDomain ? `https://${deploymentDomain}` : "http://localhost:3000");

export const metadata: Metadata = {
  title: {
    default: "Eugene Dalida",
    template: "%s | Eugene Dalida",
  },
  description:
    "Eugene Dalida is an independent designer in Manila creating social campaigns, visual identities, digital content, and AI-assisted creative work.",
  keywords: ["visual design", "brand identity", "social media", "content creation", "UI/UX", "Philippines"],
  authors: [{ name: "Eugene Dalida" }],
  creator: "Eugene Dalida",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Eugene Dalida — Visual Designer & Art Director",
    description: "Social campaigns, visual identities, digital content, and AI-assisted creative work.",
    siteName: "Eugene Dalida Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eugene Dalida — Visual Designer & Art Director",
    description: "Social campaigns, visual identities, digital content, and AI-assisted creative work.",
  },
  
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f0e9" },
    { media: "(prefers-color-scheme: dark)", color: "#11130f" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('dp-theme');if(s!=='dark'){document.documentElement.classList.add('light')}}catch(e){document.documentElement.classList.add('light')}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <IntroAnimation />
          <SmoothScrollProvider>
            <Header />
            {children}
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

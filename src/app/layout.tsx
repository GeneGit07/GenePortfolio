import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Dayana Pumajulca — Diseñadora Gráfica y Audiovisual",
    template: "%s | Dayana Pumajulca",
  },
  description:
    "Portfolio minimalista de Dayana Pumajulca — branding, redes sociales y diseño audiovisual. Perú.",
  keywords: ["branding", "diseño gráfico", "redes sociales", "audiovisual", "portfolio", "Perú"],
  authors: [{ name: "Dayana Pumajulca" }],
  creator: "Dayana Pumajulca",
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://example.com",
    title: "Dayana Pumajulca — Diseñadora Gráfica y Audiovisual",
    description: "Branding, redes sociales y diseño audiovisual. Portfolio minimalista.",
    siteName: "Dayana Pumajulca Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dayana Pumajulca — Diseñadora Gráfica y Audiovisual",
    description: "Branding, redes sociales y diseño audiovisual.",
  },
  icons: {
    icon: [
      {
        url: "/assets/home/favicon-black.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/home/favicon-white.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('dp-theme');if(s==='light'||(!s&&window.matchMedia('(prefers-color-scheme: light)').matches)){document.documentElement.classList.add('light')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
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

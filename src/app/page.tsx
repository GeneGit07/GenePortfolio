import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SocialSection from "@/components/social/SocialSection";
import BrandingSection from "@/components/branding/BrandingSection";
import ContactSection from "@/components/contact/ContactSection";
import { PAGE_PADDING_X } from "@/lib/constants";

export default function HomePage() {
  return (
    <main>
      {/* 00 HERO */}
      <section
        id="hero"
        className={`relative grid min-h-dvh grid-cols-1 content-center gap-10 overflow-hidden py-24 md:grid-cols-2 md:gap-0 md:py-10 ${PAGE_PADDING_X}`}
      >
        <HeroSection />
      </section>

      {/* 01 ABOUT */}
      <section id="about" className={`py-16 md:py-24 ${PAGE_PADDING_X}`}>
        <AboutSection />
      </section>

      {/* 02 REDES SOCIALES */}
      <section id="redes-sociales" className={`py-16 md:py-24 ${PAGE_PADDING_X}`}>
        <SocialSection />
      </section>

      {/* 03 BRANDING */}
      <section id="branding" className={`py-16 md:py-24 ${PAGE_PADDING_X}`}>
        <BrandingSection />
      </section>

      {/* 04 CONTACT */}
      <footer id="contact" className={`py-16 md:py-24 ${PAGE_PADDING_X}`}>
        <ContactSection />
      </footer>
    </main>
  );
}

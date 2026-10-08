import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SocialSection from "@/components/social/SocialSection";
import ProjectFeaturesSection from "@/components/features/ProjectFeaturesSection";
import ContactSection from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <main>
      {/* 00 HERO */}
      <section id="hero" className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <HeroSection />
      </section>

      {/* 01 ABOUT */}
      <section id="about" className="py-20 md:py-32">
        <AboutSection />
      </section>

      {/* 02 SELECTED WORK */}
      <section id="redes-sociales" className="py-20 md:py-32">
        <SocialSection />
      </section>

      {/* 03 PROJECT FEATURES */}
      <section id="branding" className="py-20 md:py-32">
        <ProjectFeaturesSection />
      </section>

      {/* 04 CONTACT */}
      <footer id="contact" className="pt-20 pb-8 md:pt-32">
        <ContactSection />
      </footer>
    </main>
  );
}

import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SocialSection from "@/components/social/SocialSection";
import ProjectFeaturesSection from "@/components/features/ProjectFeaturesSection";
import EmailDesignSection from "@/components/features/EmailDesignSection";
import ContactSection from "@/components/contact/ContactSection";
import ServicesSection from "@/components/features/ServicesSection";
import TestimonialsSection from "@/components/features/TestimonialsSection";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTopButton from "@/components/layout/BackToTopButton";

export default function HomePage() {
  return (
    <main id="main-content">
      <ScrollProgress />
      {/* 00 HERO */}
      <section id="hero" className="hero-section relative overflow-hidden">
        <HeroSection />
      </section>

      {/* 01 ABOUT */}
      <section id="about">
        <AboutSection />
      </section>

      {/* 02 SELECTED WORK */}
      <section id="redes-sociales">
        <SocialSection />
      </section>

      {/* 03 PROJECT FEATURES */}
      <section id="branding">
        <ProjectFeaturesSection />
      </section>
      <ServicesSection />
      <TestimonialsSection />

      {/* 04 EMAIL DESIGN */}
      <section id="email-design">
        <EmailDesignSection />
      </section>
      {/* 05 CONTACT */}
      <footer id="contact" className="contact-section">
        <ContactSection />
      </footer>
      <BackToTopButton />
    </main>
  );
}

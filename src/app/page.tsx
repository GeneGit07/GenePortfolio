import HeroSection from "@/components/hero/HeroSection";
import SocialSection from "@/components/social/SocialSection";
import AboutSection from "@/components/about/AboutSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectFeaturesSection from "@/components/features/ProjectFeaturesSection";
import TestimonialsSection from "@/components/features/TestimonialsSection";
import EmailDesignSection from "@/components/features/EmailDesignSection";
import ContactSection from "@/components/contact/ContactSection";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTopButton from "@/components/layout/BackToTopButton";

export default function HomePage() {
  return (
    <main id="main-content">
      <ScrollProgress />

      <section id="hero" className="hero-section">
        <HeroSection />
      </section>

      {/* 01 — Selected work */}
      <section id="work">
        <SocialSection />
      </section>

      {/* 02 — About */}
      <section id="about">
        <AboutSection />
      </section>

      {/* 03 — Experience */}
      <section id="experience">
        <ExperienceSection />
      </section>

      {/* 04 — Services */}
      <section id="services">
        <ProjectFeaturesSection />
      </section>

      {/* Renders only once approved testimonials are added. */}
      <TestimonialsSection />

      {/* 05 — Email design */}
      <section id="email-design">
        <EmailDesignSection />
      </section>

      {/* 06 — Contact */}
      <section id="contact">
        <ContactSection />
      </section>

      <BackToTopButton />
    </main>
  );
}

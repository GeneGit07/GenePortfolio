import Link from "next/link";
import { PROJECT_FEATURES } from "@/data/site";

const services = PROJECT_FEATURES.slice(0, 3);

export default function ServicesSection() {
  return (
    <section className="page-section" aria-labelledby="services-title">
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-label text-accent">Work with me</p>
          <h2 id="services-title" className="mt-3 font-display text-4xl font-semibold leading-tight md:text-6xl">Services</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="service-card">
              <p className="section-label text-accent">0{index + 1}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 max-w-[65ch] text-base leading-[1.65] text-muted">{service.description}</p>
            </article>
          ))}
        </div>
        <Link href="#contact" className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink hover:bg-accent-hover">
          Start a project <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
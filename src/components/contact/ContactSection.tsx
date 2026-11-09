import FadeInView from "@/components/ui/FadeInView";
import ContactForm from "./ContactForm";
import { CONTACT } from "@/data/site";

export default function ContactSection() {
  return (
    <FadeInView className="page-shell">
      <div className="contact-panel">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col items-start lg:col-span-5">
            <p className="section-label text-accent">{CONTACT.sectionNumber} / Let’s make something memorable</p>
            <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.1] md:text-7xl">Have a good<br />idea<span className="italic">?</span></h2>
            <p className="mt-5 max-w-[55ch] leading-[1.65] text-muted">{CONTACT.description}</p>
            <div className="mt-8 w-full">
              <a href={CONTACT.emailHref} className="contact-link-row group">
                <span>{CONTACT.email}</span>
                <span aria-hidden="true" className="shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1">↗</span>
              </a>
              <a href={CONTACT.phoneHref} className="contact-link-row group mt-2">
                <span>{CONTACT.phoneDisplay}</span>
                <span aria-hidden="true" className="shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1">↗</span>
              </a>
            </div>
            <p className="section-label mt-8 text-muted">Batangas, Philippines · Available worldwide</p>
          </div>
          <div className="contact-form-card lg:col-span-7">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="section-label text-accent">Tell me about your project</p>
              <span aria-hidden="true" className="grid size-9 place-items-center rounded-full bg-accent text-accent-ink">↘</span>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </FadeInView>
  );
}

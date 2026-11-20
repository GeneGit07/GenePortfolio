import FadeInView from "@/components/ui/FadeInView";
import ContactForm from "./ContactForm";
import { CONTACT } from "@/data/site";

export default function ContactSection() {
  return (
    <div className="page-shell">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <FadeInView className="lg:col-span-6">
          <p className="eyebrow">
            <span className="eyebrow-index">06</span>
            <span aria-hidden="true" className="eyebrow-rule" />
            Contact
          </p>
          <h2 className="display-1 mt-6">
            Let’s work <span className="italic text-muted">together.</span>
          </h2>
          <p className="lead mt-8">{CONTACT.description}</p>

          <div className="mt-12">
            <a href={CONTACT.emailHref} target="_blank" rel="noopener noreferrer" className="contact-link group">
              <span>{CONTACT.email}</span>
              <span aria-hidden="true" className="btn-arrow shrink-0 text-accent">→</span>
            </a>
            <a href={CONTACT.phoneHref} className="contact-link group">
              <span>{CONTACT.phoneDisplay}</span>
              <span aria-hidden="true" className="btn-arrow shrink-0 text-accent">→</span>
            </a>
          </div>
          <p className="section-label mt-8 text-muted">{CONTACT.location} · Working with clients worldwide</p>
        </FadeInView>

        <FadeInView delay={0.05} className="lg:col-span-6 lg:pt-4">
          <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
            <p className="section-label mb-6 text-muted">Send a message</p>
            <ContactForm />
          </div>
        </FadeInView>
      </div>
    </div>
  );
}

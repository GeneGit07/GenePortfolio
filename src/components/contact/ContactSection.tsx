import FadeInView from "@/components/ui/FadeInView";
import ContactForm from "./ContactForm";
import { CONTACT } from "@/data/site";

export default function ContactSection() {
  return (
    <FadeInView>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="text-sm font-mono font-medium text-muted">
            {CONTACT.sectionNumber}
          </span>
          <h2 className="mt-1 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
            {CONTACT.title}
          </h2>
          <p className="mt-4 max-w-md text-muted">{CONTACT.description}</p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 text-sm tracking-wide text-muted hover:text-foreground"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>{" "}
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.emailHref}
              className="inline-flex items-center gap-2 text-sm tracking-wide text-muted hover:text-foreground"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>{" "}
              {CONTACT.email}
            </a>
          </div>
        </div>
        <div className="relative md:col-span-6 md:col-start-7">
          <ContactForm />
        </div>
      </div>
    </FadeInView>
  );
}

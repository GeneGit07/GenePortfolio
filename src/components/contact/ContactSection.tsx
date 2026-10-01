import FadeInView from "@/components/ui/FadeInView";
import { CONTACT, SOCIAL_LINKS } from "@/data/site";

export default function ContactSection() {
  return (
    <FadeInView>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="text-sm font-mono font-medium text-muted">
            {CONTACT.sectionNumber}
          </span>
          <h2 className="mt-1 text-4xl font-bold uppercase tracking-tight md:text-5xl">
            {CONTACT.title}
          </h2>
          <p className="mt-4 max-w-md text-muted">{CONTACT.description}</p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 text-sm tracking-wide text-muted hover:text-foreground"
            >
              <span className="text-subtle">T</span> {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.emailHref}
              className="inline-flex items-center gap-2 text-sm tracking-wide text-muted hover:text-foreground"
            >
              <span className="text-subtle">@</span> {CONTACT.email}
            </a>
          </div>
        </div>
        <div className="md:col-span-5 md:col-start-8 md:flex md:flex-col md:justify-end">
          <p className="mb-4 text-sm font-mono uppercase tracking-widest text-muted">
            Social
          </p>
          <div className="flex flex-col gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-border pb-3 text-sm uppercase tracking-widest text-muted hover:text-foreground"
              >
                <span>{link.name}</span>
                <span className="text-subtle group-hover:text-foreground">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </FadeInView>
  );
}

import Link from "next/link";
import { CONTACT, SOCIAL_LINKS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="page-shell flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="inline-flex min-h-11 items-center font-display text-xl tracking-tight">
          Eugene Dalida<span className="text-accent">.</span>
        </Link>
        <nav aria-label="Social links" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <a href={CONTACT.emailHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-text">
            Email
          </a>
          {SOCIAL_LINKS.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-text">
              {link.name}
            </a>
          ))}
        </nav>
        <p className="text-xs text-subtle">
          © {new Date().getFullYear()} Eugene Dalida · {CONTACT.location}
        </p>
      </div>
    </footer>
  );
}

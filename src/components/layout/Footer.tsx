import Link from "next/link";
import { SOCIAL_LINKS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background text-text">
      <div className="page-shell grid gap-8 py-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <Link href="/" className="inline-flex min-h-11 items-center font-display text-2xl font-semibold">Eugene Dalida<span className="text-accent">.</span></Link>
        <nav aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-3">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="min-h-11 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent">
              {link.name} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
        <div className="text-sm leading-relaxed text-muted md:text-right">
          <p>© {new Date().getFullYear()} Eugene Dalida. All rights reserved.</p>
          <p>Made with intention in Batangas.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { SOCIAL_LINKS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-16 bg-foreground text-background md:mt-24">
      <div className="page-shell py-12 md:py-16">
        <div className="flex flex-col justify-between gap-10 border-b border-background/15 pb-10 md:flex-row md:items-end md:pb-14">
          <div><p className="section-label text-background/55">INDEPENDENT DESIGNER · MANILA</p><Link href="/" className="mt-5 block font-display text-6xl font-medium tracking-[-0.08em] md:text-8xl">Eugene Dalida<span className="text-accent">.</span></Link></div>
          <nav aria-label="Social links" className="flex flex-wrap gap-2">{SOCIAL_LINKS.map((link) => <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-background/20 px-5 py-3 text-sm text-background/80 hover:border-background hover:bg-background hover:text-foreground">{link.name} ↗</a>)}</nav>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-5 text-xs text-background/50 md:flex-row"><p>© {new Date().getFullYear()} Eugene Dalida. All rights reserved.</p><p>Made with intention in Manila.</p></div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((value) => !value), []);

  const buildObserver = useCallback(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActiveSection(entry.target.id);
    }, { rootMargin: "-42% 0px -52% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return observer;
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observer = buildObserver();
    return () => observer.disconnect();
  }, [isHome, pathname, buildObserver]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHome) return;
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header-in fixed inset-x-0 top-0 z-40">
      <nav aria-label="Primary navigation" className="page-shell mt-3 flex h-[4.35rem] items-center justify-between rounded-full border border-border/80 bg-background/90 px-4 shadow-[0_12px_40px_-24px_rgba(23,25,19,.35)] backdrop-blur-xl md:mt-5 md:h-[4.75rem] md:px-7">
        <Link href="/" onClick={(event) => handleClick(event, "hero")} className="flex items-center gap-2.5" aria-label="Back to home">
          <span className="grid size-9 place-items-center rounded-full bg-foreground font-display text-sm font-semibold tracking-[-0.08em] text-background">ED.</span>
          <span className="leading-none"><span className="block whitespace-nowrap font-display text-sm font-medium tracking-wide">EUGENE DALIDA</span><span className="header-descriptor mt-1 block text-muted">INDEPENDENT DESIGNER</span></span>
        </Link>
        {isHome ? <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map(({ id, label }) => <a key={id} href={`#${id}`} onClick={(event) => handleClick(event, id)} className={`rounded-full px-4 py-2.5 text-[0.72rem] transition-colors hover:bg-surface ${activeSection === id ? "bg-surface text-foreground" : "text-muted"}`}>{label}</a>)}
          <span className="mx-1 h-5 w-px bg-border" /><ThemeToggle className="rounded-full hover:bg-surface" />
        </div> : <div className="hidden items-center gap-2 lg:flex"><Link href="/#redes-sociales" className="rounded-full px-4 py-2 text-sm text-muted hover:text-foreground">Back to work</Link><ThemeToggle className="rounded-full hover:bg-surface" /></div>}
        <div className="flex items-center gap-1 lg:hidden">{!isHome && <Link href="/#redes-sociales" className="rounded-full px-3 py-2 text-xs text-muted hover:text-foreground">Back to work</Link>}<ThemeToggle className="rounded-full hover:bg-surface" />{isHome && <MobileMenu open={menuOpen} activeSection={activeSection} onToggle={toggleMenu} onNavigate={handleClick} />}</div>
      </nav>
    </header>
  );
}

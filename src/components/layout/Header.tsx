"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((value) => !value), []);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 8);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

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
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <header className={`site-header ${hasScrolled ? "is-scrolled" : ""}`}>
      <nav aria-label="Primary navigation" className="page-shell flex h-16 items-center justify-between gap-6">
        <Link href="/" onClick={(event) => handleClick(event, "hero")} className="inline-flex min-h-12 min-w-12 items-center gap-2.5" aria-label="Back to home">
          <span className="grid size-9 place-items-center rounded-full bg-accent font-display text-sm font-semibold text-accent-ink">ED.</span>
          <span className="leading-none"><span className="block whitespace-nowrap font-display text-sm font-medium tracking-wide">EUGENE DALIDA</span><span className="header-descriptor mt-1 block text-muted">INDEPENDENT DESIGNER</span></span>
        </Link>
        {isHome ? (
          <div className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => handleClick(event, id)}
                aria-current={activeSection === id ? "location" : undefined}
                className={`nav-link inline-flex min-h-11 min-w-11 items-center justify-center px-1 py-2 text-sm ${activeSection === id ? "is-active" : ""}`}
              >
                {label}
              </a>
            ))}
          </div>
        ) : (
          <Link href="/#redes-sociales" className="hidden min-h-12 items-center text-sm text-muted hover:text-accent lg:flex">
            Back to work
          </Link>
        )}
        <div className="flex items-center lg:hidden">
          {!isHome && <Link href="/#redes-sociales" className="mr-2 inline-flex min-h-12 items-center px-2 text-sm text-muted hover:text-accent">Back to work</Link>}
          {isHome && <MobileMenu open={menuOpen} activeSection={activeSection} onToggle={toggleMenu} onNavigate={handleClick} />}
        </div>
      </nav>
    </header>
  );
}

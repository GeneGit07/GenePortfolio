"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS, WORK_ANCHOR } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((value) => !value), []);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 8);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = ["hero", ...NAV_ITEMS.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id === "hero" ? "" : entry.target.id);
        }
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  // Lenis (`anchors` option in SmoothScrollProvider) performs the scroll for
  // same-page "#id" links; we only stop the native jump. The logo links to "/",
  // so it is scrolled to the top explicitly.
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHome) return;
    event.preventDefault();
    if (id === "hero") document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site-header ${hasScrolled || !isHome ? "is-scrolled" : ""}`}>
      <nav aria-label="Primary navigation" className="page-shell flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <Link
          href="/"
          onClick={(event) => handleClick(event, "hero")}
          className="inline-flex min-h-11 items-center gap-3"
          aria-label="Eugene Dalida — back to home"
        >
          <span className="font-display text-xl tracking-tight">Eugene Dalida</span>
          <span aria-hidden="true" className="hidden h-4 w-px bg-border-strong sm:block" />
          <span className="section-label hidden text-muted sm:block">Visual Designer</span>
        </Link>

        {isHome ? (
          <div className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.filter(({ id }) => id !== "contact").map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => handleClick(event, id)}
                aria-current={activeSection === id ? "location" : undefined}
                className={`nav-link inline-flex min-h-11 items-center px-1 ${activeSection === id ? "is-active" : ""}`}
              >
                {label}
              </a>
            ))}
            <a href="#contact" onClick={(event) => handleClick(event, "contact")} className="btn btn-ghost ml-2 min-h-10 px-5 py-2">
              Let’s talk
            </a>
          </div>
        ) : (
          <Link href={WORK_ANCHOR} className="group text-link hidden min-h-11 lg:inline-flex">
            <span aria-hidden="true">←</span> Back to work
          </Link>
        )}

        <div className="flex items-center lg:hidden">
          {!isHome && (
            <Link href={WORK_ANCHOR} className="inline-flex min-h-11 items-center px-2 text-sm text-muted hover:text-text">
              ← Work
            </Link>
          )}
          {isHome && <MobileMenu open={menuOpen} activeSection={activeSection} onToggle={toggleMenu} onNavigate={handleClick} />}
        </div>
      </nav>
    </header>
  );
}

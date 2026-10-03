"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS, PAGE_PADDING_X } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const buildObserver = useCallback(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return null;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        // Banda central del viewport: solo la sección que cruza el centro
        // se marca activa. Independiente de la altura de cada sección.
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      },
    );

    for (const sec of sections) observer.observe(sec);
    return observer;
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observer = buildObserver();
    return () => observer?.disconnect();
  }, [isHome, pathname, buildObserver]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHome) return;
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    if (!isHome) return;
    setMenuOpen((prev) => !prev);
  };

  if (!isHome) {
    return (
      <header
        ref={headerRef}
        className="fixed top-0 right-0 left-0 z-40 border-b border-border/60 bg-background backdrop-blur-md"
      >
        <div className={`flex items-center justify-between py-4 ${PAGE_PADDING_X}`}>
          <Link href="/" aria-label="Ir al inicio">
            <Image
              src="/assets/home/logo-white.webp"
              alt="Logo"
              width={1000}
              height={1000}
              className="block h-10 w-auto object-contain light:hidden md:h-11"
              priority
            />
            <Image
              src="/assets/home/logo-black.webp"
              alt="Logo"
              width={1000}
              height={1000}
              className="hidden h-10 w-auto object-contain light:block md:h-11"
              priority
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs tracking-widest text-muted hover:text-foreground"
            >
              Volver
            </Link>
            <span aria-hidden className="h-4 w-px bg-border" />
            <ThemeToggle />
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        ref={headerRef}
        className="animate-header-in fixed top-0 right-0 left-0 z-40 border-b border-border/60 bg-background"
      >
        {/* DESKTOP NAVBAR */}
        <nav className={`hidden lg:flex items-center justify-between py-4 ${PAGE_PADDING_X}`}>
          <a
            href="#"
            onClick={(e) => handleClick(e, "hero")}
            aria-label="Ir al inicio"
            className="shrink-0"
          >
            <Image
              src="/assets/home/logo-white.webp"
              alt="Logo"
              width={1000}
              height={1000}
              className="block h-10 w-auto object-contain light:hidden md:h-11"
              priority
            />
            <Image
              src="/assets/home/logo-black.webp"
              alt="Logo"
              width={1000}
              height={1000}
              className="hidden h-10 w-auto object-contain light:block md:h-11"
              priority
            />
          </a>
          <div className="flex items-center gap-6">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`relative whitespace-nowrap text-xs tracking-widest ${
                  activeSection === id
                    ? "text-foreground"
                    : "text-muted"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-1/2 h-px w-full bg-foreground -translate-x-1/2 ${
                    activeSection === id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            ))}
            <span aria-hidden className="h-6 w-px bg-border" />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile header bar */}
        <div className={`lg:hidden flex h-16 items-center justify-between py-4 ${PAGE_PADDING_X}`}>
          <a href="#hero" onClick={(e) => handleClick(e, "hero")} aria-label="Ir al inicio">
            <Image
              src="/assets/home/logo-white.webp"
              alt="Logo"
              width={1000}
              height={1000}
              className="block h-8 w-auto object-contain light:hidden"
              priority
            />
            <Image
              src="/assets/home/logo-black.webp"
              alt="Logo"
              width={1000}
              height={1000}
              className="hidden h-8 w-auto object-contain light:block"
              priority
            />
          </a>
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle size="sm" />
            <MobileMenu
              open={menuOpen}
              activeSection={activeSection}
              onToggle={toggleMenu}
              onNavigate={handleClick}
            />
          </div>
        </div>
      </header>
    </>
  );
}

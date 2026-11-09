"use client";

import { useEffect, useState } from "react";

interface SectionLink {
  id: string;
  title: string;
}

const PILL_BASE =
  "inline-flex min-h-11 shrink-0 snap-start items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium uppercase tracking-[0.1em]";
const PILL_IDLE =
  "border-border bg-surface text-muted hover:border-border-strong hover:text-accent";
const PILL_ACTIVE = "border-accent bg-accent text-accent-ink";

export default function SocialSectionNav({ sections }: { sections: SectionLink[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(`section-${section.id}`))
      .filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id.replace("section-", ""));
          }
        }
      },
  // Central viewport band, matching the Header's NAV_ITEMS observer.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    for (const sec of elements) observer.observe(sec);
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  const handleClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    };

  return (
    <nav className="sticky top-16 z-20 -mx-6 bg-background px-6 py-4 sm:-mx-8 sm:px-8 md:mx-0 md:top-[64px] md:px-0">
      <div className="flex snap-x snap-mandatory items-center gap-3 overflow-x-auto scroll-smooth py-1 md:justify-start md:gap-4 lg:justify-center lg:overflow-visible">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#section-${section.id}`}
            onClick={handleClick(`section-${section.id}`)}
            aria-current={active === section.id ? "true" : undefined}
            className={`${PILL_BASE} ${active === section.id ? PILL_ACTIVE : PILL_IDLE}`}
          >
            {section.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";

interface SectionLink {
  id: string;
  title: string;
}

const PILL_BASE =
  "inline-flex min-h-10 shrink-0 snap-start items-center justify-center rounded-full border px-4 py-2 text-[0.8125rem] whitespace-nowrap";
const PILL_IDLE =
  "border-border text-muted hover:border-border-strong hover:text-text";
const PILL_ACTIVE = "border-text bg-text text-background";

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
      // Handled here (respects scroll-margin under the sticky nav), not by Lenis anchors.
      e.stopPropagation();
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    };

  return (
    <nav aria-label="Case study sections" className="sticky top-16 z-20 -mx-[var(--container-gutter)] bg-background/90 px-[var(--container-gutter)] py-3 backdrop-blur-md md:top-[72px]">
      <div className="flex snap-x snap-mandatory items-center gap-2 overflow-x-auto py-1 [scrollbar-width:none]">
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

"use client";

import { useEffect, useState } from "react";

const LABELS: Record<string, string> = {
  banner: "Banners",
  carousel: "Carruseles",
  post: "Posts",
  reel: "Reels",
  mockup: "Mockups",
};

const PILL_BASE =
  "inline-flex shrink-0 snap-start items-center justify-center rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-widest shadow-sm";
const PILL_IDLE =
  "border-foreground/15 bg-surface/60 text-muted hover:border-foreground/30 hover:bg-surface hover:text-foreground";
const PILL_ACTIVE = "border-foreground bg-foreground text-background";

export default function SocialSectionNav({ kinds }: { kinds: string[] }) {
  const [active, setActive] = useState(kinds[0] ?? "");

  useEffect(() => {
    const sections = kinds
      .map((k) => document.getElementById(`section-${k}`))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id.replace("section-", ""));
          }
        }
      },
      // Banda central del viewport, igual que el Header con NAV_ITEMS.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    for (const sec of sections) observer.observe(sec);
    return () => observer.disconnect();
  }, [kinds]);

  if (kinds.length === 0) return null;

  const handleClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <nav className="sticky top-16 z-20 -mx-6 bg-background px-6 py-4 sm:-mx-8 sm:px-8 md:mx-0 md:top-[64px] md:px-0">
      <div className="flex snap-x snap-mandatory items-center gap-3 overflow-x-auto scroll-smooth py-1 md:justify-center md:gap-4 md:overflow-visible">
        {kinds.map((kind) => (
          <a
            key={kind}
            href={`#section-${kind}`}
            onClick={handleClick(`section-${kind}`)}
            aria-current={active === kind ? "true" : undefined}
            className={`${PILL_BASE} ${active === kind ? PILL_ACTIVE : PILL_IDLE}`}
          >
            {LABELS[kind] ?? kind}
          </a>
        ))}
      </div>
    </nav>
  );
}

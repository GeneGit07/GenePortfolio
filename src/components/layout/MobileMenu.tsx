"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { useEffect } from "react";
import { createPortal } from "react-dom";

type MobileMenuProps = {
  open: boolean;
  activeSection: string;
  onToggle: () => void;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
};

export default function MobileMenu({ open, activeSection, onToggle, onNavigate }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onToggle();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open, onToggle]);

  return (
    <>
      <button
        onClick={onToggle}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        className="relative z-50 flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1 rounded-full text-muted hover:bg-surface hover:text-foreground"
      >
        <span
          className={`block h-0.5 w-5 bg-current ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-current ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-current ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-x-0 top-[5.15rem] bottom-0 z-[60] overflow-y-auto rounded-b-3xl border border-t-0 border-border/80 bg-background px-6 shadow-2xl sm:px-8"
            >
              <nav className="page-shell flex min-h-full flex-col justify-center gap-4 py-8">
                {NAV_ITEMS.map(({ id, label }, i) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => {
                      onNavigate(e, id);
                      onToggle();
                    }}
                    style={{ transitionDelay: `${i * 0.05}s` }}
                    className={`relative font-display text-[clamp(2.25rem,8vw,4rem)] font-medium leading-[0.95] tracking-[-0.05em] text-muted md:text-7xl ${activeSection === id ? "text-foreground" : ""}`}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-1 left-1/2 h-px w-full -translate-x-1/2 bg-foreground ${activeSection === id ? "opacity-100" : "opacity-0"}`}
                    />
                  </a>
                ))}
              </nav>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

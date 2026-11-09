"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type MobileMenuProps = {
  open: boolean;
  activeSection: string;
  onToggle: () => void;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
};

export default function MobileMenu({ open, activeSection, onToggle, onNavigate }: MobileMenuProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const focusables = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ) ?? []);
    const initialFocus = window.requestAnimationFrame(() => focusables()[0]?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onToggle();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(initialFocus);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [open, onToggle]);

  return (
    <>
      <button
        ref={triggerRef}
        onClick={onToggle}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation-dialog"
        className="relative z-50 flex size-12 shrink-0 flex-col items-center justify-center gap-1 rounded-full text-muted hover:bg-surface-2 hover:text-accent"
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
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              id="mobile-navigation-dialog"
              tabIndex={-1}
              className="mobile-menu-panel fixed inset-0 z-[60] overflow-y-auto bg-background px-6 sm:px-8"
            >
              <div className="page-shell flex min-h-full flex-col">
                <div className="flex h-16 items-center justify-between border-b border-border">
                  <span className="section-label text-accent">Navigation</span>
                  <button type="button" onClick={onToggle} className="min-h-12 min-w-12 text-2xl text-muted hover:text-accent" aria-label="Close navigation">×</button>
                </div>
                <nav aria-label="Mobile navigation links" className="flex flex-1 flex-col justify-center gap-2 py-8">
                {NAV_ITEMS.map(({ id, label }, i) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    aria-current={activeSection === id ? "location" : undefined}
                    onClick={(e) => {
                      onNavigate(e, id);
                      onToggle();
                    }}
                    style={{ transitionDelay: `${Math.min(i * 35, 175)}ms` }}
                    className={`mobile-menu-link relative flex min-h-12 items-center font-display text-4xl font-semibold leading-[1.1] text-muted md:text-7xl ${activeSection === id ? "text-foreground" : ""}`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-1 left-0 h-px w-full bg-accent ${activeSection === id ? "opacity-100" : "opacity-0"}`}
                    />
                  </a>
                ))}
                </nav>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

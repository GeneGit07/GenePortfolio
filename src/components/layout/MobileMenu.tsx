"use client";

import { NAV_ITEMS } from "@/lib/constants";

type MobileMenuProps = {
  open: boolean;
  activeSection: string;
  onToggle: () => void;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
};

export default function MobileMenu({ open, activeSection, onToggle, onNavigate }: MobileMenuProps) {
  return (
    <>
      <button
        onClick={onToggle}
        aria-label={open ? "Cerrar navegación" : "Abrir navegación"}
        aria-expanded={open}
        className="relative z-50 flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1 text-muted hover:text-foreground"
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

      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-30 bg-background backdrop-blur-md ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 pt-12 pb-24 min-h-full justify-center">
          {NAV_ITEMS.map(({ id, label }, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                onNavigate(e, id);
                onToggle();
              }}
              style={{ transitionDelay: `${open ? i * 0.05 : 0}s` }}
              className={`text-xl relative uppercase tracking-widest ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${
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
        </nav>
      </div>
    </>
  );
}

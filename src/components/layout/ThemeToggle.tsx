"use client";

import { useTheme } from "./ThemeProvider";

type ThemeToggleProps = {
  size?: "sm" | "md";
  className?: string;
};

const ICON_SIZE = 22;

export default function ThemeToggle({ size = "md", className = "" }: ThemeToggleProps) {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";
  void size;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isLight}
      aria-label={isLight ? "Cambiar a tema oscuro" : "Cambiar a tema claro"}
      title={isLight ? "Tema oscuro" : "Tema claro"}
      className={`inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center text-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${className}`}
    >
      <span className="block" style={{ width: ICON_SIZE, height: ICON_SIZE }} aria-hidden>
        {isLight ? (
          <svg
            width={ICON_SIZE}
            height={ICON_SIZE}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg
            width={ICON_SIZE}
            height={ICON_SIZE}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="5" fill="currentColor" stroke="none" />
            <path d="M12 2.5v2.5M12 19v2.5M2.5 12h2.5M19 12h2.5M7 7L4.9 4.9M17 17l2.1 2.1M17 7l2.1-2.1M7 17l-2.1 2.1" />
          </svg>
        )}
      </span>
    </button>
  );
}

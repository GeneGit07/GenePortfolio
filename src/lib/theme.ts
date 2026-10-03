export type Theme = "dark" | "light";

export const STORAGE_KEY = "dp-theme";

export function currentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // almacenamiento no disponible
  }
}

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => {
    finished: Promise<void>;
  };
};

export function canViewTransition(): boolean {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return false;
  }
  const doc = document as DocumentWithViewTransition;
  if (typeof doc.startViewTransition !== "function") return false;
  try {
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return true;
  }
}

export function startThemeViewTransition(
  callback: () => void,
): { finished: Promise<void> } | null {
  if (!canViewTransition()) return null;
  const doc = document as DocumentWithViewTransition;
  try {
    return doc.startViewTransition?.(callback) ?? null;
  } catch {
    return null;
  }
}

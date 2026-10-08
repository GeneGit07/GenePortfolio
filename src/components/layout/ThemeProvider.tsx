"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";
import {
  currentTheme,
  applyTheme,
  startThemeViewTransition,
  type Theme,
} from "@/lib/theme";

export type { Theme };

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Sincroniza con la clase .light inyectada por el script inline de layout.tsx
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(currentTheme());
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = currentTheme() === "light" ? "dark" : "light";
    const root = document.documentElement;
    // Suprime las transiciones por elemento durante el flip: con `html *`
    // transicionando `color`, los valores heredados se animarían en cascada
    // (eco tardío en títulos e iconos). La única animación es el crossfade
    // de View Transitions; sin soporte o con reduced-motion, cambio directo.
    const flip = () => {
      root.classList.add("theme-flip");
      applyTheme(next);
      setTheme(next);
    };
    const done = () => root.classList.remove("theme-flip");
    const vt = startThemeViewTransition(() => flushSync(flip));
    if (vt) {
      vt.finished.then(done, done);
    } else {
      flip();
      requestAnimationFrame(() => requestAnimationFrame(done));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

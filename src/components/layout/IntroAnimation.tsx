"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function IntroAnimation() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(pathname === "/");

  useEffect(() => {
    if (pathname !== "/") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const timeout = window.setTimeout(() => setIsVisible(false), 1900);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  if (!isVisible || pathname !== "/") return null;

  return (
    <div className="intro-overlay" role="status" aria-label="Welcome to Eugene Dalida’s portfolio">
      <div className="intro-topline">
        <span>INDEPENDENT DESIGNER</span>
        <span>MANILA · PHILIPPINES</span>
      </div>

      <button
        type="button"
        className="intro-skip"
        onClick={() => setIsVisible(false)}
        aria-label="Skip intro animation"
      >
        Skip <span aria-hidden="true">↗</span>
      </button>

      <div className="intro-center" aria-hidden="true">
        <span className="intro-mark">ED<span>.</span></span>
        <h2 className="intro-name">Eugene Dalida</h2>
        <span className="intro-tagline">Design with intention · Create with AI</span>
        <span className="intro-rule" />
      </div>

      <div className="intro-bottomline" aria-hidden="true">
        <span>VISUAL STORYTELLING</span>
        <span>PORTFOLIO · 2026</span>
      </div>
    </div>
  );
}

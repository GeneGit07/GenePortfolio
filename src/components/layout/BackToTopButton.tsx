"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 560);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      className="back-to-top fixed bottom-5 right-5 z-30 grid size-12 place-items-center rounded-full border border-border-strong bg-surface text-lg text-accent shadow-soft hover:border-accent hover:bg-surface-2 md:bottom-8 md:right-8"
    >
      ↑
    </button>
  );
}
"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// Unificado para reúso en GalleryGrid (branding/social) y resto del sitio.
// Uso: <FadeInView delay={Math.min(index*0.035, 0.35)}> via GalleryGrid.Item
interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number; // seconds; keep at or below 0.35
  style?: CSSProperties;
}

export default function FadeInView({
  children,
  className = "",
  delay = 0,
  style,
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // El delay escalonado solo existe para el reveal de entrada: una vez
  // completado se limpia para no retrasar futuras transiciones (p. ej. el
  // fade de colores al cambiar de tema).
  const [delayDone, setDelayDone] = useState(delay === 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(el);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || delayDone) return;
    const t = setTimeout(() => setDelayDone(true), delay * 1000);
    return () => clearTimeout(t);
  }, [isVisible, delay, delayDone]);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ ...style, transitionDelay: delayDone ? "0s" : `${delay}s` }}
    >
      {children}
    </div>
  );
}

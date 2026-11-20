"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

const HEADER_OFFSET = -72;

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 1,
      // In-page "#section" links scroll through Lenis, clear of the fixed header.
      anchors: { offset: HEADER_OFFSET },
    });
    lenisRef.current = lenis;
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // On route change, reset through Lenis (not window.scrollTo) so its internal
  // state stays in sync. If the new URL carries a hash (e.g. "/#work" from a
  // case page), land on that section instead of the top.
  useEffect(() => {
    const lenis = lenisRef.current;
    const hash = window.location.hash;
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;

    if (!lenis) {
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
      return;
    }

    if (target) {
      const frame = requestAnimationFrame(() =>
        lenis.scrollTo(target, { immediate: true, force: true, offset: HEADER_OFFSET }),
      );
      return () => cancelAnimationFrame(frame);
    }
    lenis.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return <>{children}</>;
}

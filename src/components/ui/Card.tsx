import type { ReactNode } from "react";

// Shell visual único de cards (home + cases): fondo sólido + padding interno.
export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-border bg-surface p-6 text-text shadow-soft md:p-8 ${className}`}>
      {children}
    </div>
  );
}

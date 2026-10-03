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
    <div className={`bg-foreground p-6 text-background shadow-sm rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

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
    <div className={`rounded-[1.5rem] bg-foreground p-4 text-background md:p-6 ${className}`}>
      {children}
    </div>
  );
}

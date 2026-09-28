"use client";

interface Props {
  onClick: () => void;
}

export default function ShowMoreButton({ onClick }: Props) {
  return (
    <div className="relative flex justify-center pt-16 md:pt-24">
      <button
        onClick={onClick}
        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-foreground/15 bg-surface/60 px-6 py-3 text-sm font-medium tracking-wide text-foreground shadow-sm hover:border-foreground/30 hover:bg-surface"
      >
        Ver más <span aria-hidden className="text-subtle">↓</span>
      </button>
    </div>
  );
}

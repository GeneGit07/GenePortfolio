"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { FeatureLibraryItem, ProjectFeatureMedia } from "@/data/projectFeatureMedia";

function LibraryItem({ item }: { item: FeatureLibraryItem }) {
  const media = item.kind === "video" ? (
    <video
      controls
      playsInline
      preload="metadata"
      poster={item.poster}
      aria-label={item.alt}
      className="h-full w-full object-cover"
    >
      <source src={item.src} type="video/webm" />
      Your browser does not support this video.
    </video>
  ) : (
    <Image
      src={item.src}
      alt={item.alt}
      fill
      sizes="(max-width: 768px) 90vw, 42vw"
      className={item.fit === "contain" ? "object-contain" : "object-cover"}
    />
  );

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div
        className={`relative overflow-hidden bg-black/5 ${item.kind === "video" ? "aspect-video" : item.fit === "contain" ? "aspect-[4/5]" : "aspect-[4/3]"}`}
      >
        {media}
      </div>
      <div className="flex items-end justify-between gap-4 p-4">
        <div>
          <p className="section-label text-muted">{item.project}</p>
          <h4 className="mt-2 font-display text-lg font-medium tracking-[-0.03em]">
            {item.title}
          </h4>
        </div>
        {item.href ? (
          <Link
            href={item.href}
            className="shrink-0 rounded-full border border-border px-3 py-2 text-xs text-muted hover:text-foreground"
          >
            View project ↗
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export default function FeatureLibraryDialog({
  media,
  number,
  description,
  onClose,
}: {
  media: ProjectFeatureMedia;
  number: string;
  description: string;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-md md:p-8"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="feature-library-title"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-border bg-background p-5 shadow-2xl md:p-8"
      >
        <div className="mb-7 flex items-start justify-between gap-6 md:mb-9">
          <div>
            <p className="section-label text-muted">
              {number} / Project library
            </p>
            <h3
              id="feature-library-title"
              className="mt-3 font-display text-3xl font-medium tracking-[-0.05em] md:text-5xl"
            >
              {media.feature}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              {description}
            </p>
            {media.note ? (
              <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted/80">
                {media.note}
              </p>
            ) : null}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close project library"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-xl leading-none hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {media.library.map((item) => (
            <LibraryItem key={`${item.src}-${item.title}`} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

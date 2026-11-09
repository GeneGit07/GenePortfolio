"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { activateExclusiveVideo } from "@/lib/videoPlayback";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
  mediaType?: "image" | "video";
  poster?: string;
  onPrevious?: () => void;
  onNext?: () => void;
}

/**
 * Full-screen media viewer with a dimmed backdrop and centered image/video.
 * Close it by clicking the backdrop, the close button, or Escape.
 */
export default function ImageModal({ src, alt, onClose, mediaType = "image", poster, onPrevious, onNext }: ImageModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const isVideo = mediaType === "video";
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    const focusables = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), video[controls], [href], [tabindex]:not([tabindex="-1"])',
    ) ?? []);
    const initialFocus = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (!isVideo && event.key === "ArrowLeft") onPrevious?.();
      if (!isVideo && event.key === "ArrowRight") onNext?.();
      if (event.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.cancelAnimationFrame(initialFocus);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isVideo, onClose, onNext, onPrevious]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      ref={dialogRef}
      onClick={onClose}
      className="lightbox-backdrop fixed inset-0 z-100 flex items-center justify-center p-4 backdrop-blur-sm md:p-8"
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close enlarged media"
        className="lightbox-control absolute right-4 top-4 z-10 flex min-h-12 min-w-12 cursor-pointer items-center justify-center rounded-full text-xl leading-none"
      >
        <span aria-hidden>×</span>
      </button>
      <div
        className="absolute inset-0 flex items-center justify-center overflow-auto p-4 md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {isVideo ? (
          <div className="w-full max-w-5xl">
            <video
              src={src}
              poster={poster}
              controls
              muted={false}
              loop
              playsInline
              onPlay={(event) => activateExclusiveVideo(event.currentTarget)}
              className="max-h-[82vh] w-full rounded-xl bg-surface object-contain shadow-soft"
            />
          </div>
        ) : (
          <div className="flex max-h-full w-full max-w-6xl items-center justify-center gap-3">
            {onPrevious ? <button type="button" className="lightbox-control min-h-12 min-w-12 shrink-0 rounded-full text-xl" onClick={onPrevious} aria-label="Previous image">←</button> : null}
            <button
              type="button"
              onClick={() => setIsZoomed((zoomed) => !zoomed)}
              aria-label={isZoomed ? "Fit image to screen" : "Zoom image"}
              title={isZoomed ? "Fit image to screen" : "Zoom image"}
              className={`relative cursor-zoom-in overflow-hidden rounded-xl border border-border bg-surface ${isZoomed ? "h-[88vh] w-[90vw]" : "h-[85vh] w-full max-w-5xl"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={alt} loading="eager" decoding="async" className="h-full w-full object-contain" />
            </button>
            {onNext ? <button type="button" className="lightbox-control min-h-12 min-w-12 shrink-0 rounded-full text-xl" onClick={onNext} aria-label="Next image">→</button> : null}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}

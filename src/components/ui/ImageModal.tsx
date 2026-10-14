"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

/**
 * Full-screen image viewer with a dimmed backdrop and centered image.
 * Close it by clicking the backdrop, the close button, or Escape.
 */
export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close enlarged image"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-xl leading-none text-white hover:bg-white/20"
      >
        <span aria-hidden>×</span>
      </button>
      <div
        className="absolute inset-0 flex items-center justify-center overflow-auto p-4 md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsZoomed((zoomed) => !zoomed)}
          aria-label={isZoomed ? "Fit image to screen" : "Zoom image"}
          title={isZoomed ? "Fit image to screen" : "Zoom image"}
          className="cursor-zoom-in"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="eager"
            decoding="async"
            style={isZoomed ? { width: "min(140vw, 1024px)", maxWidth: "none", maxHeight: "none" } : undefined}
            className={`modal-content rounded-2xl object-contain ${isZoomed ? "cursor-zoom-out" : "max-h-[85vh] max-w-[90vw]"}`}
          />
        </button>
      </div>
    </div>,
    document.body,
  );
}

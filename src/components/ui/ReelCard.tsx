"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { activateExclusiveVideo } from "@/lib/videoPlayback";

interface Props {
  src: string;
  alt: string;
  poster?: string;
  videoSrc?: string;
  caption?: string;
}

export default function ReelCard({ src, alt, poster, videoSrc, caption }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (videoSrc) {
    if (!isPlaying) {
      return (
        <div
          onClick={() => setIsPlaying(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setIsPlaying(true);
          }}
          aria-label={`Play ${alt}`}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-surface"
        >
          <div className="relative aspect-[9/16] overflow-hidden bg-surface-2">
              <Image
                src={poster ?? src}
                alt={alt}
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                className="object-cover group-hover:scale-[1.02]"
              />
            <span className="media-play absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-accent backdrop-blur group-hover:scale-105 group-active:scale-95">
                <span aria-hidden className="ml-0.5 text-lg leading-none">▶</span>
            </span>
          </div>
          {caption && (
            <p className="px-3 py-2 text-sm tracking-wide text-muted">{caption}</p>
          )}
        </div>
      );
    }

    return (
      <div className="overflow-hidden rounded-2xl bg-surface">
        <div className="aspect-[9/16] overflow-hidden bg-surface-2">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster ?? src}
            controls
            playsInline
            preload="metadata"
            muted={false}
            onPlay={(event) => activateExclusiveVideo(event.currentTarget)}
            className="h-full w-full object-cover"
          />
        </div>
        {caption && (
          <p className="px-3 py-2 text-sm tracking-wide text-muted">{caption}</p>
        )}
      </div>
    );
  }

  return (
    <div className="group overflow-hidden rounded-2xl bg-surface">
      <div className="relative aspect-[9/16] overflow-hidden bg-surface">
        <Image
          src={poster ?? src}
          alt={alt}
          fill
          sizes="(max-width:768px) 50vw, 33vw"
          className="object-cover group-hover:scale-105"
        />
        <span className="media-play absolute right-2 top-2 rounded-full px-2 py-1 text-[10px] uppercase tracking-widest text-text">
          Reel
        </span>
      </div>
      {caption && (
        <p className="px-3 py-2 text-sm tracking-wide text-muted">{caption}</p>
      )}
    </div>
  );
}

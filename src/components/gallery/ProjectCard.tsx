"use client";

import { memo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";
import { activateExclusiveVideo } from "@/lib/videoPlayback";

interface ProjectCardProps {
  slug: string;
  title: string;
  year?: string;
  eyebrow?: string;
  thumbnail: string;
  thumbnailAlt?: string;
  thumbnailPosition?: string;
  videoSrc?: string;
  videoPoster?: string;
  category?: string;
  description?: string;
  variant?: "default" | "large";
}

function ProjectCard({
  slug,
  title,
  year,
  eyebrow,
  thumbnail,
  thumbnailAlt,
  thumbnailPosition,
  videoSrc,
  videoPoster,
  category,
  description,
  variant = "default",
}: ProjectCardProps) {
  const isLarge = variant === "large";
  const hasVideo = Boolean(videoSrc);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.muted = false;
    videoEl.volume = 1;

    if (videoEl.paused) {
      void videoEl.play().catch(() => {});
    } else {
      videoEl.pause();
    }
  };

  return (
    <Link href={`/projects/${slug}`} className={`project-link group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${isLarge ? "h-full" : ""}`}>
      <Card className="flex h-full cursor-pointer flex-col rounded-xl border border-border bg-surface p-4 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-border-strong md:p-6">
        <div
          className={
            isLarge
              ? "project-media relative aspect-[16/10] overflow-hidden rounded-lg bg-surface-2"
              : "project-media relative aspect-[16/10] overflow-hidden rounded-lg bg-surface-2"
          }
        >
          {hasVideo ? (
            <video
              ref={videoRef}
              src={videoSrc}
              poster={videoPoster}
              muted={false}
              loop
              playsInline
              preload="metadata"
              controls={false}
              aria-label={`Play or pause ${title} video`}
              onClick={handleVideoClick}
              onPlay={(event) => activateExclusiveVideo(event.currentTarget)}
              className="absolute inset-0 block h-full w-full object-cover object-center transition duration-200 group-hover:scale-[1.03]"
              style={{ width: "100%", height: "100%", objectPosition: "center center" }}
            />
          ) : (
            <Image
              src={thumbnail}
              alt={thumbnailAlt ?? title}
              fill
              style={thumbnailPosition ? { objectPosition: thumbnailPosition } : undefined}
              sizes={
                isLarge
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              }
              className="project-image object-cover"
            />
          )}
          <div aria-hidden="true" className="media-overlay pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-200 group-hover:opacity-100" />
          <span aria-hidden="true" className={`media-play pointer-events-none absolute inset-0 m-auto grid size-12 place-items-center rounded-full text-lg text-text backdrop-blur-sm transition-opacity duration-200 ${hasVideo ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>{hasVideo ? "▶" : "↗"}</span>
        </div>
        <div className="flex flex-1 flex-col items-start p-2 pt-5">
          <p className="section-label text-accent">{category ?? eyebrow ?? year}</p>
          {category && year ? <p className="mt-1 text-xs text-muted">{year}</p> : null}
          <h3 className="mt-2 font-display text-2xl font-semibold leading-[1.2] text-text md:text-[1.75rem]">{title}</h3>
          {description && <p className="mt-3 line-clamp-2 max-w-[65ch] text-base leading-[1.65] text-muted">{description}</p>}
          <span className="section-label mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-text">
            View case <span aria-hidden="true" className="text-accent transition-transform duration-200 group-hover:translate-x-1">↗</span>
          </span>
        </div>
      </Card>
    </Link>
  );
}

export default memo(ProjectCard);

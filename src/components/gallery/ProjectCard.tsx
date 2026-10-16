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
      videoEl.play();
    } else {
      videoEl.pause();
    }
  };

  return (
    <Link href={`/projects/${slug}`} className={`project-link group block ${isLarge ? "h-full" : ""}`}>
      <Card className="flex h-full cursor-pointer flex-col !rounded-[1.35rem] !p-3 shadow-[0_18px_45px_rgba(0,0,0,0.18)] md:!rounded-[1.7rem] md:!p-4">
        <div
          className={
            isLarge
              ? "relative aspect-[16/9] overflow-hidden rounded-[1rem] bg-surface ring-1 ring-white/10 md:rounded-[1.25rem]"
              : "relative aspect-[16/9] overflow-hidden rounded-[1rem] bg-surface ring-1 ring-white/10"
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
              preload="auto"
              controls={false}
              onClick={handleVideoClick}
              onPlay={(event) => activateExclusiveVideo(event.currentTarget)}
              className="absolute inset-0 block h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
          <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-background/90 text-lg text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">{hasVideo ? "▶" : "↗"}</span>
        </div>
        <div className="flex items-end justify-between gap-4 px-3 pb-2 pt-5 md:px-4 md:pb-3">
          <div>
            <p className="section-label text-background/60">{eyebrow ?? year}</p>
            {category && <p className="mt-1 text-sm text-background/65">{category}</p>}
            <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-background md:text-2xl">{title}</h3>
            {description && <p className="mt-2 line-clamp-2 max-w-xl text-sm leading-relaxed text-background/75 md:text-base">{description}</p>}
          </div>
          <span className="mb-1 text-sm text-background/60">View case ↗</span>
        </div>
      </Card>
    </Link>
  );
}

export default memo(ProjectCard);

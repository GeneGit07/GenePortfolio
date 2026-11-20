"use client";

import { memo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { activateExclusiveVideo } from "@/lib/videoPlayback";

interface ProjectCardProps {
  index: string;
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  thumbnail: string;
  thumbnailAlt?: string;
  thumbnailPosition?: string;
  videoSrc?: string;
  videoPoster?: string;
  featured?: boolean;
}

function ProjectCard({
  index,
  slug,
  title,
  year,
  category,
  summary,
  thumbnail,
  thumbnailAlt,
  thumbnailPosition,
  videoSrc,
  videoPoster,
  featured = false,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const href = `/projects/${slug}`;

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  };

  return (
    <article className="project-link group">
      <div className={`media-frame ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        {videoSrc ? (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              poster={videoPoster}
              loop
              playsInline
              preload="none"
              aria-label={thumbnailAlt ?? `${title} video`}
              onPlay={(event) => {
                activateExclusiveVideo(event.currentTarget);
                setIsPlaying(true);
              }}
              onPause={() => setIsPlaying(false)}
              className="project-image absolute inset-0 block h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? `Pause ${title} video` : `Play ${title} video`}
              className="absolute inset-0 flex items-end justify-start p-4 md:p-6"
            >
              <span className="media-play inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-xs font-medium tracking-wide text-text backdrop-blur-md">
                <span aria-hidden="true">{isPlaying ? "❚❚" : "▶"}</span>
                {isPlaying ? "Pause" : "Play reel"}
              </span>
            </button>
          </>
        ) : (
          <Link href={href} tabIndex={-1} aria-hidden="true" className="absolute inset-0">
            <Image
              src={thumbnail}
              alt=""
              fill
              style={thumbnailPosition ? { objectPosition: thumbnailPosition } : undefined}
              sizes={featured ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 100vw, 50vw"}
              className="project-image object-cover"
            />
          </Link>
        )}
      </div>

      <Link
        href={href}
        aria-label={`${title} — view case study`}
        className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-start"
      >
        <div>
          <p className="section-label text-muted">
            <span className="text-accent">{index}</span>
            <span className="mx-3 text-subtle">/</span>
            {category}
          </p>
          <h3 className="display-3 mt-3">{title}</h3>
          <p className="mt-3 max-w-[56ch] text-[0.9375rem] leading-[1.7] text-muted">{summary}</p>
        </div>
        <span className="text-link md:mt-1">
          <span className="text-muted">{year}</span>
          <span aria-hidden="true" className="mx-1 text-subtle">·</span>
          Case study <span aria-hidden="true" className="btn-arrow">→</span>
        </span>
      </Link>
    </article>
  );
}

export default memo(ProjectCard);

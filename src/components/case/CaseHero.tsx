"use client";

import { useState } from "react";
import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";
import ImageModal from "@/components/ui/ImageModal";
import { activateExclusiveVideo } from "@/lib/videoPlayback";

interface CaseHeroProps {
  title: string;
  category?: string;
  projectType?: string;
  description: string;
  role?: string;
  services?: string[];
  year: string;
  palette: string[];
  thumbnail: string;
  thumbnailAlt?: string;
  thumbnailVideo?: {
    src: string;
    poster?: string;
  };
}

// Select readable text colors based on the palette swatch luminance.
function textOnColor(hex: string): string {
  const c = hex.replace("#", "");
  const full = c.length === 3 ? c.split("").map((ch) => ch + ch).join("") : c;
  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.6 ? "var(--swatch-light-ink)" : "var(--swatch-dark-ink)";
}

export default function CaseHero({
  title,
  category,
  projectType,
  description,
  role,
  services,
  year,
  palette,
  thumbnail,
  thumbnailAlt,
  thumbnailVideo,
}: CaseHeroProps) {
  const [coverOpen, setCoverOpen] = useState(false);
  const isVideoCover = Boolean(thumbnailVideo);

  return (
    <>
      {/* Full-width case study title */}
      <FadeInView>
        <div className="max-w-5xl">
          <p className="eyebrow">
            <span className="eyebrow-index">Case study</span>
            <span aria-hidden="true" className="eyebrow-rule" />
            {year}{category && <> · {category}</>}
          </p>
          <h1 className="display-1 mt-6 text-balance">
            {title}
          </h1>
        </div>
      </FadeInView>

      <div className="relative mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:items-start md:gap-14">
        <FadeInView delay={0.05} className="flex min-w-0 items-start">
          <div className="flex w-full min-w-0 flex-col items-start justify-start">
            <p className="whitespace-pre-line text-lg leading-[1.7] text-muted">
              {description}
            </p>

            {role && <div className="mt-8 border-l border-accent pl-5">
              <p className="section-label text-muted">My role</p>
              <p className="mt-2 text-sm leading-relaxed md:text-base">{role}</p>
            </div>}

            <div className="mt-8 grid w-full grid-cols-2 gap-6 border-t border-border pt-6 text-sm">
              <div>
                {projectType ? <>
                  <p className="section-label">Project type</p>
                  <p className="mt-2 font-medium">{projectType}</p>
                  <p className="section-label mt-7">Services</p>
                  <ul className="mt-2 space-y-1 text-muted">
                    {services?.map((service) => <li key={service}>{service}</li>)}
                  </ul>
                </> : <>
                  <p className="section-label">Services</p>
                  <p className="mt-2 text-sm font-medium">Visual identity · Art direction</p>
                  <p className="section-label mt-7">Year</p>
                  <p className="mt-1 font-medium text-muted">{year}</p>
                </>}
              </div>
              <div>
                <p className="section-label">Color palette</p>
                <div className="mt-3 flex flex-col gap-2">
                  {palette.map((color) => (
                    <div
                      key={color}
                      className="flex h-8 w-full items-center rounded-sm px-3"
                      style={{ background: color }}
                    >
                      <span
                        className="font-mono text-xs uppercase tracking-widest"
                        style={{ color: textOnColor(color) }}
                      >
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInView>

        <div className="flex min-w-0 items-start">
          <FadeInView delay={0.1} className="w-full min-w-0">
            {isVideoCover ? (
              <div className="media-frame aspect-video w-full">
                <video
                  src={thumbnailVideo?.src}
                  poster={thumbnailVideo?.poster}
                  loop
                  playsInline
                  preload="none"
                  controls
                  aria-label={`${title} featured video`}
                  onPlay={(event) => activateExclusiveVideo(event.currentTarget)}
                  className="absolute inset-0 block h-full w-full object-cover"
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setCoverOpen(true)}
                aria-label={`View larger image: ${title}`}
                className="media-frame group block aspect-video w-full cursor-zoom-in"
              >
                <Image
                  src={thumbnail}
                  alt={thumbnailAlt ?? title}
                  fill
                  sizes="(max-width:768px) 100vw, 600px"
                  preload
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </button>
            )}
          </FadeInView>
        </div>
      </div>

      {coverOpen && !isVideoCover && (
        <ImageModal src={thumbnail} alt={thumbnailAlt ?? title} onClose={() => setCoverOpen(false)} />
      )}
    </>
  );
}

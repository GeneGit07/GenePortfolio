"use client";

import { useState } from "react";
import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";
import ImageModal from "@/components/ui/ImageModal";
import CaseCard from "./CaseCard";

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
}

// Select readable text colors based on the palette swatch luminance.
function textOnColor(hex: string): string {
  const c = hex.replace("#", "");
  const full = c.length === 3 ? c.split("").map((ch) => ch + ch).join("") : c;
  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.6 ? "#000000" : "#ffffff";
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
}: CaseHeroProps) {
  const [coverOpen, setCoverOpen] = useState(false);

  return (
    <>
      {/* Full-width case study title */}
      <FadeInView>
        <div className="max-w-5xl">
          <p className="section-label mb-6 text-muted">Case study <span className="mx-2 text-accent">✳</span>{year}{category && <><span className="mx-2">/</span>{category}</>}</p>
          <h1 className="font-display text-[clamp(3.5rem,9vw,7.75rem)] font-medium leading-[0.9] tracking-[-0.07em] text-balance">
            {title}
          </h1>
        </div>
      </FadeInView>

      <div className="relative mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
        <FadeInView delay={0.05} className="flex min-w-0 items-start">
          <div className="flex w-full min-w-0 flex-col items-start justify-start">
            <p className="whitespace-pre-line text-lg leading-relaxed text-muted md:text-xl">
              {description}
            </p>

            {role && <div className="mt-7 border-l-2 border-accent pl-5">
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
                      className="flex h-8 w-full items-center px-4"
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
          <CaseCard className="w-full min-w-0" delay={0.1}>
            <button
              type="button"
              onClick={() => setCoverOpen(true)}
              aria-label={`View larger image: ${title}`}
              className="group relative flex aspect-[16/9] w-full cursor-zoom-in items-stretch overflow-hidden rounded-[1rem] bg-surface text-left md:rounded-[1.25rem]"
            >
              <Image
                src={thumbnail}
                alt={thumbnailAlt ?? title}
                fill
                sizes="(max-width:768px) 100vw, 560px"
                preload
                className="object-cover group-hover:scale-[1.02]"
              />
            </button>
          </CaseCard>
        </div>
      </div>

      {coverOpen && (
        <ImageModal src={thumbnail} alt={thumbnailAlt ?? title} onClose={() => setCoverOpen(false)} />
      )}
    </>
  );
}

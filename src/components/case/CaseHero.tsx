"use client";

import { useState } from "react";
import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";
import HoverShade from "@/components/ui/HoverShade";
import ImageModal from "@/components/ui/ImageModal";

interface CaseHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  year: string;
  palette: string[];
  thumbnail: string;
}

export default function CaseHero({
  title,
  subtitle,
  description,
  year,
  palette,
  thumbnail,
}: CaseHeroProps) {
  const [coverOpen, setCoverOpen] = useState(false);

  return (
    <>
      {/* Titular a ancho completo */}
      <FadeInView>
        <div className="max-w-5xl">
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-lg font-medium tracking-wide text-muted">
              {subtitle}
            </p>
          )}
        </div>
      </FadeInView>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
        <FadeInView delay={0.05} className="flex min-w-0 items-start">
          <div className="flex w-full min-w-0 flex-col items-start justify-start">
            <p className="whitespace-pre-line text-lg leading-relaxed text-muted">
              {description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 text-sm">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest">Año</p>
                <p className="mt-1 font-medium text-muted">{year}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest">Paleta</p>
                <div className="mt-3 flex gap-3">
                  {palette.map((color) => (
                    <span
                      key={color}
                      className="h-8 w-8 rounded-full border border-border"
                      style={{ background: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.1} className="flex min-w-0 items-start">
          <div className="flex w-full min-w-0 items-start">
            <button
              type="button"
              onClick={() => setCoverOpen(true)}
              aria-label={`Ver imagen ampliada: ${title}`}
              className="group relative flex aspect-[16/9] w-full cursor-zoom-in items-stretch overflow-hidden rounded-lg border border-border bg-surface text-left"
            >
              <Image
                src={thumbnail}
                alt={title}
                fill
                sizes="(max-width:768px) 100vw, 560px"
                priority
                className="object-cover group-hover:scale-[1.02]"
              />
              <HoverShade />
            </button>
          </div>
        </FadeInView>
      </div>

      {coverOpen && (
        <ImageModal src={thumbnail} alt={title} onClose={() => setCoverOpen(false)} />
      )}
    </>
  );
}

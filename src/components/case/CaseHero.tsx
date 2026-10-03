"use client";

import { useState } from "react";
import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";
import ImageModal from "@/components/ui/ImageModal";
import CaseCard from "./CaseCard";

interface CaseHeroProps {
  title: string;
  description: string;
  year: string;
  palette: string[];
  thumbnail: string;
}

// Texto legible sobre el bloque según su luminancia.
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
          <h1 className="font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
            {title}
          </h1>
        </div>
      </FadeInView>

      <div className="relative mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
        <FadeInView delay={0.05} className="flex min-w-0 items-start">
          <div className="flex w-full min-w-0 flex-col items-start justify-start">
            <p className="whitespace-pre-line text-lg leading-relaxed text-muted">
              {description}
            </p>

            <div className="mt-8 grid w-full grid-cols-2 gap-6 border-t border-border pt-6 text-sm">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest">Año</p>
                <p className="mt-1 font-medium text-muted">{year}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest">Paleta</p>
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
              aria-label={`Ver imagen ampliada: ${title}`}
              className="group relative flex aspect-[16/9] w-full cursor-zoom-in items-stretch overflow-hidden rounded-2xl bg-surface text-left"
            >
              <Image
                src={thumbnail}
                alt={title}
                fill
                sizes="(max-width:768px) 100vw, 560px"
                priority
                className="object-cover group-hover:scale-[1.02]"
              />
            </button>
          </CaseCard>
        </div>
      </div>

      {coverOpen && (
        <ImageModal src={thumbnail} alt={title} onClose={() => setCoverOpen(false)} />
      )}
    </>
  );
}

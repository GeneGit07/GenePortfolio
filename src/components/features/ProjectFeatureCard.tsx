"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import FeatureLibraryDialog from "@/components/features/FeatureLibraryDialog";
import { PROJECT_FEATURE_MEDIA } from "@/data/projectFeatureMedia";

interface ProjectFeatureCardProps {
  feature: {
    title: string;
    description: string;
    labels: readonly string[];
  };
  index: number;
}

export default function ProjectFeatureCard({ feature, index }: ProjectFeatureCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);
  const featureMedia = PROJECT_FEATURE_MEDIA.find((media) => media.feature === feature.title);
  const number = String(index + 1).padStart(2, "0");

  if (!featureMedia) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`${feature.title} — explore related work`}
        className="service-card group w-full cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <span className="section-label text-accent">{number}</span>
          <span className="section-label text-muted">{featureMedia.library.length} pieces</span>
        </div>

        <h3 className="display-3 mt-8">{feature.title}</h3>
        <p className="mt-3 text-[0.9375rem] leading-[1.7] text-muted">{feature.description}</p>

        <div className="mt-6 grid grid-cols-3 gap-2" aria-hidden="true">
          {featureMedia.preview.slice(0, 3).map((item) => (
            <div key={`${item.src}-${item.title}`} className="relative aspect-square overflow-hidden rounded-md bg-surface-2">
              <Image
                src={item.kind === "video" ? item.poster ?? item.src : item.src}
                alt=""
                fill
                sizes="(max-width: 640px) 30vw, 120px"
                className={`transition duration-500 group-hover:scale-[1.04] ${item.fit === "contain" ? "object-contain" : "object-cover"}`}
              />
              {item.kind === "video" ? (
                <span className="media-play absolute bottom-1.5 left-1.5 grid size-6 place-items-center rounded-full text-[9px] text-text">▶</span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <span className="text-xs text-muted">{feature.labels.join(" · ")}</span>
          <span className="text-link">
            Explore <span aria-hidden="true" className="btn-arrow">→</span>
          </span>
        </div>
      </button>

      {isOpen ? (
        <FeatureLibraryDialog media={featureMedia} number={number} description={feature.description} onClose={close} />
      ) : null}
    </>
  );
}

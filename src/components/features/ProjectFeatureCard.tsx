"use client";

import Image from "next/image";
import { useState } from "react";
import Card from "@/components/ui/Card";
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

export default function ProjectFeatureCard({
  feature,
  index,
}: ProjectFeatureCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const featureMedia = PROJECT_FEATURE_MEDIA.find(
    (media) => media.feature === feature.title,
  );
  const number = String(index + 1).padStart(2, "0");

  if (!featureMedia) return null;

  const previewColumns =
    featureMedia.preview.length === 1
      ? "grid-cols-1"
      : featureMedia.preview.length === 2
        ? "grid-cols-2"
        : "grid-cols-3";

  return (
    <>
      <Card className="h-full overflow-hidden p-0 transition-transform hover:-translate-y-1">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`Explore ${feature.title} projects and media`}
          className="group flex h-full w-full cursor-pointer flex-col p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent md:p-7"
        >
          <div
            className={`relative mb-7 grid aspect-video w-full overflow-hidden rounded-2xl bg-surface p-1.5 ${previewColumns}`}
          >
            {featureMedia.preview.map((item) => (
              <div
                key={`${item.src}-${item.title}`}
                className={`relative min-h-0 min-w-0 overflow-hidden rounded-xl ${item.fit === "contain" ? "bg-[#100d08]" : "bg-surface"}`}
              >
                <Image
                  src={item.kind === "video" ? item.poster ?? item.src : item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 44vw"
                  className={`project-image ${item.fit === "contain" ? "object-contain" : "object-cover"} group-hover:scale-[1.035]`}
                />
                {featureMedia.preview.length > 1 ? (
                  <span className="absolute inset-x-0 bottom-0 truncate bg-gradient-to-t from-black/75 to-transparent px-2 pb-2 pt-5 text-[9px] font-medium tracking-wide text-white/90 sm:text-[10px]">
                    {item.project}
                  </span>
                ) : null}
                {item.kind === "video" ? (
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/50 bg-black/35 text-sm text-white backdrop-blur-sm"
                  >
                    ▶
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mb-5 flex w-full items-center gap-4">
            <span className="section-label text-background/55">{number}</span>
            <span aria-hidden="true" className="h-px flex-1 bg-background/15" />
            <span className="section-label text-background/45">Capability</span>
          </div>
          <h3 className="max-w-lg font-display text-3xl font-medium leading-tight tracking-[-0.045em] md:text-4xl">
            {feature.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-background/65 md:text-base">
            {feature.description}
          </p>
          <ul className="mt-7 flex w-full flex-wrap gap-2">
            {feature.labels.map((label) => (
              <li
                key={label}
                className="rounded-full border border-background/15 px-3 py-1.5 text-xs text-background/70"
              >
                {label}
              </li>
            ))}
          </ul>
          <span className="section-label mt-7 flex w-full items-center justify-between border-t border-background/15 pt-5 text-background/70">
            Explore <span aria-hidden="true" className="text-accent">↗</span>
          </span>
        </button>
      </Card>

      {isOpen ? (
        <FeatureLibraryDialog
          media={featureMedia}
          number={number}
          description={feature.description}
          onClose={() => setIsOpen(false)}
        />
      ) : null}
    </>
  );
}

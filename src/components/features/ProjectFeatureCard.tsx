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

  const mediaFirst = index % 2 === 1;

  return (
    <>
      <Card className="h-full overflow-hidden border border-border bg-surface p-0 transition duration-200 hover:-translate-y-1 hover:border-border-strong">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`Explore ${feature.title} projects and media`}
          className="group block h-full w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
        >
          <div className="grid items-center gap-7 p-5 md:grid-cols-12 md:gap-10 md:p-8">
            <div className={`min-w-0 md:col-span-7 ${mediaFirst ? "md:order-2" : ""}`}>
              <div className="mb-4 flex items-center gap-4">
                <span className="section-label text-accent">{number}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-border" />
                <span className="section-label text-muted">Capability</span>
              </div>
              <h3 className="font-display text-2xl font-semibold leading-[1.2] md:text-3xl">
                {feature.title}
              </h3>
              <p className="mt-3 max-w-[65ch] text-base leading-[1.65] text-muted">
                {feature.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {feature.labels.map((label) => (
                  <li key={label} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted">
                    {label}
                  </li>
                ))}
              </ul>
              <span className="section-label mt-6 inline-flex min-h-11 items-center gap-3 border-t border-border pt-4 text-text">
                Explore <span aria-hidden="true" className="text-accent transition-transform duration-200 group-hover:translate-x-1">↗</span>
              </span>
            </div>

            <div className={`min-w-0 md:col-span-5 ${mediaFirst ? "md:order-1" : ""}`}>
              <div className="grid grid-cols-3 gap-2">
                {featureMedia.preview.slice(0, 3).map((item) => (
                  <div key={`${item.src}-${item.title}`} className="feature-thumb group/thumb relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-2">
                    <Image
                      src={item.kind === "video" ? item.poster ?? item.src : item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 28vw, 15vw"
                      className={`project-image ${item.fit === "contain" ? "object-contain" : "object-cover"}`}
                    />
                    <span className="media-caption-overlay absolute inset-x-0 bottom-0 truncate px-2 pb-1.5 pt-4 text-[10px] text-text">
                      {item.project}
                    </span>
                    {item.concept ? <span className="concept-chip absolute left-2 top-2 border-border bg-background/90">Concept</span> : null}
                    {item.kind === "video" ? (
                      <span aria-hidden="true" className="media-play absolute inset-0 m-auto grid size-9 place-items-center rounded-full text-sm text-text backdrop-blur-sm">
                        ▶
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
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

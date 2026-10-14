"use client";

import Image from "next/image";
import { useState } from "react";
import FadeInView from "@/components/ui/FadeInView";
import ImageModal from "@/components/ui/ImageModal";
import { emailDesigns } from "@/data/emailDesigns";

type EmailDesign = (typeof emailDesigns)[number];

export default function EmailDesignSection() {
  const [selected, setSelected] = useState<EmailDesign | null>(null);

  return (
    <div className="page-shell">
      <FadeInView>
        <div className="mb-14 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
          <div>
            <span className="section-label text-muted">04 / Email design</span>
            <h2 className="mt-5 font-display text-5xl font-medium tracking-[-0.065em] md:text-7xl">
              Email <span className="italic text-muted">design</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
            Launch announcements, promotions, and welcome journeys designed to bring each brand into the inbox.
          </p>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {emailDesigns.map((design, index) => (
          <FadeInView key={design.title} delay={index * 0.05}>
            <figure>
              <button
                type="button"
                onClick={() => setSelected(design)}
                aria-label={`View larger image: ${design.title}`}
                className="group relative block aspect-[2/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-surface ring-1 ring-border/60"
              >
                <Image
                  src={design.src}
                  alt={design.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-[1.02]"
                />
              </button>
              <figcaption className="px-1 pt-4">
                <p className="section-label text-muted">{design.category}</p>
                <h3 className="mt-2 font-display text-2xl font-medium text-foreground">{design.title}</h3>
              </figcaption>
            </figure>
          </FadeInView>
        ))}
      </div>

      {selected && <ImageModal src={selected.src} alt={selected.alt} onClose={() => setSelected(null)} />}
    </div>
  );
}
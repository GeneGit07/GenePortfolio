"use client";

import Image from "next/image";
import { useState } from "react";
import FadeInView from "@/components/ui/FadeInView";
import ImageModal from "@/components/ui/ImageModal";
import SectionHeading from "@/components/ui/SectionHeading";
import { emailDesigns } from "@/data/emailDesigns";

export default function EmailDesignSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : emailDesigns[selectedIndex];

  const moveSelection = (direction: -1 | 1) => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current + direction + emailDesigns.length) % emailDesigns.length;
    });
  };

  return (
    <div className="page-shell">
      <SectionHeading
        index="05"
        label="Email design"
        title={<>Into the <span className="italic text-muted">inbox.</span></>}
        intro="Launch announcements, promotions, and welcome journeys designed to carry each brand into the inbox."
      />

      <div className="email-showcase flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible">
        {emailDesigns.map((design, index) => (
          <FadeInView key={design.title} delay={Math.min(index * 0.035, 0.14)} className="min-w-[min(84vw,360px)] snap-start md:min-w-0">
            <figure className="h-full">
              <div className="email-frame">
                <div className="email-frame-bar">
                  <span className="email-frame-dot" />
                  <span className="email-frame-dot" />
                  <span className="email-frame-dot" />
                  {"concept" in design && design.concept ? <span className="concept-chip ml-auto">Concept project</span> : null}
                </div>
                <div className="email-frame-window">
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`View larger image: ${design.title}`}
                    className="group absolute inset-0 block cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
                  >
                    <Image
                      src={design.src}
                      alt={design.alt}
                      fill
                      sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-2 transition-transform duration-200 group-hover:scale-[1.01]"
                    />
                  </button>
                </div>
              </div>
              <figcaption className="px-1 pt-4">
                <p className="section-label text-muted">{design.category}</p>
                <h3 className="display-3 mt-2 text-text">{design.title}</h3>
              </figcaption>
            </figure>
          </FadeInView>
        ))}
      </div>

      {selected && selectedIndex !== null ? (
        <ImageModal
          src={selected.src}
          alt={selected.alt}
          onClose={() => setSelectedIndex(null)}
          onPrevious={() => moveSelection(-1)}
          onNext={() => moveSelection(1)}
        />
      ) : null}
    </div>
  );
}

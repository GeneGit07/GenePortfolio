"use client";

import Link from "next/link";
import { HERO } from "@/data/site";
import { socialProjects } from "@/data/social";
import { activateExclusiveVideo } from "@/lib/videoPlayback";

// Hero spotlight: the newest long-form piece. Distinct from the first Work card
// (SolarWorks) so the page never shows the same video twice above the fold.
const featured = socialProjects.find((project) => project.slug === "rendezvous-cafe") ?? socialProjects[0];
const FEATURED_VIDEO = {
  src: "/assets/social/rendezvous-cafe/rendezvous-all-day-favorites.mp4",
  poster: "/assets/video-posters/rendezvous-all-day-favorites-poster.jpg",
  label: "All-Day Favorites menu film",
};

export default function HeroSection() {
  return (
    <div className="page-shell">
      <div className="hero-enter flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <p className="eyebrow">
          <span className="hidden text-text sm:inline">Eugene Dalida</span>
          <span aria-hidden="true" className="eyebrow-rule hidden sm:inline-block" />
          {HERO.eyebrow}
        </p>
        <p className="eyebrow">
          <span aria-hidden="true" className="availability-dot" />
          {HERO.availability} · {HERO.location}
        </p>
      </div>

      <h1 className="display-1 hero-enter hero-enter-1 mt-10 max-w-[14ch] md:mt-14">
        {HERO.headline[0]}{" "}
        <span className="italic text-muted">{HERO.headline[1]}</span>
      </h1>

      <div className="mt-14 grid gap-10 md:mt-20 lg:grid-cols-12 lg:gap-12">
        <div className="hero-enter hero-enter-2 flex flex-col justify-between gap-10 lg:col-span-4">
          <p className="lead">{HERO.description}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#work" onClick={(event) => event.preventDefault()} className="btn btn-primary">
              View work <span aria-hidden="true" className="btn-arrow">→</span>
            </a>
            <a href="#contact" onClick={(event) => event.preventDefault()} className="btn btn-ghost">
              Get in touch
            </a>
            {HERO.cvHref ? (
              <a href={HERO.cvHref} className="btn btn-ghost" download>
                Download CV <span aria-hidden="true">↓</span>
              </a>
            ) : null}
          </div>
        </div>

        <figure className="hero-enter hero-enter-3 lg:col-span-8">
          <div className="media-frame aspect-video">
            <video
              src={FEATURED_VIDEO.src}
              poster={FEATURED_VIDEO.poster}
              controls
              playsInline
              preload="none"
              aria-label={`${featured.title} — ${FEATURED_VIDEO.label}`}
              onPlay={(event) => activateExclusiveVideo(event.currentTarget)}
              className="absolute inset-0 block h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
            <span className="section-label text-muted">
              Featured · {featured.title} · {FEATURED_VIDEO.label}
            </span>
            <Link href={`/projects/${featured.slug}`} className="group text-link">
              View case study <span aria-hidden="true" className="btn-arrow">→</span>
            </Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

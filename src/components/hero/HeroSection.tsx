"use client";

import Link from "next/link";
import { activateExclusiveVideo } from "@/lib/videoPlayback";

const marqueeItems = [
  "SOCIAL MEDIA",
  "CONTENT CREATION",
  "VISUAL DESIGN",
  "UI/UX & FIGMA",
  "VIDEO & MOTION",
  "AI-ASSISTED CREATIVE",
];

export default function HeroSection() {
  return (
    <>
      <div className="page-shell grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="relative z-10 lg:col-span-6">
          <p className="section-label eyebrow-dot hero-enter text-accent">Independent designer · Batangas, Philippines</p>
          <h1 className="hero-enter mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.1] md:text-7xl">
            <span className="font-semibold">Design with</span>
            <br />
            <span className="relative inline-block font-semibold italic">intention<span className="text-accent">.</span></span>
            <br />
            <span className="font-semibold">Think with</span>
            <br />
            <span className="font-semibold italic text-muted">curiosity.</span>
            <br />
            <span className="font-semibold">Create with</span>
            <br />
            <span className="font-semibold">AI.</span>
          </h1>
          <div className="hero-enter mt-6 flex max-w-[68ch] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[65ch] text-base leading-[1.65] text-muted md:text-lg">
              I’m a designer who turns ideas into meaningful visual experiences—combining creative direction, design, and AI-assisted workflows to create work with character.
            </p>
            <span className="availability-pill inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-border px-3 py-2 text-sm text-muted"><span className="availability-dot" aria-hidden="true" />Available for select projects</span>
          </div>
          <div className="hero-enter mt-9 flex flex-wrap items-center gap-3">
            <Link href="#redes-sociales" className="group inline-flex min-h-12 items-center gap-8 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink hover:bg-accent-hover">
              Explore selected work <span className="text-lg transition-transform group-hover:translate-x-1">↘</span>
            </Link>
            <Link href="#about" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-text hover:border-accent hover:text-accent">Meet Eugene <span>↗</span></Link>
            <a href="/TODO-cv.pdf" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm text-muted transition-colors hover:border-accent hover:text-accent">Download CV / Résumé <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-enter-delay relative mx-auto w-full max-w-2xl lg:col-span-6 lg:col-start-7 lg:mx-0 lg:justify-self-end">
          <div className="project-link group block w-full">
            <div className="hero-art overflow-hidden rounded-[20px] border border-border bg-surface">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                <video
                  src="/assets/social/solarworks-ph/solar-works-video.mp4"
                  poster="/assets/video-posters/solarworks-featured-poster.jpg"
                  controls
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="SolarWorks PH featured campaign video"
                  onPlay={(event) => activateExclusiveVideo(event.currentTarget)}
                  className="absolute inset-0 block h-full w-full object-cover"
                />
                <div aria-hidden="true" className="media-overlay pointer-events-none absolute inset-0" />
              </div>
              <Link
                href="/projects/solarworks-ph"
                aria-label="View the SolarWorks PH project"
                className="group flex min-h-20 items-center justify-between gap-4 px-5 py-4 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent md:px-7"
              >
                <span>
                  <span className="section-label block text-accent">Featured project · 2026</span>
                  <span className="mt-1 block font-display text-2xl font-semibold text-foreground md:text-3xl">SolarWorks PH</span>
                  <span className="section-label mt-2 block text-muted">Solar campaign · motion-led storytelling</span>
                </span>
                <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full border border-border-strong text-xl text-accent transition-transform duration-200 group-hover:translate-x-1">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div aria-label="Design services" className="mt-16 overflow-hidden border-y border-border py-4 md:mt-20">
        <div className="marquee-track flex w-max items-center gap-6 whitespace-nowrap text-xs font-medium uppercase tracking-[0.12em] text-muted">
          {[...marqueeItems, ...marqueeItems].map((item, i) => <span key={`${item}-${i}`} className="flex items-center gap-6">{item}<span aria-hidden className="text-accent">✳</span></span>)}
        </div>
      </div>
    </>
  );
}

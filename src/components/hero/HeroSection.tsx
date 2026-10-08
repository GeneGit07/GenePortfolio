import Image from "next/image";
import Link from "next/link";

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
      <div className="page-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="relative z-10">
          <p className="section-label eyebrow-dot hero-enter text-muted">Independent designer · Manila, Philippines</p>
          <h1 className="hero-enter mt-8 max-w-4xl font-display text-[clamp(3.25rem,6.5vw,6.75rem)] font-medium leading-[0.82] tracking-[-0.075em]">
            <span className="font-semibold">Design with</span>
            <br />
            <span className="relative inline-block font-semibold italic">intention<span className="absolute -right-5 top-0 text-accent">.</span></span>
            <br />
            <span className="font-semibold">Think with</span>
            <br />
            <span className="font-semibold italic text-muted">curiosity.</span>
            <br />
            <span className="font-semibold">Create with</span>
            <br />
            <span className="font-semibold">AI.</span>
          </h1>
          <div className="hero-enter mt-8 flex max-w-xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-sm text-base leading-relaxed text-muted md:text-lg">
              I’m a designer who turns ideas into meaningful visual experiences—combining creative direction, design, and AI-assisted workflows to create work with character.
            </p>
            <span className="section-label whitespace-nowrap text-muted">Available for select projects ↗</span>
          </div>
          <div className="hero-enter mt-9 flex flex-wrap items-center gap-3">
            <Link href="#redes-sociales" className="group inline-flex items-center gap-8 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background hover:bg-foreground/85">
              Explore selected work <span className="text-lg transition-transform group-hover:translate-x-1">↘</span>
            </Link>
            <Link href="#about" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-medium hover:border-foreground/35">Meet Eugene <span>↗</span></Link>
          </div>
        </div>

        <div className="hero-enter-delay relative mx-auto w-full max-w-2xl lg:mx-0 lg:justify-self-end">
          <div className="absolute -top-7 right-5 z-10 grid size-24 place-items-center rounded-full bg-accent text-center text-[0.58rem] font-medium leading-tight tracking-[0.12em] text-foreground shadow-xl md:-right-6 md:size-28">
            SOLAR ENERGY<br />A BRIGHTER<br />TOMORROW <span className="text-base">✳</span>
          </div>
          <div className="hero-art relative aspect-[2/3] overflow-hidden rounded-[1.4rem] bg-[#11130f] md:rounded-[2rem]">
            <Image src="/assets/social/solarworks-ph/solar-before-after.png" alt="SolarWorks PH before-and-after solar campaign showing a homeowner and the change in monthly electricity costs" fill preload sizes="(max-width: 1024px) 90vw, 42vw" className="project-image object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white md:inset-x-8 md:bottom-8">
              <div>
                <p className="section-label text-white/70">Featured project · 2026</p>
                <p className="mt-2 font-display text-2xl font-medium tracking-tight md:text-4xl">SolarWorks PH</p>
              </div>
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/40 text-xl backdrop-blur-md">↗</span>
            </div>
          </div>
          <p className="section-label mt-4 flex justify-between text-muted"><span>Solar campaign · before & after</span><span>01 / 03</span></p>
        </div>
      </div>

      <div aria-label="Design services" className="mt-20 overflow-hidden border-y border-border py-5 md:mt-28 md:py-7">
        <div className="marquee-track flex w-max items-center gap-7 whitespace-nowrap text-[clamp(1.2rem,3vw,2.6rem)] font-medium tracking-[-0.04em]">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => <span key={`${item}-${i}`} className="flex items-center gap-7">{item}<span aria-hidden className="text-accent">✳</span></span>)}
        </div>
      </div>
    </>
  );
}

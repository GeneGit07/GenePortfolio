import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";
import { ABOUT, SOFTWARES } from "@/data/site";

export default function AboutSection() {
  return (
    <FadeInView className="page-shell">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="section-label text-accent">{ABOUT.sectionNumber} / About</p>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.1] md:text-7xl">Designer<br /><span className="italic text-muted">by choice.</span></h2>
          <p className="mt-3 font-display text-base font-semibold uppercase tracking-[0.12em] text-muted md:text-lg">AI-assisted by design.</p>
          <div className="mt-9 border-l border-accent pl-5 md:pl-7">
            <p className="font-display text-3xl font-semibold leading-[1.2] md:text-4xl">Good design starts with an idea.<br /><span className="text-muted">AI just helps me take it further.</span></p>
            <p className="mt-7 font-display text-xl font-semibold leading-[1.45] text-text md:text-2xl">The direction is mine.<br />The taste is mine.<br />The execution is mine.</p>
          </div>
        </div>
        <div className="space-y-5 lg:col-span-7 lg:pt-2">
          <figure className="mx-auto mb-7 w-36 overflow-hidden rounded-xl border border-border bg-surface-2 sm:float-left sm:mx-0 sm:mr-6 sm:mb-4 sm:w-40 lg:w-48">
            <Image
              src="/assets/home/eugene-portrait.jpg"
              alt="Portrait of Eugene Dalida"
              width={1600}
              height={1600}
              className="block h-auto w-full"
            />
          </figure>
          <p className="max-w-[65ch] text-base leading-[1.65] text-muted md:text-lg">Hi, I’m Eugene. I’m a designer focused on <strong className="font-semibold text-text">visual storytelling, branding, and digital content</strong>, using AI as part of my creative process.</p>
          <p className="max-w-[65ch] text-base leading-[1.65] text-muted md:text-lg">I use AI to explore possibilities, accelerate production, and push ideas further—but <strong className="font-semibold text-text">I remain behind every creative decision.</strong></p>
          <p className="max-w-[65ch] text-base leading-[1.65] text-muted md:text-lg">AI is simply another tool in my toolbox.</p>
        </div>
      </div>
      <div className="mt-16 border-t border-border pt-8 md:mt-20 md:pt-10">
        <p className="section-label text-accent">How I work</p>
        <ol className="process-steps mt-6 grid gap-4 md:grid-cols-3">
          <li className="process-card">
            <span className="font-display text-3xl font-semibold text-accent">01</span>
            <h3 className="mt-3 font-display text-xl font-semibold">Understand</h3>
            <p className="mt-2 text-sm leading-[1.65] text-muted">Clarify the audience, message, and goal behind the work.</p>
          </li>
          <li className="process-card">
            <span className="font-display text-3xl font-semibold text-accent">02</span>
            <h3 className="mt-3 font-display text-xl font-semibold">Explore</h3>
            <p className="mt-2 text-sm leading-[1.65] text-muted">Develop visual directions and explore possibilities with the right tools.</p>
          </li>
          <li className="process-card">
            <span className="font-display text-3xl font-semibold text-accent">03</span>
            <h3 className="mt-3 font-display text-xl font-semibold">Refine</h3>
            <p className="mt-2 text-sm leading-[1.65] text-muted">Make the creative decisions, polish the details, and prepare the final work.</p>
          </li>
        </ol>
      </div>
      <div className="mt-14 border-t border-border pt-8 md:mt-16 md:pt-10">
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
          <p className="section-label text-accent">Tools of the trade</p>
          <span className="section-label text-muted">Creative toolkit</span>
        </div>
        <ul className="toolkit-grid grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {SOFTWARES.map((tool) => (
            <li key={tool.label} className="toolkit-chip">
              <span aria-hidden="true" className="toolkit-monogram">{tool.abbr}</span>
              <span>{tool.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeInView>
  );
}

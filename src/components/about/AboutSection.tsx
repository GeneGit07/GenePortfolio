import FadeInView from "@/components/ui/FadeInView";
import { ABOUT, SOFTWARES } from "@/data/site";

export default function AboutSection() {
  return (
    <FadeInView className="page-shell">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
        <div>
          <p className="section-label text-muted">{ABOUT.sectionNumber} / About</p>
          <h2 className="mt-7 font-display text-5xl font-medium leading-[0.95] tracking-[-0.06em] md:text-7xl">Designer<br /><span className="italic">by choice.</span></h2>
          <p className="mt-3 font-display text-lg font-medium uppercase tracking-[0.08em] text-muted md:text-xl">AI-assisted by design.</p>
        </div>
        <div className="pt-1 lg:pt-10">
          <p className="max-w-3xl font-display text-3xl font-medium leading-snug tracking-[-0.035em] md:text-5xl"><span className="block">Good design starts with an idea.</span><span className="text-muted">AI just helps me take it further.</span></p>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted md:text-lg">Hi, I’m Eugene. I’m a designer focused on <strong className="font-medium text-foreground">visual storytelling, branding, and digital content</strong>, using AI as part of my creative process.</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">I use AI to explore possibilities, accelerate production, and push ideas further—but <strong className="font-medium text-foreground">I remain behind every creative decision.</strong></p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">The direction is mine.<br />The taste is mine.<br />The execution is mine.</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">AI is simply another tool in my toolbox.</p>
          <div className="mt-10 border-t border-border pt-6">
            <p className="section-label">How I work</p>
            <ol className="mt-5 grid gap-5 sm:grid-cols-3">
              <li className="border-l border-border pl-4">
                <span className="section-label text-accent">01 / Understand</span>
                <p className="mt-2 text-sm leading-relaxed text-muted">Clarify the audience, message, and goal behind the work.</p>
              </li>
              <li className="border-l border-border pl-4">
                <span className="section-label text-accent">02 / Explore</span>
                <p className="mt-2 text-sm leading-relaxed text-muted">Develop visual directions and explore possibilities with the right tools.</p>
              </li>
              <li className="border-l border-border pl-4">
                <span className="section-label text-accent">03 / Refine</span>
                <p className="mt-2 text-sm leading-relaxed text-muted">Make the creative decisions, polish the details, and prepare the final work.</p>
              </li>
            </ol>
          </div>
          <div className="mt-12 border-t border-border pt-6">
            <div className="mb-5 flex items-center justify-between"><p className="section-label">Tools of the trade</p><span className="section-label text-muted">Creative toolkit</span></div>
            <ul className="flex flex-wrap gap-2.5">
              {SOFTWARES.map((tool) => (
                <li key={tool.label} className="flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm">
                  <span aria-hidden="true" className="grid min-w-5 shrink-0 place-items-center rounded bg-foreground px-1 py-1 text-[9px] font-semibold leading-none text-background">{tool.abbr}</span>
                  {tool.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FadeInView>
  );
}

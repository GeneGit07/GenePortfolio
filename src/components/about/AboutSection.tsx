import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";
import SectionHeading from "@/components/ui/SectionHeading";
import { SOFTWARES } from "@/data/site";

const PROCESS = [
  { title: "Understand", body: "Clarify the audience, the message, and the goal behind the work." },
  { title: "Explore", body: "Develop visual directions and test possibilities with the right tools." },
  { title: "Refine", body: "Make the creative calls, polish every detail, and deliver the final work." },
] as const;

export default function AboutSection() {
  return (
    <div className="page-shell">
      <SectionHeading
        index="02"
        label="About"
        title={<>Designer by choice.<br /><span className="italic text-muted">AI-assisted by design.</span></>}
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <FadeInView className="lg:col-span-4">
          <figure className="media-frame mx-auto aspect-[4/5] max-w-sm lg:max-w-none">
            <Image
              src="/assets/home/eugene-portrait.jpg"
              alt="Portrait of Eugene Dalida"
              fill
              sizes="(max-width: 1024px) 384px, 30vw"
              className="object-cover"
            />
          </figure>
        </FadeInView>

        <FadeInView delay={0.05} className="lg:col-span-8">
          <p className="display-3 max-w-[30ch]">
            Good design starts with an idea. AI just helps me take it further —{" "}
            <span className="text-muted">the direction, the taste, and the execution stay mine.</span>
          </p>
          <div className="prose-muted mt-8 grid max-w-[68ch] gap-5 md:grid-cols-2 md:gap-8">
            <p>
              Hi, I’m Eugene — a designer focused on <strong>visual storytelling, social content, and video</strong> for brands that want to look as good as they are.
            </p>
            <p>
              I use AI to explore possibilities and accelerate production, but <strong>every creative decision is mine</strong>. It’s one tool in the kit, not the author.
            </p>
          </div>

          <ol className="mt-14 grid gap-8 sm:grid-cols-3">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="process-step">
                <span className="section-label text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-medium tracking-normal" style={{ fontFamily: "var(--font-body-family)" }}>{step.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-muted">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14">
            <p className="section-label text-muted">Toolkit</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SOFTWARES.map((tool) => (
                <li key={tool.label} className="toolkit-chip">
                  <span aria-hidden="true" className="toolkit-monogram">{tool.abbr}</span>
                  {tool.label}
                </li>
              ))}
            </ul>
          </div>
        </FadeInView>
      </div>
    </div>
  );
}

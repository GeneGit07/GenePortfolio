import FadeInView from "@/components/ui/FadeInView";
import { ABOUT, SOFTWARES } from "@/data/site";

export default function AboutSection() {
  return (
    <FadeInView>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="text-sm font-mono font-medium text-muted">
            {ABOUT.sectionNumber}
          </span>
          <h2 className="mt-1 text-4xl font-bold uppercase tracking-tight md:text-5xl">
            {ABOUT.title[0]}
            <br />
            {ABOUT.title[1]}
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          {ABOUT.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={`${i === 0 ? "" : "mt-6 "}text-lg leading-relaxed text-muted`}
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-10 border-t border-border pt-6">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-subtle">
              Softwares
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
              {SOFTWARES.map((sw) => (
                <li key={sw.label} className="text-sm tracking-wide text-muted">
                  <span className="font-mono text-xs text-subtle">{sw.abbr}</span>
                  <span className="mx-1.5 text-border">·</span>
                  {sw.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FadeInView>
  );
}

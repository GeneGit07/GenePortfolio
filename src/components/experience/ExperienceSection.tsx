import Link from "next/link";
import FadeInView from "@/components/ui/FadeInView";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/data/site";
import { getWorkStats } from "@/data/social";

export default function ExperienceSection() {
  const stats = getWorkStats();
  const statItems = [
    { value: stats.brands, label: "Active brand partners" },
    { value: stats.designs, label: "Campaign designs in portfolio" },
    { value: stats.videos, label: "Videos & reels in portfolio" },
  ];

  return (
    <div className="page-shell">
      <SectionHeading
        index="03"
        label="Experience"
        title={<>Where I’ve been<br /><span className="italic text-muted">doing the work.</span></>}
        intro="Hands-on roles where I own the content end to end — from planning and art direction to editing and publishing."
      />

      <FadeInView>
        <dl className="mb-16 grid grid-cols-3 gap-4 md:mb-20 md:gap-8">
          {statItems.map((stat) => (
            <div key={stat.label} className="border-t border-border-strong pt-5">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="stat-value">{stat.value}</dd>
              <dd className="mt-3 text-xs leading-snug text-muted md:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </FadeInView>

      <ol className="border-b border-border">
        {EXPERIENCE.map((entry, i) => (
          <li key={`${entry.company}-${entry.role}`}>
            <FadeInView delay={Math.min(i * 0.05, 0.15)} className="experience-row">
              <p className="section-label pt-1 text-muted">{entry.period}</p>

              <div>
                <h3 className="display-3">{entry.company}</h3>
                <p className="mt-2 text-sm text-muted">
                  {entry.role}
                  {entry.location ? <> · {entry.location}</> : null}
                </p>
              </div>

              <div>
                <p className="text-[0.9375rem] leading-[1.7] text-muted">{entry.summary}</p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {entry.highlights.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                  {entry.caseStudy ? (
                    <Link href={`/projects/${entry.caseStudy}`} className="group text-link ml-auto pl-2">
                      Case study <span aria-hidden="true" className="btn-arrow">→</span>
                    </Link>
                  ) : null}
                </div>
              </div>
            </FadeInView>
          </li>
        ))}
      </ol>
    </div>
  );
}

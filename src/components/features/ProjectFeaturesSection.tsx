import FadeInView from "@/components/ui/FadeInView";
import ProjectFeatureCard from "@/components/features/ProjectFeatureCard";
import { PROJECT_FEATURES, PROJECT_FEATURES_INTRO } from "@/data/site";

export default function ProjectFeaturesSection() {
  return (
    <div className="page-shell">
      <FadeInView>
        <div className="mb-14 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
          <div>
            <span className="section-label text-muted">03 / Project Features</span>
            <h2 className="mt-5 font-display text-5xl font-medium tracking-[-0.065em] md:text-7xl">
              What I do.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
            {PROJECT_FEATURES_INTRO}
          </p>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {PROJECT_FEATURES.map((feature, index) => (
          <FadeInView key={feature.title} delay={Math.min(index * 0.05, 0.25)} className="h-full">
            <ProjectFeatureCard feature={feature} index={index} />
          </FadeInView>
        ))}
      </div>
    </div>
  );
}

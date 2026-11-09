import FadeInView from "@/components/ui/FadeInView";
import ProjectFeatureCard from "@/components/features/ProjectFeatureCard";
import { PROJECT_FEATURES, PROJECT_FEATURES_INTRO } from "@/data/site";

export default function ProjectFeaturesSection() {
  return (
    <div className="page-shell">
      <FadeInView>
        <div className="section-heading">
          <div>
            <span className="section-label text-accent">03 / Project Features</span>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-6xl">
              What I do.
            </h2>
          </div>
          <p className="max-w-[65ch] text-base leading-[1.65] text-muted">
            {PROJECT_FEATURES_INTRO}
          </p>
        </div>
      </FadeInView>

      <div className="mt-8 grid grid-cols-1 gap-4">
        {PROJECT_FEATURES.map((feature, index) => (
          <FadeInView key={feature.title} delay={Math.min(index * 0.035, 0.14)} className="h-full">
            <ProjectFeatureCard feature={feature} index={index} />
          </FadeInView>
        ))}
      </div>
    </div>
  );
}

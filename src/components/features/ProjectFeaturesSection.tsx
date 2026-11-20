import FadeInView from "@/components/ui/FadeInView";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectFeatureCard from "@/components/features/ProjectFeatureCard";
import { PROJECT_FEATURES, PROJECT_FEATURES_INTRO } from "@/data/site";

export default function ProjectFeaturesSection() {
  return (
    <div className="page-shell">
      <SectionHeading
        index="04"
        label="Services"
        title={<>What I do<span className="text-accent">.</span></>}
        intro={PROJECT_FEATURES_INTRO}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECT_FEATURES.map((feature, index) => (
          <FadeInView key={feature.title} delay={Math.min(index * 0.04, 0.2)} className="h-full">
            <ProjectFeatureCard feature={feature} index={index} />
          </FadeInView>
        ))}
      </div>
    </div>
  );
}

import FadeInView from "@/components/ui/FadeInView";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/gallery/ProjectCard";
import { socialProjects } from "@/data/social";

export default function SocialSection() {
  return (
    <div className="page-shell">
      <SectionHeading
        index="01"
        label="Selected work"
        title={<>Brands I build<br /><span className="italic text-muted">content for.</span></>}
        intro="Ongoing social, video, and campaign work for three brands — each with its own voice, and one consistent standard of craft."
      />

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-20">
        {socialProjects.map((project, i) => (
          <FadeInView key={project.slug} delay={Math.min(i * 0.05, 0.15)} className={i === 0 ? "md:col-span-2" : ""}>
            <ProjectCard
              index={String(i + 1).padStart(2, "0")}
              slug={project.slug}
              title={project.title}
              year={project.year}
              category={project.category}
              summary={project.summary}
              thumbnail={project.thumbnail}
              thumbnailAlt={project.thumbnailAlt}
              thumbnailPosition={project.thumbnailPosition}
              videoSrc={project.thumbnailVideo?.src}
              videoPoster={project.thumbnailVideo?.poster}
              featured={i === 0}
            />
          </FadeInView>
        ))}
      </div>
    </div>
  );
}

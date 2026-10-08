"use client";

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";

interface ProjectCardProps {
  slug: string;
  title: string;
  year?: string;
  eyebrow?: string;
  thumbnail: string;
  thumbnailAlt?: string;
  thumbnailPosition?: string;
  category?: string;
  description?: string;
  variant?: "default" | "large";
}

function ProjectCard({
  slug,
  title,
  year,
  eyebrow,
  thumbnail,
  thumbnailAlt,
  thumbnailPosition,
  category,
  description,
  variant = "default",
}: ProjectCardProps) {
  const isLarge = variant === "large";

  return (
    <Link href={`/projects/${slug}`} className={`project-link group block ${isLarge ? "h-full" : ""}`}>
      <Card className="flex h-full cursor-pointer flex-col !rounded-[1.35rem] !p-3 md:!rounded-[1.7rem] md:!p-4">
        <div
          className={
            isLarge
              ? "relative aspect-[1.28] overflow-hidden rounded-[1rem] bg-surface md:rounded-[1.25rem]"
              : "relative min-h-45 flex-1 overflow-hidden rounded-[1rem] bg-surface"
          }
        >
          <Image
            src={thumbnail}
            alt={thumbnailAlt ?? title}
            fill
            style={thumbnailPosition ? { objectPosition: thumbnailPosition } : undefined}
            sizes={
              isLarge
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            className="project-image object-cover"
          />
          <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-background/90 text-lg text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">↗</span>
        </div>
        <div className="flex items-end justify-between gap-4 px-3 pb-2 pt-5 md:px-4 md:pb-3">
          <div>
            <p className="section-label text-background/60">{eyebrow ?? year}</p>
            {category && <p className="mt-1 text-xs text-background/55">{category}</p>}
            <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-background md:text-2xl">{title}</h3>
            {description && <p className="mt-2 line-clamp-2 max-w-xl text-xs leading-relaxed text-background/65 md:text-sm">{description}</p>}
          </div>
          <span className="mb-1 text-sm text-background/60">View case ↗</span>
        </div>
      </Card>
    </Link>
  );
}

export default memo(ProjectCard);

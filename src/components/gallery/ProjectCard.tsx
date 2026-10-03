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
  variant?: "default" | "large";
}

function ProjectCard({
  slug,
  title,
  year,
  eyebrow,
  thumbnail,
  variant = "default",
}: ProjectCardProps) {
  const isLarge = variant === "large";

  return (
    <Link href={`/projects/${slug}`} className={isLarge ? "block h-full" : undefined}>
      <Card className="group flex h-full cursor-pointer flex-col">
        <div
          className={
            isLarge
              ? "relative aspect-video overflow-hidden rounded-2xl bg-surface"
              : "relative flex-1 min-h-45 overflow-hidden rounded-2xl bg-surface"
          }
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes={
              isLarge
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            className="object-cover group-hover:scale-105"
          />
        </div>
        <div className="pt-5">
          <p className="text-xs uppercase tracking-widest text-background/60">
            {eyebrow ?? year}
          </p>
          <h3 className="mt-1 font-display text-xl font-bold text-background">{title}</h3>
        </div>
      </Card>
    </Link>
  );
}

export default memo(ProjectCard);

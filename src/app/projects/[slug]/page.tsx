import { notFound } from "next/navigation";
import { socialProjects, getSocialBySlug } from "@/data/social";
import { brandingPieces, getBrandingPieceBySlug } from "@/data/branding";
import SocialCasePage from "@/components/social/SocialCasePage";
import BrandingCasePage from "@/components/branding/BrandingCasePage";

export function generateStaticParams() {
  return [...socialProjects, ...brandingPieces].map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const social = getSocialBySlug(slug);
  if (social) {
    return <SocialCasePage project={social} />;
  }

  const branding = getBrandingPieceBySlug(slug);
  if (branding) {
    return <BrandingCasePage project={branding} />;
  }

  notFound();
}

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dayana Pumajulca — Portfolio",
    short_name: "Dayana Portfolio",
    description: "Portfolio minimalista de branding, redes sociales y diseño audiovisual.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/assets/home/favicon-white.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

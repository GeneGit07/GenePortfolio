import type { ComponentType, SVGProps } from "react";
import {
  AfterEffectsIcon,
  CapCutIcon,
  IllustratorIcon,
  InDesignIcon,
  LightroomIcon,
  PhotoshopIcon,
  PremiereProIcon,
} from "@/components/about/SoftwareIcons";

export const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://www.instagram.com/dayanap.designer" },
  { name: "Facebook", href: "https://www.facebook.com/dayanapgdesigner" },
  { name: "Behance", href: "https://behance.net/dayanadesigner4" },
] as const;

export const SOFTWARES: {
  label: string;
  abbr: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  { label: "Photoshop", abbr: "Ps", icon: PhotoshopIcon },
  { label: "Illustrator", abbr: "Ai", icon: IllustratorIcon },
  { label: "InDesign", abbr: "Id", icon: InDesignIcon },
  { label: "Premiere Pro", abbr: "Pr", icon: PremiereProIcon },
  { label: "After Effects", abbr: "Ae", icon: AfterEffectsIcon },
  { label: "Lightroom", abbr: "Lr", icon: LightroomIcon },
  { label: "CapCut", abbr: "Cc", icon: CapCutIcon },
];

export const CONTACT = {
  sectionNumber: "04",
  title: "Contacto",
  description:
    "Disponible para proyectos freelance, dirección creativa y colaboraciones. Creemos algo extraordinario juntos.",
  phone: "+51964322491",
  phoneDisplay: "+51 964 322 491",
  phoneHref: "tel:+51964322491",
  email: "dayanap.designer@gmail.com",
  emailHref: "mailto:dayanap.designer@gmail.com",
} as const;

export const HERO = {
  badge: "Perú",
  title: ["Dayana", "Pumajulca"] as const,
  description: "Branding, redes sociales, diseño gráfico y audiovisual.",
} as const;

export const ABOUT = {
  sectionNumber: "01",
  title: ["Diseñadora", "Gráfica y Audiovisual"] as const,
  paragraphs: [
    "Hola soy Dayana y soy Diseñadora Gráfica con experiencia en agencias y proyectos digitales. Responsable, organizada y comprometida con la calidad del trabajo.",
    "Enfocada en diseño para redes sociales, branding y edición de contenido audiovisual. Actualmente, me encuentro en constante crecimiento profesional, con el objetivo de seguir ampliando mis conocimientos.",
  ],
} as const;

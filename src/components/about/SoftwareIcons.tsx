// Iconos monocromos de software (Photoshop, Illustrator, InDesign,
// Premiere Pro, After Effects, Lightroom, CapCut).
// Insignia sólida estilo Adobe: cuadrado redondeado relleno con
// `currentColor` y letras en el color de fondo (vía style + var, ya que
// los atributos de presentación SVG no aceptan var()). Así se adaptan
// solos al tema claro/oscuro. Sin dependencias, aptos para export estático.

import type { SVGProps } from "react";

type SoftwareIconProps = SVGProps<SVGSVGElement>;

function Badge({ letters, ...props }: SoftwareIconProps & { letters: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" {...props}>
      <rect x="0" y="0" width="16" height="16" rx="2.5" fill="currentColor" />
      <text
        x="8"
        y="8.3"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="8.5"
        fontWeight="700"
        style={{ fill: "var(--color-background)" }}
      >
        {letters}
      </text>
    </svg>
  );
}

export function PhotoshopIcon(props: SoftwareIconProps) {
  return <Badge letters="Ps" {...props} />;
}

export function IllustratorIcon(props: SoftwareIconProps) {
  return <Badge letters="Ai" {...props} />;
}

export function InDesignIcon(props: SoftwareIconProps) {
  return <Badge letters="Id" {...props} />;
}

export function PremiereProIcon(props: SoftwareIconProps) {
  return <Badge letters="Pr" {...props} />;
}

export function AfterEffectsIcon(props: SoftwareIconProps) {
  return <Badge letters="Ae" {...props} />;
}

export function LightroomIcon(props: SoftwareIconProps) {
  return <Badge letters="Lr" {...props} />;
}

export function CapCutIcon(props: SoftwareIconProps) {
  return <Badge letters="Cc" {...props} />;
}

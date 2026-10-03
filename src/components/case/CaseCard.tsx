import type { ReactNode } from "react";
import FadeInView from "@/components/ui/FadeInView";
import Card from "@/components/ui/Card";

// Card de los cases (thumbnail, galería Branding, secciones Social).
// Reutiliza el Card compartido y suma la animación de entrada.
export default function CaseCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <FadeInView delay={delay} className={className}>
      <Card>{children}</Card>
    </FadeInView>
  );
}

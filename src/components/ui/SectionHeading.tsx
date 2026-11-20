import type { ReactNode } from "react";
import FadeInView from "@/components/ui/FadeInView";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
}

/** Shared heading for every home-page section: index · label, display title, optional intro. */
export default function SectionHeading({ index, label, title, intro, id }: SectionHeadingProps) {
  return (
    <FadeInView>
      <header className="section-heading">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-index">{index}</span>
            <span aria-hidden="true" className="eyebrow-rule" />
            {label}
          </p>
          <h2 id={id} className="display-2 mt-6">
            {title}
          </h2>
        </div>
        {intro ? <p className="lead">{intro}</p> : null}
      </header>
    </FadeInView>
  );
}

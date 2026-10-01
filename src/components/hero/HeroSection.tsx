import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";
import HeroActions from "@/components/ui/HeroActions";
import { HERO } from "@/data/site";

export default function HeroSection() {
  return (
    <>
      <FadeInView className="flex items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] tracking-widest text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {HERO.badge}
          </span>
          <h1 className="mt-4 text-6xl font-bold leading-none tracking-tighter md:text-7xl lg:text-8xl">
            {HERO.title[0]}
            <br />
            {HERO.title[1]}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            {HERO.description}
          </p>
          <HeroActions />
        </div>
      </FadeInView>
      <FadeInView className="flex items-center justify-center md:items-stretch">
        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[40px] py-4 md:h-full md:rounded-[48px] md:py-0">
          <Image
            src="/assets/home/hero-logo.webp"
            alt="Hero logo"
            width={2250}
            height={1500}
            className="h-auto w-full max-w-130 overflow-hidden rounded-[40px] object-contain md:h-full md:max-h-dvh md:w-full md:max-w-none md:rounded-[48px] md:object-contain"
            priority
            sizes="(max-width: 768px) 90vw, 50vw"
          />
        </div>
      </FadeInView>
    </>
  );
}

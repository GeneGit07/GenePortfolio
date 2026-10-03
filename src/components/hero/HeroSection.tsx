import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";
import HeroActions from "@/components/ui/HeroActions";
import { HERO } from "@/data/site";

export default function HeroSection() {
  return (
    <>
      <FadeInView className="flex items-center">
        <div>
          <h1 className="font-display text-6xl font-bold leading-none tracking-tighter md:text-7xl xl:text-8xl 2xl:text-9xl">
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
        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl py-4 md:h-full md:py-0">
          <Image
            src="/assets/home/hero-logo.webp"
            alt="Hero logo"
            width={2250}
            height={1500}
            className="h-auto w-full max-w-130 overflow-hidden rounded-2xl object-contain md:h-full md:max-h-dvh md:w-full md:max-w-none md:object-contain"
            priority
            sizes="(max-width: 768px) 90vw, 50vw"
          />
        </div>
      </FadeInView>
    </>
  );
}

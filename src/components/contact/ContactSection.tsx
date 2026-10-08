import FadeInView from "@/components/ui/FadeInView";
import ContactForm from "./ContactForm";
import { CONTACT } from "@/data/site";

export default function ContactSection() {
  return (
    <FadeInView className="page-shell">
      <div className="overflow-hidden rounded-[1.7rem] bg-accent p-6 text-foreground md:rounded-[2.5rem] md:p-12 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="flex flex-col items-start">
            <p className="section-label">{CONTACT.sectionNumber} / Let’s make something memorable</p>
            <h2 className="mt-8 font-display text-5xl font-medium leading-[0.9] tracking-[-0.065em] md:text-7xl">Have a good<br />idea<span className="italic">?</span></h2>
            <p className="mt-6 max-w-sm leading-relaxed text-foreground/70">{CONTACT.description}</p>
            <a href={CONTACT.emailHref} className="group mt-8 inline-flex items-center gap-3 border-b border-foreground/40 pb-2 font-display text-lg md:text-xl">{CONTACT.email}<span className="transition-transform group-hover:translate-x-1">↗</span></a>
            <a href={CONTACT.phoneHref} className="group mt-4 inline-flex items-center gap-3 border-b border-foreground/40 pb-2 text-sm text-foreground/80">{CONTACT.phoneDisplay}<span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span></a>
            <p className="section-label mt-auto pt-12 text-foreground/60">Manila, Philippines · Available worldwide</p>
          </div>
          <div className="rounded-[1.25rem] bg-foreground p-5 text-background md:rounded-[1.7rem] md:p-8">
            <div className="mb-7 flex items-center justify-between"><p className="section-label">Tell me about your project</p><span className="grid size-9 place-items-center rounded-full bg-accent text-foreground">↘</span></div>
            <ContactForm />
          </div>
        </div>
      </div>
    </FadeInView>
  );
}

"use client";

export default function HeroActions() {
  const handleClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href="/assets/home/cv-dayana-pumajulca.pdf"
        download="CV-Dayana-Pumajulca.pdf"
        className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium tracking-wide text-background hover:bg-foreground/90"
      >
        Descargar CV ↓
      </a>
      <a
        href="#contact"
        onClick={handleClick("contact")}
        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-foreground/15 bg-surface/60 px-6 py-3 text-sm font-medium tracking-wide text-foreground shadow-sm hover:border-foreground/30 hover:bg-surface"
      >
        Contacto <span aria-hidden className="text-subtle">↗</span>
      </a>
    </div>
  );
}

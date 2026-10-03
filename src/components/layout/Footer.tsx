import { PAGE_PADDING_X } from "@/lib/constants";
import { SOCIAL_LINKS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Ola invertida: parte superior del footer. El recorte muestra el
          fondo de la página y el cuerpo queda del color opuesto al tema. */}
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-16 w-full bg-background md:h-24"
      >
        <path
          d="M0,120 V80 C240,20 480,20 720,70 C960,120 1200,120 1440,60 V120 Z"
          className="fill-foreground"
        />
      </svg>
      <div className={`py-12 md:py-16 ${PAGE_PADDING_X}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="font-ventura text-4xl uppercase leading-none tracking-tight md:text-6xl">
              Dayana
              <br />
              Pumajulca
            </p>
            <nav
              className="flex flex-wrap items-center justify-start gap-3 md:justify-end"
              aria-label="Redes sociales"
            >
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-background/20 px-6 py-3 text-sm uppercase tracking-widest text-background hover:bg-background hover:text-foreground"
                >
                  {link.name}
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </nav>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-2 border-t border-background/15 pt-6 text-sm text-background/60 md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} Dayana Pumajulca. Todos los
              derechos reservados.
            </p>
            <p>
              Desarrollado por{" "}
              <span className="font-medium text-background">
                Dreamy Studio
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { PAGE_PADDING_X } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className={`bg-background py-8 ${PAGE_PADDING_X}`}>
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-2 text-sm">
        <p className="text-muted">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

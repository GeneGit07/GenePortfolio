import Link from "next/link";
import { PAGE_PADDING_X } from "@/lib/constants";

export default function NotFound() {
  return (
    <main
      className={`flex min-h-[60dvh] flex-col items-center justify-center py-24 text-center ${PAGE_PADDING_X}`}
    >
      <p className="text-sm font-mono uppercase tracking-widest text-subtle">404</p>
      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">Project not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The project you’re looking for doesn’t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm tracking-wide hover:border-foreground hover:text-foreground"
      >
        ← Back to home
      </Link>
    </main>
  );
}

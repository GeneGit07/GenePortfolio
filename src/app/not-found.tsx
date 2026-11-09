import Link from "next/link";
export default function NotFound() {
  return (
    <main
      id="main-content"
      className="page-shell flex min-h-[70dvh] flex-col items-center justify-center py-24 text-center"
    >
      <p className="section-label text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">Project not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The project you’re looking for doesn’t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink hover:bg-accent-hover"
      >
        ← Back to home
      </Link>
    </main>
  );
}

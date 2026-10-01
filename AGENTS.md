# AGENTS.md

Static single-page portfolio for a graphic designer. Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS v4, Lenis. **pnpm** is the package manager (a `pnpm-lock.yaml` exists; never use npm/yarn).

## Commands

- Install: `pnpm install`
- Dev server: `pnpm dev` (http://localhost:3000)
- Lint: `pnpm lint` (ESLint 9 flat config, `eslint.config.mjs`)
- Build: `pnpm build` (static export)
- Serve the static build: `pnpm start` (`npx serve out`)
- Typecheck: `npx tsc --noEmit` (there is no `typecheck` script; `next build` also type-checks)

There is **no test suite** in this repo.

## Static export constraints (critical)

`next.config.ts` sets `output: "export"` with `images.unoptimized: true`. The build emits a fully static site to **`out/`** (not `.next/`). Consequences:

- No API routes, no SSR/ISR, no runtime `next/image` optimization, no server-side features. `next/image` still works but serves files verbatim from `public/`.
- The dynamic route `src/app/projects/[slug]/page.tsx` is prerendered via `generateStaticParams` (wired to all data arrays). Every slug must exist in the data or that page won't be generated.
- When adding routes, favor static generation; verify with `pnpm build`.

## Data-driven content

Portfolio content lives in `src/data/` — agents edit data, not JSX, to change content:

- `branding.ts` — `BrandingPiece[]`. Each piece has `slug`, `title`, `subtitle`, `year`, `palette`, `thumbnail`, `description`, and `gallery` built via `buildBrandingGallery`.
- `social.ts` — `SocialProject[]`. Each has `slug`, `title`, `year`, `thumbnail`, `description`, `subtitle`, `palette`, and `gallery` built via `buildSocialGallery`.
- `gallery.ts` — Shared gallery builder logic (`buildBrandingGallery`, `buildSocialGallery`), kind maps, and constants. Social kinds are `banner | carousel | mockup | post | reel` in that editorial order; `carousel` renders like `mockup` (`colSpan: 2`, `aspect-[16/9]`). Both branding and social data files import from here.
- `site.ts` — Site-wide content (`SOCIAL_LINKS`, `SOFTWARES`, `CONTACT`, `HERO`, `ABOUT`). Edit here instead of section components. (`NAV_ITEMS` lives in `src/lib/constants.ts`, not here.)

### Adding a new project

1. Add image assets to `public/assets/` (see paths below).
2. Add the entry to the corresponding `src/data/{branding,social}.ts`.
3. `src/app/projects/[slug]/page.tsx` `generateStaticParams` spreads all data arrays, so adding to the data file is enough.
4. Verify with `pnpm build`.

### Image asset paths

- **Branding**: `public/assets/branding/<slug>/` — cover is `<slug>.webp`, gallery items are `item-1.webp` … `item-N.webp`. Referenced as `/assets/branding/<slug>/<file>.webp`.
- **Social**: `public/assets/social/<project>/{banner,carousel,mockup,post,reel}/` — files follow `<kind>-<n>.webp` (or `.webm` for reels). Referenced as `/assets/social/<project>/<kind>/<kind>-<n>.ext`.
- **Home/brand**: `public/assets/home/` — site identity (`logo-white.webp`, `logo-black.webp`, `hero-logo.webp`, `favicon-*.ico`) plus the CV PDF (`cv-dayana-pumajulca.pdf`), downloaded by the Hero primary button (`HeroActions.tsx` via `<a download>`).

## Theming / styling quirks

- Tailwind v4 is configured **in CSS**, not via a config file. Theme tokens (`--color-background`, `--color-accent`, etc.) are defined in the `@theme` block in `src/app/globals.css`. Add/change colors there.
- Light theme overrides are under the `.light` class (toggled on `<html>`).
- Theme transitions use CSS custom properties (`--theme-transition-property` — includes `transform, translate, scale, rotate` — `--theme-transition-duration: 1s`, `--theme-transition-timing`) applied to `html *`. This unlayered rule wins over Tailwind v4 `transition-*`/`duration-*` utilities (cascade layers), so do NOT add those utilities — all animation runs on the unified theme duration.
- `body { background-color }` (not `background` shorthand) to align with the transition-property list.
- `postcss.config.mjs` uses only `@tailwindcss/postcss` (v4 plugin).
- `@/*` path alias maps to `src/*` (`tsconfig.json`).

## Layout / animation notes

- Page horizontal padding is unified in `PAGE_PADDING_X` (`src/lib/constants.ts`: `px-6 md:px-16 lg:px-64`). All home sections, `Header`, `Footer`, both case pages, and `not-found` consume it — never hardcode section `px-*`.
- Home sections are modular: `src/app/page.tsx` only composes wrappers (`<section id>` + padding); content lives in `hero/HeroSection`, `about/AboutSection`, `social/SocialSection`, `branding/BrandingSection`, `contact/ContactSection`, all data-driven from `src/data/site.ts`.
- Case pages share `CaseHero` (`src/components/case/CaseHero.tsx`, `"use client"`) — full-width title, 2-column info + zoomable `aspect-[16/9]` thumbnail with `ImageModal`, `palette` required. Social and branding differ only in their galleries; `BrandingCasePage` stays a server component rendering the client `CaseHero`.
- `SocialSectionNav.tsx` is a sticky pill nav (`top-16` mobile to match the `h-16` mobile header) with snap scrolling and active-kind tracking via `IntersectionObserver` (central band, same pattern as `Header`). No border, no mask fade — keep it that way.
- Both case pages render the same `hr` divider (`mt-0 border-0 border-t border-border md:mt-20` in `FadeInView`) between `CaseHero` and the gallery.

- `SmoothScrollProvider.tsx` (Lenis) wraps the app in `src/app/layout.tsx`. Scroll position resets to top on route change via `lenis.scrollTo(0, { immediate: true, force: true })` — using Lenis's API instead of `window.scrollTo` so the internal scroll state is also cleared.
- Scroll-driven reveals use `FadeInView` (`src/components/ui/FadeInView.tsx`) — `IntersectionObserver` with conditional `opacity-*/translate-*` classes (animated by the unified theme transition) and staggered inline `transitionDelay`.
- `HoverShade` is a shared hover overlay (`bg-black/0 → group-hover:bg-black/10`, animated by the unified theme transition) used on `ProjectCard`, `SocialGalleryGrid`, `BrandingGalleryGrid`, and `ReelCard`.
- `GalleryGrid.tsx` is the generic bento grid (`grid-cols-2 md:grid-cols-4`, `squareRows` via `ResizeObserver`); `GalleryGrid.Item` wraps `FadeInView`. Section grids (`BrandingSection`, `SocialSection`) use paginated `ProjectCard` lists (`variant="large"` → `aspect-video`, no rounding).
- `ShowMoreButton.tsx` is a pill matching the Hero secondary button (`rounded-full border-foreground/15 bg-surface/60`), rendered as `{hasMore ? ... : null}` via `usePaginatedList` (`src/lib/pagination.ts`) — plain mount/unmount, no exit choreography.
- Header tracks active section via `IntersectionObserver` and `NAV_ITEMS` (`src/lib/constants.ts`); mobile nav is a full-screen overlay.

## Build and deployment

- `vercel.json` configures clean URLs, long-lived image/font caching, and security headers for Vercel static hosting. The `build` script targets Vercel's static output.
- Deployable to any static host: `pnpm build` then serve the `out/` directory.
- `pnpm-workspace.yaml` only lists `allowBuilds` for `sharp` and `unrs-resolver` — required so postinstall scripts run; keep them.

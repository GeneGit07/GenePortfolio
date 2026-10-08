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

- `branding.ts` — `BrandingPiece[]`. Each piece has `slug`, `title`, `year`, `palette`, `thumbnail`, `description`, and `gallery` built via `buildBrandingGallery`. No `subtitle` field.
- `social.ts` — `SocialProject[]`. Each has `slug`, `title`, `year`, `thumbnail`, `description`, `palette`, and `gallery` built via `buildSocialGallery`. No `subtitle` field.
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
- Theme switching uses the View Transitions API crossfade (`::view-transition-old/new(root)`, 0.5s) with per-element transitions suppressed via `html.theme-flip` (`ThemeProvider.toggle` + `lib/theme.ts`). Reason: `html *` transitioning `color` makes inherited values re-animate down the tree (late echo on nested titles/icons). Fallback without support or with reduced-motion is an instant flip.
- Fonts (all local `public/fonts`, static-export safe): `--font-display` + `--font-sans` = Intel One Display (400/500/700 via `@font-face`); `--font-mono` = Geist Mono (micro-labels); `--font-ventura` = Ventura (footer wordmark only). Headings use `font-display font-bold`. (`HERO.badge` still exists in `site.ts` but is no longer rendered — the hero pill was removed.)
- `body { overflow-x: clip }` guard preserves sticky (unlike hidden).
- `postcss.config.mjs` uses only `@tailwindcss/postcss` (v4 plugin).
- `@/*` path alias maps to `src/*` (`tsconfig.json`).

## Layout / animation notes

- Page horizontal padding is unified in `PAGE_PADDING_X` (`src/lib/constants.ts`: `px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64`, mirrored by the inset section separators in `globals.css`: `1.5rem / 2rem / 4rem / 6rem / 8rem / 16rem`). All home sections, `Header`, `Footer`, both case pages, and `not-found` consume it — never hardcode section `px-*`.
- Hero grid splits to 2 columns at `md` (`src/app/page.tsx`); the title scales `text-6xl → md:7xl → xl:8xl → 2xl:9xl` and the image is capped (`max-w-130`) only below `md`.
- Home sections are modular: `src/app/page.tsx` only composes wrappers (`<section id>` + padding; contact is a `<footer id="contact">`); content lives in `hero/HeroSection`, `about/AboutSection`, `social/SocialSection`, `branding/BrandingSection`, `contact/ContactSection`, all data-driven from `src/data/site.ts`. Section headers are stacked (number over title, `mt-1`), home grids use `gap-10 md:gap-12`.
- `AboutSection` renders `SOFTWARES` with local `SoftwareIcons.tsx` badges (solid `currentColor` rounded square + letters in `var(--color-background)`, theme-aware, no deps).
- `ContactSection` renders phone/email links with inline icons + `ContactForm.tsx` (`"use client"`, `mailto:` submit, no backend). Social links live in `Footer`, not here.
- `Footer` is inverted (`bg-foreground text-background`) with a wave SVG on top (`bg-background` strip, `fill-foreground` path), Ventura wordmark, `SOCIAL_LINKS` pill buttons, and a Dreamy Studio credit. Contact (`footer#contact`) has no inset separator — it flows into the wave.
- Case pages share `CaseHero` (`src/components/case/CaseHero.tsx`, `"use client"`) — full-width title (no subtitle), 2-column info + zoomable `aspect-[16/9]` thumbnail wrapped in `CaseCard`, `palette` required and rendered as full-width bars with hex labels (luminance-aware text via `textOnColor`). Social and branding differ only in their galleries; `BrandingCasePage` stays a server component rendering the client `CaseHero`.
- `SocialSectionNav.tsx` is a sticky pill nav (`top-16` mobile to match the `h-16` mobile header) with snap scrolling and active-kind tracking via `IntersectionObserver` (central band, same pattern as `Header`). No border, no mask fade — keep it that way.
- Both case pages render the same `hr` divider (`mt-0 border-0 border-t-2 border-subtle/60 md:mt-20` in `FadeInView`) between `CaseHero` and the gallery. Galleries and the case cover are wrapped in `CaseCard` (`case/CaseCard.tsx` = `Card` + `FadeInView`).
- `Card` (`ui/Card.tsx`) is the single visual shell for home + case cards: `bg-foreground p-6 rounded-2xl text-background`. `ProjectCard` puts the image (`rounded-2xl`, no border) and eyebrow/title (`text-background/60`, `font-display text-background`) inside it.
- `SmoothScrollProvider.tsx` (Lenis) wraps the app in `src/app/layout.tsx`. Scroll position resets to top on route change via `lenis.scrollTo(0, { immediate: true, force: true })` — using Lenis's API instead of `window.scrollTo` so the internal scroll state is also cleared.
- Scroll-driven reveals use `FadeInView` (`src/components/ui/FadeInView.tsx`) — `IntersectionObserver` (default viewport, no `rootMargin`) toggling `opacity-0 → opacity-100` (no translate, animated by the unified theme transition). The staggered `transitionDelay` is cleared after the entrance reveal so later transitions (e.g. theme color fades) aren't delayed.
- `GalleryGrid.tsx` is the generic bento grid (`grid-cols-2 md:grid-cols-4`, `squareRows` via `ResizeObserver`); `GalleryGrid.Item` wraps `FadeInView`. Section grids (`BrandingSection`, `SocialSection`) use paginated `ProjectCard` lists inside the `Card` shell. Gallery media is `rounded-2xl` with no border/shadow/overlay — there is no `HoverShade` component (deleted); hover zoom is `group-hover:scale-*` only. `ImageModal` is `rounded-2xl` with no shadow.
- `ShowMoreButton.tsx` is a pill matching the Hero secondary button (`rounded-full border-foreground/15 bg-surface/60`), rendered as `{hasMore ? ... : null}` via `usePaginatedList` (`src/lib/pagination.ts`) — plain mount/unmount, no exit choreography.
- Header tracks active section via `IntersectionObserver` and `NAV_ITEMS` (`src/lib/constants.ts`); mobile nav is extracted in `layout/MobileMenu.tsx` (hamburger + full-screen overlay, staggered links). `Header` no longer locks `body` overflow or tears down the observer when the menu opens.
- `ThemeToggle` uses a fixed 22px icon (filled moon / stroked sun in a `h-10 w-10` button); the `size` prop is vestigial. Theme helpers live in `lib/theme.ts`: `currentTheme` / `applyTheme` plus `canViewTransition` / `startThemeViewTransition` (View Transitions gate with reduced-motion check).

## Build and deployment

- `vercel.json` configures clean URLs, long-lived image/font caching, and security headers for Vercel static hosting. The `build` script targets Vercel's static output.
- Deployable to any static host: `pnpm build` then serve the `out/` directory.
- `pnpm-workspace.yaml` only lists `allowBuilds` for `sharp` and `unrs-resolver` — required so postinstall scripts run; keep them.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

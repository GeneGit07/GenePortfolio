# AGENTS.md

This repository is a static portfolio site for Eugene Dalida built with Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, and Lenis. Use pnpm for every install and script command; do not use npm or yarn.

See [README.md](README.md) for the broader product overview, and [src/app/page.tsx](src/app/page.tsx) for the home-page composition.

## Commands

- Install: `pnpm install`
- Dev: `pnpm dev` (runs on http://localhost:3000)
- Lint: `pnpm lint`
- Build: `pnpm build`
- Serve the static export: `pnpm start` (`npx serve out`)
- Typecheck: `npx tsc --noEmit`

There is no automated test suite in this repo.

## Static-site constraints

`next.config.ts` sets `output: "export"` and `images.unoptimized: true`. The app is built as a fully static export to `out/`.

- No API routes, server actions, SSR/ISR, or backend services.
- Prefer static generation and data-driven content over dynamic runtime logic.
- If you add a new page, prefer a static route or component composition over server-only patterns.
- Validate changes with `pnpm build` when the work affects routing, content structure, or asset references.

## Project structure

- `src/app/` — route entry points and global layout. `src/app/layout.tsx` wraps the entire app with theme and smooth-scroll providers.
- `src/components/` — page sections and reusable UI. Keep section composition in `src/components/*` and reuse shared patterns instead of duplicating logic.
- `src/data/` — source of truth for portfolio content. Content is usually edited here, not directly in JSX.
- `src/lib/` — small helpers and constants such as `NAV_ITEMS`, `PAGE_PADDING_X`, and theme utilities.
- `public/assets/` — media assets. Keep filenames and folders aligned with the existing structure for home, branding, social, and features assets.

## Content conventions

- Home content is composed in [src/app/page.tsx](src/app/page.tsx). The page sections are keyed by IDs: `hero`, `about`, `redes-sociales`, `branding`, `email-design`, and `contact`.
- Site-wide text and marketing details live in [src/data/site.ts](src/data/site.ts). Change copy there before editing a section component.
- Navigation labels and spacing constants live in [src/lib/constants.ts](src/lib/constants.ts). Keep these in sync with the page structure.
- Theme variables and color tokens live in [src/app/globals.css](src/app/globals.css); avoid hard-coded theme colors in components when a CSS token already exists.

## Styling and UX conventions

- Tailwind v4 is configured via CSS, not a `tailwind.config.*` file.
- Use the shared page padding constant `PAGE_PADDING_X` instead of adding ad hoc section padding.
- Respect the existing dark/light theme behavior in [src/components/layout/ThemeProvider.tsx](src/components/layout/ThemeProvider.tsx) and [src/lib/theme.ts](src/lib/theme.ts).
- Smooth scrolling is handled by Lenis in [src/components/layout/SmoothScrollProvider.tsx](src/components/layout/SmoothScrollProvider.tsx); route changes reset scroll position through Lenis rather than raw `window.scrollTo`.
- Keep motion and reveal behavior consistent with the existing `FadeInView` pattern; avoid introducing custom animation timing that conflicts with the unified theme transition.

## When editing content

- Prefer data changes in `src/data/*.ts` over editing markup directly.
- For new portfolio items, keep the asset naming and folder pattern consistent with the current `public/assets` layout.
- When changing the site structure or section IDs, update the matching nav and layout references accordingly.
- Validate with `pnpm build` after content or route changes.

## Repo-specific warnings

- This app intentionally uses static hosting patterns; do not assume Vercel server features or API endpoints are available.
- Do not add npm/yarn usage or lockfile churn in a pnpm-managed repo.
- Keep the current Next.js 16 app-router patterns; do not reintroduce older Pages Router conventions unless a task explicitly requires it.



<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

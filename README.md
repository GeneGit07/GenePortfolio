<div align="center">

# Creative Portfolio

**Minimalist dark-theme portfolio for a graphic designer & content editor**

Built with [Next.js](https://nextjs.org) 16, [React](https://react.dev) 19, [TypeScript](https://www.typescriptlang.org) 5, [Tailwind CSS](https://tailwindcss.com) 4, and [Lenis](https://lenis.darkroom.engineering).

[Getting started](#getting-started) • [Project structure](#project-structure) • [Customization](#customization) • [Deployment](#deployment)

</div>

A single-page portfolio website that showcases creative work across branding and social media projects. Features a bento grid, smooth scrolling, scroll-driven fade-in animations, and dedicated project detail pages.

## Features

- **Bento grid** — `GalleryGrid` with `HoverShade` overlay on project cards
- **Progressive content loading** — "See More" buttons via `usePaginatedList` hook
- **Sticky header** — Fixed navigation with active section tracking via `IntersectionObserver`
- **Mobile hamburger menu** — Full-screen overlay with staggered link appearance
- **Smooth scrolling** — Lenis-powered smooth wheel scroll, resets to top on route change via Lenis API
- **Scroll-triggered animations** — Sections and cards fade in via `FadeInView` (`IntersectionObserver`)
- **Project detail pages** — Dynamic route (`projects/[slug]`) with `generateStaticParams` for fully static generation
- **Shared case hero** — `CaseHero` (title, info, palette, zoomable cover) reused by social and branding detail pages
- **Social kind navigation** — Sticky snap-scrolling pill nav (`SocialSectionNav`) with active-kind tracking; kinds render in editorial order (banners → carruseles → mockups → posts → reels)
- **Dark/Light theme** — CSS variable-based theme transitions, persisted in localStorage (`src/lib/theme.ts`)
- **Zoomable images** — Click-to-zoom on project covers via `ImageModal`
- **No runtime dependencies** — Fully static site, zero API or backend requirements

## Built with

| | |
|---|---|
| **Framework** | [Next.js](https://nextjs.org) 16 |
| **UI Library** | [React](https://react.dev) 19 |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering) 1 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) 4 |
| **Language** | [TypeScript](https://www.typescriptlang.org) 5 |
| **Package Manager** | [pnpm](https://pnpm.io) |
| **Linting** | [ESLint](https://eslint.org) 9 |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) 20+
- [pnpm](https://pnpm.io/installation)

### Install

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
```

Produces a fully static export in `out/` (`next.config.ts` sets `output: "export"`).

### Lint

```bash
pnpm lint
```

### Typecheck

```bash
npx tsc --noEmit
```

## Project structure

```
src/
├── app/
│   ├── globals.css               # Tailwind v4 theme tokens, reset, scrollbar styles
│   ├── layout.tsx                 # Root layout — fonts, Lenis provider, header, footer
│   ├── page.tsx                   # Home page — composes hero/about/social/branding/contact sections
│   └── projects/
│       └── [slug]/
│           └── page.tsx           # SSG project detail page (generateStaticParams)
├── components/
│   ├── about/
│   │   └── AboutSection.tsx       # About section on home page (ABOUT + SOFTWARES)
│   ├── branding/
│   │   ├── BrandingCasePage.tsx   # Branding detail page (CaseHero + gallery)
│   │   ├── BrandingGalleryGrid.tsx # Bento gallery layout for branding
│   │   └── BrandingSection.tsx    # Branding section on home page
│   ├── case/
│   │   └── CaseHero.tsx           # Shared detail-page hero (title, info, palette, zoomable cover)
│   ├── contact/
│   │   └── ContactSection.tsx     # Contact section on home page (CONTACT + SOCIAL_LINKS)
│   ├── gallery/
│   │   ├── GalleryGrid.tsx        # Generic bento grid + GalleryGrid.Item
│   │   └── ProjectCard.tsx        # Reusable project card with HoverShade
│   ├── hero/
│   │   └── HeroSection.tsx        # Hero section on home page (HERO + HeroActions)
│   ├── layout/
│   │   ├── Header.tsx             # Sticky header + mobile nav, uses NAV_ITEMS
│   │   ├── Footer.tsx
│   │   ├── SmoothScrollProvider.tsx # Lenis wrapper with route-change scroll reset
│   │   ├── ThemeProvider.tsx       # Dark/light toggle, persisted in localStorage
│   │   └── ThemeToggle.tsx
│   ├── ui/                        # Shared UI atoms
│   │   ├── FadeInView.tsx         # Scroll-triggered fade-in wrapper
│   │   ├── HeroActions.tsx        # CTA buttons in hero section
│   │   ├── HoverShade.tsx         # Hover overlay (bg-black/0 → group-hover:bg-black/10)
│   │   ├── ImageModal.tsx         # Fullscreen image viewer
│   │   ├── ReelCard.tsx           # Reel card with video poster
│   │   └── ShowMoreButton.tsx     # Progressive reveal button
│   └── social/
│       ├── SocialGalleryGrid.tsx  # Social asset grid with HoverShade
│       ├── SocialCasePage.tsx     # Social detail page (CaseHero + sections grouped by kind)
│       ├── SocialSection.tsx      # Social section on home page
│       └── SocialSectionNav.tsx   # Sticky pill nav with active-kind tracking
├── lib/
│   ├── cn.ts                      # Class merge helper
│   ├── constants.ts               # NAV_ITEMS + PAGE_PADDING_X (unified page padding)
│   ├── pagination.ts              # usePaginatedList hook
│   └── theme.ts                   # Theme helpers (currentTheme, applyTheme)
└── data/
    ├── gallery.ts                 # Shared gallery builders (buildBrandingGallery, buildSocialGallery)
    ├── branding.ts                # BrandingPiece[] + getBrandingPieceBySlug
    ├── social.ts                  # SocialProject[] + getSocialBySlug
    ├── site.ts                    # Site-wide content (SOCIAL_LINKS, SOFTWARES, CONTACT, HERO, ABOUT)
    └── index.ts                   # Barrel exports
public/
└── assets/
    ├── branding/<slug>/           # <slug>.webp (cover) + item-1.webp … item-N.webp
    ├── social/<project>/{banner,carousel,mockup,post,reel}/ # <kind>-<n>.webp (.webm for reels)
    └── home/                      # Site identity: logo-white/black.webp, hero-logo.webp, favicon-*.ico, CV pdf
```

## Customization

### Branding

Edit [`src/data/branding.ts`](src/data/branding.ts) to add, remove, or update branding pieces. Each piece has `slug`, `title`, `subtitle`, `year`, `palette`, `thumbnail`, `description`, and `gallery` built via `buildBrandingGallery({ slug, label, items })`.

> [!TIP]
> Place branding images in `public/assets/branding/<slug>/` where the cover is `<slug>.webp` and gallery items are `item-1.webp` through `item-N.webp`.

### Social

Edit [`src/data/social.ts`](src/data/social.ts). Assets live in `public/assets/social/<project>/{banner,carousel,mockup,post,reel}/` and follow the naming pattern `<kind>-<n>.webp` (or `.webm` for reels). Declare counts via `buildSocialGallery({ base, label, banners, carousels, mockups, posts, reels })`; sections render in editorial order (banners → carruseles → mockups → posts → reels).

### Content & copy

- **Hero / About / Contact text** — edit [`src/data/site.ts`](src/data/site.ts) (`HERO`, `ABOUT`, `CONTACT`)
- **Social links / Softwares** — edit [`src/data/site.ts`](src/data/site.ts) (`SOCIAL_LINKS`, `SOFTWARES`)
- **Navigation** — edit [`src/lib/constants.ts`](src/lib/constants.ts) (`NAV_ITEMS`)
- **Page padding** — edit [`src/lib/constants.ts`](src/lib/constants.ts) (`PAGE_PADDING_X`, consumed by all sections, header, footer and case pages)
- **Meta tags** — edit the `metadata` export in [`src/app/layout.tsx`](src/app/layout.tsx)

### Theme colors

The custom color palette is defined in [`src/app/globals.css`](src/app/globals.css) under the `@theme` block:

| Token | Default | Description |
|---|---|---|
| `--color-background` | `#050505` | Page background |
| `--color-surface` | `#0f0f0f` | Card / surface background |
| `--color-foreground` | `#fafafa` | Text color |
| `--color-muted` | `#a3a3a3` | Secondary text |
| `--color-subtle` | `#525252` | Subtle text / icons |
| `--color-border` | `#1d1d1d` | Section separators |
| `--color-accent` | `#ffffff` | Selection highlight |

Light theme overrides are under the `.light` class in the same file.

### Grid system

The generic bento grid is `GalleryGrid` ([`src/components/gallery/GalleryGrid.tsx`](src/components/gallery/GalleryGrid.tsx)) with `GalleryGrid.Item` wrapping `FadeInView`. Section grids use `usePaginatedList` ([`src/lib/pagination.ts`](src/lib/pagination.ts)) for progressive reveal.

## Deployment

The site is a fully static Next.js app and can be deployed to any static hosting provider.

### Deploy to Vercel

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new)

### Build locally for static hosting

```bash
pnpm build
```

The output in `out/` can be served with `pnpm start` (`npx serve out`) or exported for any static file server.

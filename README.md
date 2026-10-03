<div align="center">

# Creative Portfolio

**Minimalist dark-theme portfolio for a graphic designer & content editor**

Built with [Next.js](https://nextjs.org) 16, [React](https://react.dev) 19, [TypeScript](https://www.typescriptlang.org) 5, [Tailwind CSS](https://tailwindcss.com) 4, and [Lenis](https://lenis.darkroom.engineering).

[Getting started](#getting-started) • [Project structure](#project-structure) • [Customization](#customization) • [Deployment](#deployment)

</div>

A single-page portfolio website that showcases creative work across branding and social media projects. Features a bento grid, smooth scrolling, scroll-driven fade-in animations, and dedicated project detail pages.

## Features

- **Card design system** — Shared `Card` shell (`bg-foreground`, `rounded-2xl`) used by home `ProjectCard`s and case pages (`CaseCard` = `Card` + entrance reveal)
- **Progressive content loading** — "See More" buttons via `usePaginatedList` hook
- **Sticky header** — Fixed navigation with active section tracking via `IntersectionObserver`
- **Mobile hamburger menu** — Extracted `MobileMenu` component: full-screen overlay with staggered link appearance
- **Smooth scrolling** — Lenis-powered smooth wheel scroll, resets to top on route change via Lenis API
- **Scroll-triggered animations** — Sections and cards fade in via `FadeInView` (`IntersectionObserver`, opacity-only)
- **Project detail pages** — Dynamic route (`projects/[slug]`) with `generateStaticParams` for fully static generation
- **Shared case hero** — `CaseHero` (title, info, palette bars with hex labels, zoomable cover in a `CaseCard`) reused by social and branding detail pages
- **Social kind navigation** — Sticky snap-scrolling pill nav (`SocialSectionNav`) with active-kind tracking; kinds render in editorial order (banners → carruseles → mockups → posts → reels)
- **Dark/Light theme** — CSS variable-based theme with 1s unified transition, View Transitions crossfade on toggle, persisted in localStorage (`src/lib/theme.ts`)
- **Zoomable images** — Click-to-zoom on project covers and gallery items via `ImageModal`
- **Contact form** — `mailto:`-based form (name/email/message), no backend required
- **Inverted footer** — Theme-aware footer with wave divider, Ventura wordmark, and social pill buttons
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
│   ├── globals.css               # Tailwind v4 theme tokens, fonts, separators, view-transition styles
│   ├── layout.tsx                 # Root layout — fonts, Lenis provider, header, footer
│   ├── page.tsx                   # Home page — composes hero/about/social/branding/contact sections
│   └── projects/
│       └── [slug]/
│           └── page.tsx           # SSG project detail page (generateStaticParams)
├── components/
│   ├── about/
│   │   ├── AboutSection.tsx       # About section on home page (ABOUT + SOFTWARES with icons)
│   │   └── SoftwareIcons.tsx      # Local Adobe-style software badges (theme-aware, no deps)
│   ├── branding/
│   │   ├── BrandingCasePage.tsx   # Branding detail page (CaseHero + gallery in CaseCard)
│   │   ├── BrandingGalleryGrid.tsx # Bento gallery layout for branding (rounded-2xl, zoomable)
│   │   └── BrandingSection.tsx    # Branding section on home page (paginated ProjectCards)
│   ├── case/
│   │   ├── CaseHero.tsx           # Shared detail-page hero (title, info, palette bars, zoomable cover)
│   │   └── CaseCard.tsx           # Case wrapper: Card + FadeInView
│   ├── contact/
│   │   ├── ContactSection.tsx     # Contact section on home page (CONTACT + ContactForm)
│   │   └── ContactForm.tsx        # mailto: contact form (client component, no backend)
│   ├── gallery/
│   │   ├── GalleryGrid.tsx        # Generic bento grid + GalleryGrid.Item
│   │   └── ProjectCard.tsx        # Reusable project card inside the Card shell
│   ├── hero/
│   │   └── HeroSection.tsx        # Hero section on home page (HERO + HeroActions)
│   ├── layout/
│   │   ├── Header.tsx             # Sticky header, uses NAV_ITEMS + MobileMenu
│   │   ├── MobileMenu.tsx         # Hamburger button + full-screen mobile nav overlay
│   │   ├── Footer.tsx             # Inverted footer: wave, Ventura wordmark, SOCIAL_LINKS pills
│   │   ├── SmoothScrollProvider.tsx # Lenis wrapper with route-change scroll reset
│   │   ├── ThemeProvider.tsx       # Dark/light toggle with View Transitions flip
│   │   └── ThemeToggle.tsx
│   ├── ui/                        # Shared UI atoms
│   │   ├── Card.tsx               # Single card shell (bg-foreground, rounded-2xl) for home + cases
│   │   ├── FadeInView.tsx         # Scroll-triggered fade-in wrapper (opacity-only)
│   │   ├── HeroActions.tsx        # CTA buttons in hero section (incl. CV download)
│   │   ├── ImageModal.tsx         # Fullscreen image viewer
│   │   ├── ReelCard.tsx           # Reel card with video poster
│   │   └── ShowMoreButton.tsx     # Progressive reveal button
│   └── social/
│       ├── SocialGalleryGrid.tsx  # Social asset grid (zoomable, reels supported)
│       ├── SocialCasePage.tsx     # Social detail page (CaseHero + sections grouped by kind in CaseCards)
│       ├── SocialSection.tsx      # Social section on home page (paginated ProjectCards)
│       └── SocialSectionNav.tsx   # Sticky pill nav with active-kind tracking
├── lib/
│   ├── cn.ts                      # Class merge helper
│   ├── constants.ts               # NAV_ITEMS + PAGE_PADDING_X (unified page padding)
│   ├── pagination.ts              # usePaginatedList hook
│   └── theme.ts                   # Theme helpers (currentTheme, applyTheme, view-transition gates)
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

Edit [`src/data/branding.ts`](src/data/branding.ts) to add, remove, or update branding pieces. Each piece has `slug`, `title`, `year`, `palette`, `thumbnail`, `description`, and `gallery` built via `buildBrandingGallery({ slug, label, items })`.

> [!TIP]
> Place branding images in `public/assets/branding/<slug>/` where the cover is `<slug>.webp` and gallery items are `item-1.webp` through `item-N.webp`.

### Social

Edit [`src/data/social.ts`](src/data/social.ts). Assets live in `public/assets/social/<project>/{banner,carousel,mockup,post,reel}/` and follow the naming pattern `<kind>-<n>.webp` (or `.webm` for reels). Declare counts via `buildSocialGallery({ base, label, banners, carousels, mockups, posts, reels })`; sections render in editorial order (banners → carruseles → mockups → posts → reels).

### Content & copy

- **Hero / About / Contact text** — edit [`src/data/site.ts`](src/data/site.ts) (`HERO`, `ABOUT`, `CONTACT`)
- **Social links** — edit [`src/data/site.ts`](src/data/site.ts) (`SOCIAL_LINKS`, rendered as pills in the `Footer`)
- **Softwares** — edit [`src/data/site.ts`](src/data/site.ts) (`SOFTWARES`; each entry pairs a label with an icon from `SoftwareIcons.tsx`)
- **Contact form** — [`src/components/contact/ContactForm.tsx`](src/components/contact/ContactForm.tsx) submits via `mailto:` to `CONTACT.email`; no backend needed
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

Light theme overrides are under the `.light` class in the same file. Theme switching plays a 0.5s View Transitions crossfade with per-element transitions suppressed during the flip (instant fallback without support or with reduced motion). All headings use `font-display font-bold` (local Intel One Display); micro-labels use `font-mono` (Geist Mono); the footer wordmark uses `font-ventura` (local Ventura).

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

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a military-themed portfolio website for Ben LeBron, a military graphic artist. Built with React, TypeScript, Vite, and shadcn/ui components with Tailwind CSS. The design features tactical/military aesthetics with 508 accessibility compliance.

## Build & Development Commands

```bash
# Development server (runs on port 8080)
npm run dev

# Production build
npm run build

# Development build (with source maps)
npm run build:dev

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Architecture

### Routing Structure
- Single-page application with React Router
- Main entry: `src/main.tsx` → `src/App.tsx`
- Routes defined in `src/App.tsx`:
  - `/` - Index page (Hero section only)
  - `/home` - Home page
  - `/about` - About page
  - `/portfolio` - Full portfolio page
  - `/skills` - Skills page
  - `/contact` - Contact page
  - `*` - 404 page
- **Important**: New routes must be added ABOVE the catch-all `*` route in `src/App.tsx:30`

### Component Structure
- **Pages** (`src/pages/`): Top-level page components that compose sections
- **Components** (`src/components/`): Reusable section components
  - `HeroSection.tsx` - Landing hero with video background and rotating titles
  - `PortfolioSection.tsx` - Portfolio grid with category filtering and modal carousel
  - `PortfolioCarousel.tsx` - Full-screen carousel for portfolio items
  - `Modal.tsx` - Reusable modal wrapper
  - `Header.tsx`, `Footer.tsx` - Site chrome
- **UI Components** (`src/components/ui/`): shadcn/ui components (do not modify directly)

### Data Management
- Portfolio content stored in `src/data/portfolioData.ts`
- Structure: Categories contain slides (images/videos)
- Each slide has: `id`, `type`, `src`, `title`, `description`, `software`, `thumbnail`
- Categories: UI Design, Military Insignia, 3D Modeling, Print Design, Web Design, AI & Digital Art

### Styling System
- Tailwind CSS with custom military-themed color palette
- CSS variables defined in `src/index.css` for theming
- Custom tactical colors: `tactical-dark`, `tactical-green`, `tactical-olive`, `tactical-sand`, `tactical-steel`, `tactical-orange`
- Custom fonts: Orbitron (headings), Rajdhani (body)
- Special classes:
  - `.tactical-btn` - Military-styled button with gradient and shine effect
  - `.military-grid` - Background grid overlay pattern
  - `.glitch` - Glitch animation effect (respects `prefers-reduced-motion`)
- 508 Compliance features:
  - High contrast focus indicators
  - ARIA labels and roles throughout
  - Reduced motion support
  - Skip to content links

### Path Aliases
- `@/` maps to `src/` directory
- Configured in `vite.config.ts` and `tsconfig.json`

### State Management
- React Query for async state (`@tanstack/react-query`)
- Local component state with `useState`
- No global state management library

## Key Patterns

### Portfolio Item Click Handling
The portfolio section uses a category-based system:
1. Portfolio grid shows one card per category
2. Clicking opens a modal with a carousel of all items in that category
3. Modal state managed in `PortfolioSection.tsx:11-12`
4. Click handler at `PortfolioSection.tsx:43-68`

### Video/Media Handling
- Hero section includes video background at `/videos/ship_vid.mp4`
- Portfolio supports multiple media types: `image`, `video`, `youtube`, `vimeo`
- React Player used for video playback (`react-player`)

### Modal System
- Reusable `Modal.tsx` component wraps content
- Portal-based rendering for proper z-index
- Close on backdrop click and escape key

## Important Notes

- This is a static portfolio site - no backend or database
- Public assets in `/public/` directory, organized by category under `/public/images/portfolio/`
- The dev server runs on port 8080 (not the default 5173)
- Uses SWC for fast React compilation
- The `lovable-tagger` plugin is only active in development mode

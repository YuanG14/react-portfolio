# Premium React Portfolio

A cinematic, dark-themed portfolio built in phases.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, config lives in `src/index.css` `@theme`)
- Framer Motion (animation)
- Lenis (smooth/inertia scrolling)
- React Router
- React Hook Form + Zod (contact form validation, added when the Contact section is built)
- Sonner (toasts)

## Getting started

```bash
npm install
npm run dev
```

## Design tokens

Colors, fonts, and blob keyframes are defined once in `src/index.css` under `@theme`.
Change a value there and it updates everywhere (`bg-bg`, `text-purple`, `font-display`, etc.).

- Background `#09090B`, glass surfaces at low-opacity white
- Accents: purple `#8B5CF6`, blue `#3B82F6`, cyan `#22D3EE`
- Display face: Clash Display · Body: Switzer · Mono/labels: JetBrains Mono

## Folder structure

```
src/
  components/
    effects/   -> GridBackground, GradientBlobs (ambient background system)
    ui/        -> Button, Container (generic reusable primitives)
    layout/    -> Reveal (scroll-entrance wrapper), future Navbar/Footer
  sections/    -> Hero, About, Skills, Projects, Timeline, Contact (added phase by phase)
  hooks/       -> useLenis, future custom hooks
  lib/         -> cn.js (class name utility)
```

## Build phases

- [x] **Phase 0 — Foundation**: Tailwind v4 theme, folder structure, ambient
      background system (cursor-reactive grid + animated gradient blobs),
      smooth scroll, base UI primitives (Button, Container, Reveal), routing
      and toast provider wired up.
- [ ] Phase 1 — Navbar + Hero
- [ ] Phase 2 — About Me
- [ ] Phase 3 — Skills
- [ ] Phase 4 — Tech Stack
- [ ] Phase 5 — Projects
- [ ] Phase 6 — Experience / Education Timeline
- [ ] Phase 7 — Contact
- [ ] Phase 8 — Footer + final polish pass

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
    layout/    -> Navbar, Footer, Section, Reveal (structural + entrance-animation primitives)
  layouts/     -> MainLayout (Navbar + routed content + Footer, mounted once)
  pages/       -> Home (placeholder anchors), NotFound (route composition)
  sections/    -> Hero, About, Skills, Projects, Timeline, Contact (added phase by phase)
  data/        -> navLinks.js, socialLinks.js (content lists, not layout)
  constants/   -> site.js (SITE_NAME, NAVBAR_HEIGHT, etc.)
  animations/  -> variants.js (shared Framer Motion variants)
  hooks/       -> useLenis, future custom hooks
  lib/         -> cn.js (class name utility)
```

## Build phases

- [x] **Phase 0 — Foundation (visual system)**: Tailwind v4 theme, folder
      structure, ambient background system (cursor-reactive grid + animated
      gradient blobs), smooth scroll, base UI primitives (Button, Container,
      Reveal), routing and toast provider wired up.
- [x] **Phase 1 — Foundation (structure/navigation)**: full folder set
      (`pages`, `data`, `layouts`, `animations`, etc.), responsive Navbar
      (Home/About/Projects/Contact, glass-on-scroll, mobile menu), Footer
      (nav links, socials, back-to-top), `MainLayout` composing them with
      React Router, anchor-aware smooth scrolling, typography scale and
      section spacing system, reusable `Section` wrapper. No Hero/About/
      Projects/Contact content yet — `Home.jsx` only holds placeholder
      anchor targets.
- [x] **Phase 2 — Hero**: full-viewport intro with animated entrance
      (staggered `Reveal`s), rotating job-title typing effect
      (`useTypewriter` + `TypingText`), a cursor-following glow scoped to
      the Hero (`components/hero/MouseGlow.jsx`), a floating glassmorphism
      profile card with two independently-floating badge chips
      (`components/hero/ProfileCard.jsx`), and a bouncing scroll cue. All
      looping animation respects `prefers-reduced-motion`. Only the Hero
      was built — About/Projects/Contact remain placeholders.
- [ ] Phase 3 — About Me
- [ ] Phase 4 — Skills
- [ ] Phase 5 — Tech Stack
- [ ] Phase 6 — Projects
- [ ] Phase 7 — Experience / Education Timeline
- [ ] Phase 8 — Contact
- [ ] Phase 9 — Final polish pass

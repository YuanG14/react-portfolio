import { TECH_STACK } from './techStack'

/**
 * Content for About's BrandingCard (src/components/about/BrandingCard.jsx).
 * Kept out of the component so copy can be swapped without touching
 * layout/animation code, same convention as data/hero.js.
 */

/** Role tags shown under the name. Deliberately distinct copy from
 * HERO_ROLES (data/hero.js) — that array drives Hero's typing effect,
 * this one is a static hierarchy for the identity card. */
export const BRANDING_ROLES = ['CS Student', 'Full-Stack Developer', 'Modern Web Applications']

export const BRANDING_AVAILABILITY = 'Open to Internships'

export const BRANDING_STATEMENT =
  'Learning by building — full-stack projects with clean code and thoughtful design.'

export const CURRENTLY_BUILDING = ['SkillMatch', 'SmartPark', 'Portfolio Website']

/** Subset of the main Tech Stack section's data — same icon/color per
 * technology, so this card never drifts out of sync with that section. */
const BRANDING_TECH_NAMES = ['React', 'Node.js', 'Tailwind CSS', 'TypeScript', 'Supabase']

export const BRANDING_TECH = BRANDING_TECH_NAMES.map((name) =>
  TECH_STACK.find((tech) => tech.name === name)
).filter(Boolean)

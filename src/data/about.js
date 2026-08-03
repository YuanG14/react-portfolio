import { FiCode, FiLayout, FiZap, FiUsers, FiCalendar, FiFolder, FiCoffee } from 'react-icons/fi'
import { PROJECTS } from './projects'

/**
 * About section copy. Placeholder bio/numbers — swap for real content
 * whenever it's finalized, same pattern as src/data/hero.js.
 */
export const ABOUT_PARAGRAPHS = [
  "I'm a Computer Science student who enjoys turning ambiguous ideas into interfaces that feel obvious in hindsight. Most of what I know comes from building real, full-stack projects outside of coursework — not just following tutorials.",
  'I care about the details most people skip past: motion that feels intentional, spacing that breathes, code that reads like it was written for the next person. Whether the project is a class assignment, a team build, or a personal experiment, I bring the same level of attention to it.',
]

/**
 * Short trait/skill highlights shown as an icon list next to the bio.
 */
export const ABOUT_HIGHLIGHTS = [
  {
    icon: FiCode,
    title: 'Full-Stack Development',
    description: 'Comfortable across the stack, from data models to pixel-level UI.',
  },
  {
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'Design systems and interfaces built with intent, not defaults.',
  },
  {
    icon: FiZap,
    title: 'Fast Learner',
    description: 'Picks up new stacks and tools quickly, then builds with them right away.',
  },
  {
    icon: FiUsers,
    title: 'Collaborative',
    description: 'Works well with teammates across design, code, and review.',
  },
]

/**
 * Headline stats shown in the row beneath the bio/visual columns.
 * `Projects Built` counts PROJECTS directly so this never overstates
 * what's actually shown on the site.
 */
export const ABOUT_STATS = [
  { icon: FiCalendar, value: '3+', label: 'Years Coding' },
  { icon: FiFolder, value: `${PROJECTS.length}`, label: 'Projects Built' },
  { icon: FiCode, value: '10+', label: 'Technologies' },
  { icon: FiCoffee, value: '∞', label: 'Cups of Coffee' },
]


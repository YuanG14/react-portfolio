import { FiCode, FiLayout, FiZap, FiUsers, FiBriefcase, FiFolder, FiCoffee } from 'react-icons/fi'

/**
 * About section copy. Placeholder bio/numbers — swap for real content
 * whenever it's finalized, same pattern as src/data/hero.js.
 */
export const ABOUT_PARAGRAPHS = [
  "I'm a full-stack developer and UI/UX designer who enjoys turning ambiguous ideas into interfaces that feel obvious in hindsight. My focus sits at the intersection of clean engineering and considered design — not just work, but craft.",
  'I care about the details most people skip past: motion that feels intentional, spacing that breathes, code that reads like it was written for the next person. Whether the project is a product, a prototype, or a personal experiment, I bring the same level of attention to it.',
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
    title: 'Performance-Minded',
    description: 'Fast, accessible experiences that hold up under real use.',
  },
  {
    icon: FiUsers,
    title: 'Collaborative',
    description: 'Works well across design, product, and engineering.',
  },
]

/**
 * Headline stats shown in the row beneath the bio/visual columns.
 */
export const ABOUT_STATS = [
  { icon: FiBriefcase, value: '3+', label: 'Years Experience' },
  { icon: FiFolder, value: '20+', label: 'Projects Completed' },
  { icon: FiCode, value: '10+', label: 'Technologies' },
  { icon: FiCoffee, value: '∞', label: 'Cups of Coffee' },
]

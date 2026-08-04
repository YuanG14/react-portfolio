import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiReactrouter,
} from 'react-icons/si'
import { FiCpu, FiWifi } from 'react-icons/fi'

/**
 * Name -> { icon, color } lookup for TechBadge. Intentionally
 * separate from src/data/skills.js (Projects-only, per the R5 scope
 * rule) even though a couple of entries overlap — Skills stays
 * untouched.
 *
 * Anything not in this map (e.g. project-specific terms that aren't
 * a real brand) falls back to DEFAULT_TECH_ICON in TechBadge rather
 * than failing, so new tech names in data/projects.js never need a
 * matching code change here.
 */
export const TECH_ICON_MAP = {
  React: { icon: SiReact, color: '#61DAFB' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8' },
  Vite: { icon: SiVite, color: '#646CFF' },
  Supabase: { icon: SiSupabase, color: '#3ECF8E' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  'Node.js': { icon: SiNodedotjs, color: '#3C873A' },
  Express: { icon: SiExpress, color: 'var(--color-ink)' },
  'React Router': { icon: SiReactrouter, color: '#CA4245' },
  'IoT Sensors': { icon: FiWifi, color: '#38BDF8' },
  IoT: { icon: FiWifi, color: '#38BDF8' },
  'Embedded Systems': { icon: FiCpu, color: '#93C5FD' },
}

export const DEFAULT_TECH_ICON = FiCpu

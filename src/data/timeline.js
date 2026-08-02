import { FiCode, FiServer, FiCpu, FiTrendingUp } from 'react-icons/fi'

/**
 * Experience / Education timeline content (src/sections/Experience.jsx).
 * Placeholder milestones — swap for real history when it's finalized,
 * same convention as data/about.js and data/hero.js.
 *
 * `color` picks which accent (purple/cyan/blue) the node glow and
 * category dot use — kept to the three tokens already defined in
 * index.css so new sections never introduce off-palette colors.
 */
export const TIMELINE_ITEMS = [
  {
    year: '2023',
    title: 'Started Programming',
    subtitle: 'The first line of code',
    description:
      'Picked up the fundamentals — syntax, logic, and the habit of building small things just to see them work.',
    icon: FiCode,
    category: 'Milestone',
    color: 'purple',
  },
  {
    year: '2024',
    title: 'Built First Full-Stack Project',
    subtitle: 'From frontend to database',
    description:
      'Connected a real UI to a real backend and database for the first time, and started thinking in systems instead of pages.',
    icon: FiServer,
    category: 'Project',
    color: 'cyan',
  },
  {
    year: '2025',
    title: 'Learned React & Modern Frontend',
    subtitle: 'Component-driven development',
    description:
      'Went deep on React, state management, and animation — and started caring as much about how an interface feels as how it works.',
    icon: FiCpu,
    category: 'Skill',
    color: 'blue',
  },
  {
    year: '2026',
    title: 'Built SkillMatch & Advanced Full-Stack Apps',
    subtitle: 'Production-grade applications',
    description:
      'Shipped SkillMatch and other advanced full-stack applications, applying everything learned to real, polished products.',
    icon: FiTrendingUp,
    category: 'Project',
    color: 'purple',
  },
]

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { DiVisualstudio } from 'react-icons/di'

/**
 * Tech Stack card content. `icon` is the brand-mark component to
 * render, `color` tints it on the card face. Simple Icons doesn't
 * publish a "VS Code" mark, so DiVisualstudio (Devicons) stands in as
 * the closest available brand logo.
 */
export const TECH_STACK = [
  {
    name: 'React',
    icon: SiReact,
    color: '#61DAFB',
    description: 'Building fast, component-driven UIs.',
    level: 'Advanced',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
    description: 'Core language behind everything I ship.',
    level: 'Advanced',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178C6',
    description: 'Typed code for fewer surprises at scale.',
    level: 'Intermediate',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#38BDF8',
    description: 'Utility-first styling, fast iteration.',
    level: 'Advanced',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#3C873A',
    description: 'Server-side JavaScript runtime.',
    level: 'Intermediate',
  },
  {
    name: 'Express',
    icon: SiExpress,
    color: 'var(--color-ink)',
    description: 'Minimal, flexible APIs on Node.',
    level: 'Intermediate',
  },
  {
    name: 'Supabase',
    icon: SiSupabase,
    color: '#3ECF8E',
    description: 'Postgres backend without the boilerplate.',
    level: 'Intermediate',
  },
  {
    name: 'Git',
    icon: SiGit,
    color: '#F05032',
    description: 'Version control, every project, every day.',
    level: 'Advanced',
  },
  {
    name: 'GitHub',
    icon: SiGithub,
    color: 'var(--color-ink)',
    description: 'Hosting, review, and CI for my repos.',
    level: 'Advanced',
  },
  {
    name: 'VS Code',
    icon: DiVisualstudio,
    color: '#007ACC',
    description: 'My daily editor, tuned to taste.',
    level: 'Advanced',
  },
]

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiGithub,
  SiFigma,
  SiDocker,
  SiVite,
} from 'react-icons/si'
import { DiVisualstudio } from 'react-icons/di'
import { TbApi } from 'react-icons/tb'
import { FiCode, FiServer, FiTool, FiLayers, FiFolder, FiClock, FiHeart } from 'react-icons/fi'

/**
 * Short line under the Skills heading, giving the category grid some
 * context before the reader hits the technology cards.
 */
export const SKILLS_INTRO =
  'I build scalable, responsive, and user-focused applications using modern frontend, backend, and cloud technologies.'

/**
 * Skill category content. Each technology now carries its own logo,
 * a one-line description, and a proficiency percentage — the data
 * TechnologyCard needs to render a compact "premium" card instead of
 * a plain text pill.
 */
export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: FiCode,
    description: 'Building responsive and interactive user interfaces with modern technologies.',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB', description: 'Component-driven UI library.', proficiency: 90 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', description: 'Core language for the web.', proficiency: 92 },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', description: 'Typed JavaScript at scale.', proficiency: 80 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', description: 'Utility-first styling.', proficiency: 88 },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', description: 'Semantic, accessible markup.', proficiency: 95 },
      { name: 'CSS3', icon: SiCss, color: '#1572B6', description: 'Layout, animation, and theming.', proficiency: 90 },
      { name: 'Framer Motion', icon: SiFramer, color: '#8b5cf6', description: 'Production-grade animation.', proficiency: 78 },
    ],
  },
  {
    title: 'Backend',
    icon: FiServer,
    description: 'Designing reliable APIs and data layers that scale with the product.',
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#3C873A', description: 'Server-side JavaScript runtime.', proficiency: 82 },
      { name: 'Express', icon: SiExpress, color: 'var(--color-ink)', description: 'Minimal, flexible API framework.', proficiency: 78 },
      { name: 'REST APIs', icon: TbApi, color: '#22D3EE', description: 'Designing clean, predictable endpoints.', proficiency: 85 },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', description: 'Relational data modeling.', proficiency: 75 },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', description: 'Flexible document storage.', proficiency: 72 },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', description: 'Postgres backend without the boilerplate.', proficiency: 80 },
    ],
  },
  {
    title: 'Tools',
    icon: FiTool,
    description: 'The everyday toolkit that keeps development fast and organized.',
    technologies: [
      { name: 'Git', icon: SiGit, color: '#F05032', description: 'Version control, every project.', proficiency: 88 },
      { name: 'GitHub', icon: SiGithub, color: 'var(--color-ink)', description: 'Hosting, review, and CI.', proficiency: 85 },
      { name: 'VS Code', icon: DiVisualstudio, color: '#007ACC', description: 'Daily editor, tuned to taste.', proficiency: 92 },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E', description: 'UI design and prototyping.', proficiency: 70 },
      { name: 'Docker', icon: SiDocker, color: '#2496ED', description: 'Consistent, containerized environments.', proficiency: 65 },
      { name: 'Vite', icon: SiVite, color: '#646CFF', description: 'Fast dev server and bundler.', proficiency: 80 },
    ],
  },
]

/**
 * Stat row shown beneath the skill categories. Numbers are kept
 * consistent with ABOUT_STATS (src/data/about.js) rather than
 * re-inventing separate figures for the same facts.
 */
export const SKILL_STATS = [
  { icon: FiLayers, value: 19, suffix: '+', label: 'Technologies' },
  { icon: FiFolder, value: 20, suffix: '+', label: 'Projects Built' },
  { icon: FiClock, value: 3, suffix: '+', label: 'Years Learning' },
  { icon: FiHeart, value: 100, suffix: '%', label: 'Passion' },
]

/**
 * Topics shown in the "Always Learning" card.
 */
export const LEARNING_TOPICS = ['AI Applications', 'Cloud Deployment', 'System Design']

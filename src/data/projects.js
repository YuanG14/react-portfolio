/**
 * Project showcase content. `image: null` falls back to the gradient
 * placeholder in ProjectImage — drop in a real screenshot path
 * whenever one's ready. `links.github`/`links.demo` are placeholder
 * '#' hrefs; swap in real URLs when available.
 */
import skillmatchLogo from '../assets/skillmatch-logo.png'

export const PROJECTS = [
  {
    id: 'skillmatch',
    title: 'SkillMatch',
    description:
      'A full-stack platform matching students to internships based on skills, education, experience, and career goals — built across role-based Student/Company/Admin dashboards.',
    image: skillmatchLogo,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    highlights: [
      'Role-based dashboards for students, companies, and admins',
      'Signature MatchRing visual for surfacing fit at a glance',
      'Built collaboratively across a 3-developer team',
    ],
    links: { github: '#', demo: '#' },
    details: {
      overview:
        'SkillMatch connects students with internships based on more than a resume — skills, education, preferences, and career goals all feed into the match, with dedicated dashboards for students, companies, and admins.',
      problem:
        "Students and companies had no structured way to match candidates to internships beyond a resume — skills, preferences, and career goals were left out of the equation entirely.",
      solution:
        'A role-based platform with distinct Student, Company, and Admin dashboards, a shared design system, and a match-scoring visual (MatchRing) that surfaces fit at a glance instead of burying it in text.',
      features: [
        'Role-based dashboards for students, companies, and admins',
        'Student profile with education, preferences, and completion tracking',
        'Company profile with an admin-gated verification workflow',
        'Public marketing pages explaining the matching flow',
        'Consistent design system: shared UI primitives, accessible focus states, loading skeletons',
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Supabase', 'PostgreSQL'],
      challenges:
        'Keeping three developers working across overlapping dashboards visually and behaviorally consistent — mismatched loading states, duplicated badge-color logic, and inconsistent focus styles crept in and needed a dedicated consistency pass to fix.',
      futureImprovements: [
        'Admin UI to act on pending company verification requests',
        'A mobile navigation drawer (sidebar currently hides below the md breakpoint)',
        'Formatting cleanup on a handful of legacy files',
      ],
    },
  },
  {
    id: 'datalens',
    title: 'DataLens',
    description:
      'A schema-aware analytics platform that turns an uploaded CSV — of almost any shape — into a working dashboard of charts, trends, and AI-generated insights.',
    image: null,
    tech: ['React', 'TypeScript', 'Vite', 'Supabase'],
    highlights: [
      'Started as a mental-health analytics tool, generalized to any CSV schema',
      'Dynamic analytics engine with correlation and trend detection',
      'AI-powered insight generation over the parsed data',
    ],
    links: { github: '#', demo: '#' },
    details: {
      overview:
        'DataLens ingests a CSV of almost any shape and turns it into a working analytics dashboard, with no fixed schema assumed ahead of time.',
      problem:
        'The original version only understood one specific dataset shape (mental-health survey data), so it broke the moment a differently structured CSV was uploaded.',
      solution:
        "Rebuilt the analytics engine to read a dataset's schema at upload time and generate charts, correlations, and summaries dynamically instead of against hardcoded fields.",
      features: [
        'Dynamic analytics engine that adapts to any uploaded CSV schema',
        'AI-powered insight generation over the parsed data',
        'Correlation, trend, and statistical summary views',
        'Filtering and anomaly detection',
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Supabase'],
      challenges:
        'Generalizing a dashboard originally built around one fixed dataset into something schema-agnostic, without losing the depth of analysis that made the original version useful.',
      futureImprovements: [
        'Expanding anomaly detection coverage',
        'Deeper AI-generated narrative summaries',
        'Saved, shareable dashboard views',
      ],
    },
  },
  {
    id: 'libalert',
    title: 'LibAlert',
    description:
      'An IoT-based library noise monitoring system, built as an undergraduate thesis project to help keep quiet study spaces actually quiet.',
    image: null,
    tech: ['IoT', 'Embedded Systems'],
    highlights: [
      'Real-time noise monitoring across library zones',
      'Threshold-based alerting for excessive noise',
      'Delivered as a full undergraduate thesis project',
    ],
    links: { github: '#', demo: '#' },
    details: {
      overview:
        'LibAlert is an IoT-based system that monitors real-time noise levels in library spaces to help maintain a quiet study environment.',
      problem:
        "Libraries struggle to enforce quiet zones consistently, since noise violations often go unnoticed until they've already disrupted other patrons.",
      solution:
        'A network of noise-sensing IoT devices detects and flags excessive noise in library zones, enabling faster intervention before it becomes disruptive.',
      features: [
        'Real-time noise level monitoring across library zones',
        'Threshold-based alerting for excessive noise',
        'Built and defended as an undergraduate thesis project',
      ],
      technologies: ['IoT Sensors', 'Embedded Systems'],
      challenges:
        'Translating raw sensor readings into reliable, actionable noise alerts without excessive false positives.',
      futureImprovements: [
        'Expanding sensor coverage to additional zones',
        'A live dashboard view for library staff',
      ],
    },
  },
]

/**
 * Project showcase content. `image: null` falls back to the gradient
 * placeholder in ProjectImage — drop in a real screenshot path
 * whenever one's ready. `links.github`/`links.demo` are placeholder
 * '#' hrefs; ProjectActions renders them disabled until real URLs
 * are added.
 *
 * `featured: true` on exactly one project promotes it to
 * <FeaturedProject> at the top of the section (see
 * sections/Projects.jsx) — SkillMatch, as the largest, team-built,
 * multi-dashboard product.
 */
import skillmatchLogo from '../assets/skillmatch-logo.png'
import datalensLogo from '../assets/datalens-logo.png'
import libalertLogo from '../assets/libalert-logo.png'

export const PROJECTS = [
  {
    id: 'skillmatch',
    featured: true,
    title: 'SkillMatch',
    tagline: 'Matching students to internships on more than a resume — skills, goals, and fit, at a glance.',
    description:
      'A full-stack platform matching students to internships based on skills, education, experience, and career goals — built across role-based Student/Company/Admin dashboards.',
    image: skillmatchLogo,
    category: 'Full-Stack Platform',
    status: 'Completed',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    keyHighlight: 'Signature MatchRing visual surfaces fit at a glance instead of burying it in text.',
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
      architecture:
        'A single Vite/React app with route-guarded Student, Company, and Admin dashboards sharing one component library and Supabase (Postgres + Auth) backend — role permissions enforced both in the UI and at the database level via row-level security.',
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
      lessonsLearned: [
        'A shared component library needs to exist before multiple people start building screens, not after',
        'Row-level security is easier to reason about than UI-only role checks, and worth setting up early',
        'Agreeing on badge/status color conventions up front avoids a late-stage consistency pass',
      ],
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
    tagline: 'Upload a CSV of almost any shape, get a working analytics dashboard back.',
    description:
      'A schema-aware analytics platform that turns an uploaded CSV — of almost any shape — into a working dashboard of charts, trends, and AI-generated insights.',
    image: datalensLogo,
    category: 'Data Analytics Platform',
    status: 'Completed',
    tech: ['React', 'TypeScript', 'Vite', 'Supabase'],
    keyHighlight: 'Reads a dataset\u2019s schema at upload time instead of assuming a fixed shape.',
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
      architecture:
        'A parsing layer infers column types on upload and builds a schema descriptor; that descriptor drives which chart, correlation, and summary components render, so the dashboard is generated from data shape rather than hardcoded per dataset.',
      features: [
        'Dynamic analytics engine that adapts to any uploaded CSV schema',
        'AI-powered insight generation over the parsed data',
        'Correlation, trend, and statistical summary views',
        'Filtering and anomaly detection',
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Supabase'],
      challenges:
        'Generalizing a dashboard originally built around one fixed dataset into something schema-agnostic, without losing the depth of analysis that made the original version useful.',
      lessonsLearned: [
        'Designing for an unknown schema from day one is far easier than retrofitting it onto fixed-field code',
        'Type inference on upload needs sane fallbacks — real-world CSVs are messier than test data',
      ],
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
    tagline: 'Keeping quiet study spaces quiet with real-time, zone-by-zone noise monitoring.',
    description:
      'An IoT-based library noise monitoring system, built as an undergraduate thesis project to help keep quiet study spaces actually quiet.',
    image: libalertLogo,
    category: 'IoT / Embedded Systems',
    status: 'Completed',
    tech: ['IoT', 'Embedded Systems'],
    keyHighlight: 'Flags excessive noise by zone before it disrupts other patrons, not after.',
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
      architecture:
        'Zone-based noise sensors sample sound level on an interval and report to a central threshold-alerting service, which flags any zone that crosses its configured limit for staff follow-up.',
      features: [
        'Real-time noise level monitoring across library zones',
        'Threshold-based alerting for excessive noise',
        'Built and defended as an undergraduate thesis project',
      ],
      technologies: ['IoT Sensors', 'Embedded Systems'],
      challenges:
        'Translating raw sensor readings into reliable, actionable noise alerts without excessive false positives.',
      lessonsLearned: [
        'Sensor calibration and threshold-tuning took far longer than the alerting logic itself',
        'Hardware reliability constraints shape the software architecture as much as the requirements do',
      ],
      futureImprovements: [
        'Expanding sensor coverage to additional zones',
        'A live dashboard view for library staff',
      ],
    },
  },
]

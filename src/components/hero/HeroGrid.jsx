/**
 * A faint, static blueprint dot-grid confined to the Hero section —
 * distinct from the sitewide cursor-reactive GridBackground in
 * components/effects/GridBackground.jsx (that one is a fixed,
 * always-mounted layer shared by every section; this one exists only
 * while Hero is mounted, so the opening screen reads as a quiet
 * "technical schematic" without touching the shared layer other
 * sections rely on).
 *
 * Pure SVG, no animation loop — masked so it fades out toward the
 * text column and stays quietly present under the ProfileCard,
 * reinforcing the brief's "engineering-inspired" note without
 * competing with content.
 */
export default function HeroGrid() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    >
      <defs>
        <pattern id="hero-blueprint-dots" width="36" height="36" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="var(--color-grid-line)" />
        </pattern>
        <radialGradient id="hero-blueprint-fade" cx="72%" cy="45%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="55%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="hero-blueprint-mask">
          <rect width="100%" height="100%" fill="url(#hero-blueprint-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-blueprint-dots)" mask="url(#hero-blueprint-mask)" />
    </svg>
  )
}

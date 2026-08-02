/**
 * A faint, static film-grain texture laid over the whole page — adds
 * tactile depth to the flat dark background. Pure SVG + CSS opacity,
 * no animation loop and no per-frame JS, so it costs effectively
 * nothing at runtime.
 *
 * Sits above the background layers (GradientBlobs, GridBackground —
 * both z-0) but below routed content (z-10); see MainLayout.jsx.
 */
export default function NoiseOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full opacity-[0.05] mix-blend-overlay"
    >
      <filter id="noise-overlay-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-overlay-filter)" />
    </svg>
  )
}

import { motion } from 'framer-motion'
import { usePointerTilt } from '../../hooks/usePointerTilt'
import { hoverFeature } from '../../animations/variants'
import { cn } from '../../lib/cn'

/**
 * Generic premium-hover wrapper: tilts toward the cursor, lifts with
 * a growing floating shadow, and shows a soft glow that tracks the
 * pointer. Not project-specific — reach for this any time a card
 * needs this treatment (showcase cards now, other feature tiles
 * later). Falls back to a static wrapper under prefers-reduced-motion.
 *
 * Tilt/glow physics live in usePointerTilt (shared with any other
 * card that wants this same treatment); this component only owns the
 * lift/shadow/glow-layer presentation on top of it, using the
 * hoverFeature interaction tier and --shadow-featured token so it
 * stays in sync with the rest of the site's elevation system instead
 * of hard-coding its own numbers.
 *
 * Two-layer structure on purpose: the outer layer stays overflow-
 * visible so the blurred glow can bleed past the edges, while
 * `contentClassName` goes on an inner overflow-hidden layer that
 * actually clips the rounded corners (e.g. for an edge-to-edge image).
 */
export default function TiltCard({ children, className, contentClassName }) {
  const { ref, shouldReduceMotion, handlePointerMove, handlePointerLeave, style } = usePointerTilt(8)

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...hoverFeature}
      style={{ ...style, transformPerspective: 1000 }}
      className={cn(
        'group relative rounded-3xl shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-featured)]',
        className
      )}
    >
      {!shouldReduceMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-6 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(37,99,235,0.4), transparent 65%)',
          }}
        />
      )}

      <div className={cn('relative h-full overflow-hidden rounded-3xl', contentClassName)}>
        {children}
      </div>
    </motion.div>
  )
}

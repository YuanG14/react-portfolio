import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'

/**
 * Generic premium-hover wrapper: tilts toward the cursor, lifts with
 * a growing floating shadow, and shows a soft glow that tracks the
 * pointer. Not project-specific — reach for this any time a card
 * needs this treatment (showcase cards now, other feature tiles
 * later). Falls back to a static wrapper under prefers-reduced-motion.
 *
 * Two-layer structure on purpose: the outer layer stays overflow-
 * visible so the blurred glow can bleed past the edges, while
 * `contentClassName` goes on an inner overflow-hidden layer that
 * actually clips the rounded corners (e.g. for an edge-to-edge image).
 */
export default function TiltCard({ children, className, contentClassName }) {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const pointerX = useMotionValue(0.5)
  const pointerY = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-8, 8]), { stiffness: 300, damping: 30 })
  const glowX = useTransform(pointerX, [0, 1], ['0%', '100%'])
  const glowY = useTransform(pointerY, [0, 1], ['0%', '100%'])

  function handlePointerMove(event) {
    if (shouldReduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width)
    pointerY.set((event.clientY - rect.top) / rect.height)
  }

  function handlePointerLeave() {
    pointerX.set(0.5)
    pointerY.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformPerspective: 1000,
        '--glow-x': glowX,
        '--glow-y': glowY,
      }}
      className={cn(
        'group relative rounded-3xl shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)] transition-shadow duration-500 hover:shadow-[0_35px_90px_-20px_rgba(139,92,246,0.35)]',
        className
      )}
    >
      {!shouldReduceMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-6 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(139,92,246,0.4), transparent 65%)',
          }}
        />
      )}

      <div className={cn('relative h-full overflow-hidden rounded-3xl', contentClassName)}>
        {children}
      </div>
    </motion.div>
  )
}

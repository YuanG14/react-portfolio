import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

/**
 * A soft blurred glow that trails the cursor within the Hero section
 * (distinct from the site-wide grid spotlight in
 * components/effects/GridBackground.jsx — this one is Hero-specific
 * and sits with the gradient blobs to make the opening screen feel
 * alive). Position is driven by a spring so it eases behind the
 * pointer rather than snapping to it.
 *
 * @param {React.RefObject} containerRef - ref to the Hero <section>;
 *   glow position is computed relative to its bounding box.
 */
export default function MouseGlow({ containerRef }) {
  const shouldReduceMotion = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 55, damping: 20, mass: 0.6 })
  const springY = useSpring(mouseY, { stiffness: 55, damping: 20, mass: 0.6 })

  useEffect(() => {
    if (shouldReduceMotion) return
    const node = containerRef?.current
    if (!node) return

    function handlePointerMove(event) {
      const rect = node.getBoundingClientRect()
      mouseX.set(event.clientX - rect.left)
      mouseY.set(event.clientY - rect.top)
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [containerRef, mouseX, mouseY, shouldReduceMotion])

  if (shouldReduceMotion) return null

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute h-[480px] w-[480px] rounded-full blur-[110px]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(circle, rgba(139,92,246,0.35), rgba(59,130,246,0.18) 45%, transparent 75%)',
        }}
      />
    </div>
  )
}

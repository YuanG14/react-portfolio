import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'

/**
 * Wraps any element (typically a Button) with a magnetic pull: as the
 * pointer moves near it, the element eases toward the pointer on a
 * spring, then releases back to rest on pointer-leave. Pure
 * interaction layer — all visual styling belongs to the child.
 *
 * Skips the magnetic pull itself (spring, listeners) on
 * coarse-pointer/touch devices and under prefers-reduced-motion, so
 * it never interferes with tap targets on mobile — but still renders
 * `className` on a plain wrapper div in that case, so layout classes
 * (e.g. grid placement) the caller relies on aren't lost.
 *
 * @param {number} strength - how far the element travels relative to
 *   pointer offset from its center (0-1, higher = stronger pull)
 * @param {string} [className] - applied to the wrapper div (e.g. grid
 *   placement classes the child would otherwise need to carry itself)
 */
export default function Magnetic({ children, strength = 0.35, className }) {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const [hasFinePointer] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
  )

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 })

  if (shouldReduceMotion || !hasFinePointer) {
    return className ? <div className={className}>{children}</div> : children
  }

  function handlePointerMove(event) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  function handlePointerLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
      className={cn('inline-block', className)}
    >
      {children}
    </motion.div>
  )
}

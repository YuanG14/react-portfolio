import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Thin bar across the very top of the viewport tracking overall
 * scroll progress (0 -> 1 down the whole page). Independent of
 * Navbar's glass-on-scroll toggle and rendered above it (z-[60] vs
 * Navbar's z-50), so it reads as a persistent top-edge indicator.
 * Smoothed with a spring so fast wheel/trackpad scrolling doesn't
 * make it visually jitter.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.2 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-purple via-blue to-cyan"
    />
  )
}

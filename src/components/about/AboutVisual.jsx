import { motion, useReducedMotion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { HERO_NAME } from '../../data/hero'

const initials = HERO_NAME.split(' ')
  .map((part) => part[0])
  .join('')

/**
 * About section's floating visual. Deliberately distinct from Hero's
 * ProfileCard (different aspect ratio, gradient angle, badge content,
 * and loop timing) so the two sections read as related but not
 * copy-pasted as the user scrolls from one to the other.
 */
export default function AboutVisual() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div className="relative mx-auto w-full max-w-sm">
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="glass relative aspect-square w-full rounded-3xl p-3"
      >
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-cyan/20 via-blue/10 to-purple/25">
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-6xl font-medium text-ink/25">{initials}</span>
          </div>
        </div>

        {/* Floating badge: currently open to work */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="glass absolute -right-6 top-8 flex items-center gap-2 rounded-full px-4 py-2 text-xs text-ink"
        >
          <FiCheckCircle className="text-cyan" aria-hidden="true" />
          Open to opportunities
        </motion.div>

        {/* Floating badge: what drives the work */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="glass absolute -left-6 bottom-10 rounded-2xl px-4 py-3 text-xs"
        >
          <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">Driven by</p>
          <p className="mt-1 text-ink-muted">Design · Detail · Craft</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

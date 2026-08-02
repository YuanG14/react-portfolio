import { motion, useReducedMotion } from 'framer-motion'
import { HERO_NAME } from '../../data/hero'

const initials = HERO_NAME.split(' ')
  .map((part) => part[0])
  .join('')

/**
 * The card floats continuously (a gentle vertical loop) once it has
 * entered, and carries two smaller glass badges that float on their
 * own independent, slightly offset loops — reads as alive without
 * being distracting. All looping motion is skipped when the user has
 * requested reduced motion.
 */
export default function ProfileCard() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-sm"
    >
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="glass relative aspect-[4/5] w-full rounded-3xl p-3"
      >
        {/* Profile image placeholder — swap for a real photo later */}
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple/25 via-blue/10 to-cyan/25">
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-7xl font-medium text-ink/25">
              {initials}
            </span>
          </div>
        </div>

        {/* Floating badge: availability */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="glass absolute -left-6 top-10 flex items-center gap-2 rounded-full px-4 py-2 text-xs text-ink"
        >
          <span className="h-2 w-2 rounded-full bg-cyan" />
          Available for work
        </motion.div>

        {/* Floating badge: focus areas */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
          className="glass absolute -right-4 bottom-12 rounded-2xl px-4 py-3 text-xs"
        >
          <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
            Focus
          </p>
          <p className="mt-1 text-ink-muted">React · Node · UX</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

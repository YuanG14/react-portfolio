import { motion, useReducedMotion } from 'framer-motion'
import { HERO_NAME } from '../../data/hero'
import profilePhoto from '../../assets/profile-photo.jpg'

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
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <img
            src={profilePhoto}
            alt={`Portrait of ${HERO_NAME}`}
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Floating badge: availability. Uses a stronger, more opaque
            backdrop than the generic .glass utility (which is only
            ~3.5% white and relies on the dark page behind it) — these
            two badges sit over the photo itself, so they need to hold
            their own contrast regardless of what's behind them. */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="absolute -left-6 top-10 flex items-center gap-2 rounded-full border border-white/10 bg-bg/80 px-4 py-2 text-xs text-ink shadow-[0_8px_30px_rgba(0,0,0,0.55)] backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-cyan" />
          Available for work
        </motion.div>

        {/* Floating badge: focus areas */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
          className="absolute -right-4 bottom-12 rounded-2xl border border-white/10 bg-bg/80 px-4 py-3 text-xs shadow-[0_8px_30px_rgba(0,0,0,0.55)] backdrop-blur-md"
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

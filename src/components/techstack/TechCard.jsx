import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

/**
 * One Tech Stack card. Two independent motion layers:
 * - outer wrapper loops a slow vertical float forever (duration/delay
 *   passed in per-card so the grid doesn't bob in unison)
 * - inner card handles the interactive whileHover lift/scale and
 *   swaps its content (logo -> name/description/level) on
 *   hover *or* keyboard focus, so the reveal isn't mouse-only.
 */
export default function TechCard({
  name,
  icon: Icon,
  color,
  description,
  level,
  floatDuration = 5,
  floatDelay = 0,
}) {
  const [isActive, setIsActive] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}
    >
      <motion.div
        tabIndex={0}
        onHoverStart={() => setIsActive(true)}
        onHoverEnd={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        whileHover={{ y: -6, scale: 1.04 }}
        whileFocus={{ y: -6, scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        className="glass relative flex aspect-square cursor-default flex-col items-center justify-center overflow-hidden rounded-2xl outline-none focus-visible:border-border-strong"
      >
        <Icon
          aria-hidden="true"
          className="text-4xl transition-opacity duration-300 sm:text-5xl"
          style={{ color, opacity: isActive ? 0.12 : 1 }}
        />

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-4 text-center"
            >
              <p className="font-display text-sm font-medium text-ink">{name}</p>
              <p className="text-xs text-ink-muted">{description}</p>
              <span className="mt-1 rounded-full border border-border-strong px-2 py-0.5 text-[10px] uppercase tracking-wider text-cyan">
                {level}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

import { motion, useReducedMotion } from 'framer-motion'

/**
 * A single floating tech pill for BrandingCard's stack row. Icon +
 * color are passed straight through from data/branding.js (itself
 * sourced from the main Tech Stack section's data), so these never
 * fall out of sync with how the same technology looks elsewhere.
 *
 * `delay` staggers both the entrance and each chip's independent
 * float loop so the row doesn't bob in unison.
 */
export default function TechChip({ icon: Icon, name, color, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-ink-muted"
    >
      <motion.span
        animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
        className="inline-flex items-center gap-1.5"
      >
        <Icon style={{ color }} aria-hidden="true" />
        {name}
      </motion.span>
    </motion.span>
  )
}

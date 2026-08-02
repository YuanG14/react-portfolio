import { motion } from 'framer-motion'

/**
 * A single row inside BrandingCard's "Currently Building" panel — a
 * small pulsing dot (echoes StatusBadge's live-status language at a
 * smaller scale) plus the project name, staggered in by `delay`.
 */
export default function CurrentProject({ name, delay = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -6 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-2.5 text-sm text-ink-muted"
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-cyan to-purple" />
      {name}
    </motion.li>
  )
}

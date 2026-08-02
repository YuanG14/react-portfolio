import { motion } from 'framer-motion'

/**
 * Wrap any block of content to give it a consistent "fade up into
 * place" entrance the first time it scrolls into view. Every section
 * should use this instead of writing its own scroll-trigger logic.
 *
 * @param {number} delay - stagger offset in seconds, for sequencing
 *   multiple Reveals within the same section.
 */
export default function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

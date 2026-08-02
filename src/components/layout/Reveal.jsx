import { motion } from 'framer-motion'
import { fadeUp } from '../../animations/variants'

/**
 * Wrap any block of content to give it a consistent entrance the
 * first time it scrolls into view. Every section should use this
 * instead of writing its own scroll-trigger logic.
 *
 * @param {number} delay - stagger offset in seconds, for sequencing
 *   multiple Reveals within the same section.
 * @param {object} variants - override the default fadeUp variant
 *   (e.g. with fadeIn or scaleIn from src/animations/variants.js).
 */
export default function Reveal({ children, delay = 0, variants = fadeUp, className }) {
  // Merge the caller's delay into the variant's own transition instead
  // of replacing it outright, so duration/easing defined in variants.js
  // survive.
  const baseTransition = variants?.visible?.transition ?? {}

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </motion.div>
  )
}

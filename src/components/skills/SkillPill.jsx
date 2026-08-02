import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

/**
 * A single skill tag. Hover/focus gives three cues at once: a glow
 * (box-shadow, Tailwind-driven), a scale bump and a lift (both via
 * Framer Motion's whileHover so they're spring-driven, not CSS eased).
 * Reusable wherever a tag/label list is needed, not just Skills.
 */
export default function SkillPill({ label, className }) {
  return (
    <motion.span
      tabIndex={0}
      whileHover={{ y: -4, scale: 1.06 }}
      whileFocus={{ y: -4, scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className={cn(
        'glass inline-flex cursor-default items-center rounded-full px-4 py-2 text-sm text-ink-muted outline-none transition-[box-shadow,color,border-color] duration-300',
        'hover:text-ink hover:border-border-strong hover:shadow-[0_0_24px_-4px_rgba(139,92,246,0.45)]',
        'focus-visible:text-ink focus-visible:border-border-strong focus-visible:shadow-[0_0_24px_-4px_rgba(34,211,238,0.45)]',
        className
      )}
    >
      {label}
    </motion.span>
  )
}

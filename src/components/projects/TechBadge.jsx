import { motion } from 'framer-motion'
import { TECH_ICON_MAP, DEFAULT_TECH_ICON } from '../../data/techIcons'
import { cn } from '../../lib/cn'

/**
 * A single technology badge: brand icon + label. Used anywhere the
 * Projects section shows a tech stack — cards, the featured project,
 * and the modal's case-study "Technologies" section — instead of the
 * plain-text SkillPill Projects previously borrowed from Skills.
 *
 * Falls back to a generic icon for any name not in TECH_ICON_MAP so
 * new project data never breaks the badge, just renders slightly
 * less specifically.
 */
export default function TechBadge({ label, className }) {
  const entry = TECH_ICON_MAP[label]
  const Icon = entry?.icon ?? DEFAULT_TECH_ICON
  const color = entry?.color ?? 'var(--color-ink-faint)'

  return (
    <motion.span
      tabIndex={0}
      whileHover={{ y: -3, scale: 1.05 }}
      whileFocus={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className={cn(
        'glass inline-flex cursor-default items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-ink-muted outline-none transition-[box-shadow,color,border-color] duration-300',
        'hover:text-ink hover:border-border-strong hover:shadow-[0_0_20px_-4px_rgba(37,99,235,0.45)]',
        'focus-visible:text-ink focus-visible:border-border-strong focus-visible:shadow-[0_0_20px_-4px_rgba(147,197,253,0.45)]',
        className
      )}
    >
      <Icon aria-hidden="true" style={{ color }} />
      {label}
    </motion.span>
  )
}

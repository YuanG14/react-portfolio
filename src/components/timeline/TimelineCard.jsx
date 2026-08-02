import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import CategoryBadge from './CategoryBadge'

/**
 * The glass card rendered inside each TimelineItem. Pure presentation
 * — entrance animation lives on the caller's <Reveal> wrapper (see
 * TimelineItem.jsx), this only owns its own hover lift and glow, same
 * pattern as ProjectCard/TechCard.
 *
 * @param {'left'|'right'} align - on desktop, which way the header
 *   row and text lean: 'right' for cards on the left side of the
 *   timeline (text hugs the center line), 'left' (default) for cards
 *   on the right side. Has no effect below the md breakpoint, where
 *   every card reads left-to-right normally.
 */
export default function TimelineCard({
  year,
  title,
  subtitle,
  description,
  category,
  color,
  align = 'left',
  className,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={cn(
        'glass group relative rounded-3xl p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] transition-[box-shadow,border-color] duration-500 hover:border-border-strong hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.3)] md:p-7',
        align === 'right' && 'md:text-right',
        className
      )}
    >
      <div
        className={cn(
          'flex flex-wrap items-center justify-between gap-3',
          align === 'right' && 'md:flex-row-reverse'
        )}
      >
        <span className="font-mono text-sm text-ink-faint">{year}</span>
        <CategoryBadge label={category} color={color} />
      </div>

      <h3 className="mt-4 font-display text-xl font-medium text-ink md:text-2xl">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{description}</p>
    </motion.div>
  )
}

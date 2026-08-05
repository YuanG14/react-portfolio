import { FiTag } from 'react-icons/fi'
import { cn } from '../../lib/cn'

/**
 * Static (non-interactive) category label — e.g. "Full-Stack
 * Platform", "IoT / Embedded Systems". Pairs with StatusBadge
 * (borrowed from components/about, where it already lives as a
 * generic live-status pill) wherever a project needs both category
 * and status shown together.
 */
export default function CategoryTag({ label, className }) {
  return (
    <span
      className={cn(
        'glass inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs text-ink-muted',
        className
      )}
    >
      <FiTag aria-hidden="true" />
      {label}
    </span>
  )
}

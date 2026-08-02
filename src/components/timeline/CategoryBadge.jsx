import { cn } from '../../lib/cn'

/**
 * Small category pill shown in each TimelineCard's header row (e.g.
 * "Milestone", "Project", "Skill"). A colored dot ties it back to its
 * TimelineNode via the same `color` token, without introducing any
 * new accent colors beyond purple/cyan/blue.
 *
 * @param {'purple'|'cyan'|'blue'} color
 */
const DOT_STYLE = {
  purple: 'var(--color-purple)',
  cyan: 'var(--color-cyan)',
  blue: 'var(--color-blue)',
}

export default function CategoryBadge({ label, color = 'purple', className }) {
  return (
    <span
      className={cn(
        'glass inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] uppercase tracking-wider text-ink-muted',
        className
      )}
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ background: DOT_STYLE[color] ?? DOT_STYLE.purple }}
      />
      {label}
    </span>
  )
}

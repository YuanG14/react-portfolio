import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'

/**
 * Small pill with a pulsing status dot + label. Built for
 * BrandingCard's "available for work" indicator, but generic enough
 * to reuse anywhere a live-status pill is needed. Uses cyan for the
 * dot rather than a literal green — keeps every "available" signal
 * on the site (ProfileCard, AboutVisual before it) on the same
 * purple/cyan/blue accent system instead of introducing a new color.
 */
export default function StatusBadge({ label, className }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      className={cn(
        'glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-ink',
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        {!shouldReduceMotion && (
          <motion.span
            animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full bg-cyan"
          />
        )}
        <span className="relative h-2 w-2 rounded-full bg-cyan" />
      </span>
      {label}
    </div>
  )
}

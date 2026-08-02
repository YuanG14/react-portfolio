import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

const variants = {
  primary:
    'text-bg font-medium bg-gradient-to-r from-purple via-blue to-cyan bg-[length:180%_100%] bg-left hover:bg-right shadow-[0_0_0_1px_rgba(255,255,255,0.08)]',
  secondary:
    'glass text-ink hover:bg-surface-hover hover:border-border-strong',
  ghost: 'text-ink-muted hover:text-ink',
}

/**
 * The single button component for the whole site. Prefer this over
 * ad-hoc <button> tags so hover/focus/press behavior stays consistent.
 *
 * @param {'primary'|'secondary'|'ghost'} variant
 */
export default function Button({
  as = 'button',
  variant = 'primary',
  className,
  children,
  ...props
}) {
  // Plain tag names ('button', 'a') use motion's built-in elements.
  // A custom component (e.g. React Router's <Link>) is wrapped with
  // motion.create so it still gets whileHover/whileTap, memoized so it
  // isn't recreated on every render.
  const Tag = useMemo(
    () => (typeof as === 'string' ? motion[as] ?? motion.button : motion.create(as)),
    [as]
  )

  return (
    <Tag
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-[background-position,background-color,border-color,color] duration-300',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

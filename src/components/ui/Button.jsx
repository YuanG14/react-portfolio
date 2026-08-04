import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { buttonPress } from '../../animations/variants'
import { cn } from '../../lib/cn'

const variants = {
  primary:
    'text-bg font-medium bg-gradient-to-r from-purple via-blue to-cyan bg-[length:180%_100%] bg-left hover:bg-right shadow-[0_0_0_1px_rgba(255,255,255,0.08)]',
  secondary:
    'glass text-ink hover:bg-surface-hover hover:border-border-strong',
  ghost: 'text-ink-muted hover:text-ink',
}

// Created once, unconditionally, at module load — never inside the
// component body — so no path reachable from render creates a new
// component. `Link` is the only non-string `as` value Button is
// actually used with anywhere in the app (see pages/NotFound.jsx);
// an `as` value outside these known cases renders unwrapped (no
// whileHover/whileTap), rather than calling motion.create at runtime.
const MotionLink = motion.create(Link)

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
  // Pure lookup — no function call, no component creation — so this
  // resolves to one of the module-scope constants above at render
  // time without ever constructing anything new.
  const Tag = typeof as === 'string' ? motion[as] ?? motion.button : as === Link ? MotionLink : as

  return (
    <Tag
      {...buttonPress}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-[background-position,background-color,border-color,color] duration-300 ease-[var(--ease-premium)]',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

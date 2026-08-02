import { useReducedMotion } from 'framer-motion'
import { useTypewriter } from '../../hooks/useTypewriter'
import { cn } from '../../lib/cn'

/**
 * Renders a rotating line of text with a typing/deleting animation
 * and a blinking caret. Falls back to a static first word when the
 * user has requested reduced motion.
 */
export default function TypingText({ words, className }) {
  const shouldReduceMotion = useReducedMotion()
  const typed = useTypewriter(words)
  const text = shouldReduceMotion ? words[0] : typed

  return (
    <span className={cn('inline-flex items-center', className)}>
      {text}
      <span
        aria-hidden="true"
        className={cn(
          'ml-1 inline-block h-[0.9em] w-[2px] bg-current',
          !shouldReduceMotion && 'animate-pulse'
        )}
      />
    </span>
  )
}

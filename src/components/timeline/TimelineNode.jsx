import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'

/**
 * The glowing marker sitting on TimelineLine at each TimelineItem.
 * Two layers: a soft pulsing glow (paused under reduced motion, same
 * convention as TiltCard/TechCard) behind a solid glass disc holding
 * the item's icon.
 *
 * @param {'purple'|'cyan'|'blue'} color
 */
const NODE_COLORS = {
  purple: { solid: 'var(--color-purple)', glow: 'rgba(139,92,246,0.55)' },
  cyan: { solid: 'var(--color-cyan)', glow: 'rgba(34,211,238,0.55)' },
  blue: { solid: 'var(--color-blue)', glow: 'rgba(59,130,246,0.55)' },
}

export default function TimelineNode({ icon: Icon, color = 'purple', className }) {
  const shouldReduceMotion = useReducedMotion()
  const tones = NODE_COLORS[color] ?? NODE_COLORS.purple

  return (
    <div className={cn('relative flex h-11 w-11 shrink-0 items-center justify-center md:h-12 md:w-12', className)}>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full blur-md"
        style={{ background: tones.glow }}
        animate={shouldReduceMotion ? undefined : { opacity: [0.35, 0.8, 0.35], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <span className="glass relative flex h-full w-full items-center justify-center rounded-full">
        {Icon && <Icon aria-hidden="true" className="text-base md:text-lg" style={{ color: tones.solid }} />}
      </span>
    </div>
  )
}

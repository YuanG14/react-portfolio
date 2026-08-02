import { motion, useScroll } from 'framer-motion'
import { cn } from '../../lib/cn'

/**
 * The vertical spine running behind every TimelineItem: a faint base
 * track plus a gradient overlay whose scaleY is driven directly by
 * scroll progress through the timeline container, so it visually
 * "draws itself" as the section scrolls into and through view.
 *
 * Sits at `left-6` on mobile (aligned with TimelineItem's node
 * position) and `md:left-1/2` on tablet/desktop, where items
 * alternate sides around a centered line.
 *
 * @param {React.RefObject} containerRef - ref on the timeline's
 *   outer wrapper (see Experience.jsx), used as the scroll target.
 */
export default function TimelineLine({ containerRef, className }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 30%'],
  })

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute left-6 top-0 h-full w-px -translate-x-1/2 md:left-1/2',
        className
      )}
    >
      {/* Ambient glow bleeding behind the line for atmosphere */}
      <div
        className="absolute inset-y-0 left-1/2 w-20 -translate-x-1/2 rounded-full opacity-40 blur-2xl"
        style={{
          background: 'linear-gradient(to bottom, var(--color-purple), var(--color-blue), var(--color-cyan))',
        }}
      />

      {/* Static base track */}
      <div className="absolute inset-0" style={{ background: 'var(--color-border)' }} />

      {/* Scroll-driven progress fill */}
      <motion.div
        style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
        className="absolute inset-0 bg-gradient-to-b from-purple via-blue to-cyan shadow-[0_0_16px_rgba(139,92,246,0.45)]"
      />
    </div>
  )
}

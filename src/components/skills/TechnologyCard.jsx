import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * One technology card inside a skill category grid. Replaces the
 * plain SkillPill tag for this section only — SkillPill itself is
 * left untouched since Projects still uses it for its tech-tag rows.
 *
 * The proficiency bar animates to its final width the first time the
 * card scrolls into view (via its own `useInView`, independent of
 * whatever stagger the caller wraps it in). Hover/focus adds a lift,
 * a border/glow brighten, and a slight icon scale — but deliberately
 * does not re-trigger the bar fill, so repeated hovering stays calm
 * rather than replaying an animation every time.
 *
 * @param {React.ComponentType} icon - brand icon component
 * @param {string} name
 * @param {string} description
 * @param {number} proficiency - 0-100
 * @param {string} color - icon tint
 */
export default function TechnologyCard({ icon: Icon, name, description, proficiency, color }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      tabIndex={0}
      whileHover={{ y: -4, scale: 1.02 }}
      whileFocus={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="glass-elevated group flex cursor-default flex-col gap-3 rounded-2xl p-4 outline-none transition-shadow duration-300 hover:border-border-strong hover:shadow-[0_0_28px_-8px_rgba(139,92,246,0.45)] focus-visible:shadow-[0_0_28px_-8px_rgba(34,211,238,0.45)]"
    >
      <div className="flex items-center gap-3">
        <Icon
          aria-hidden="true"
          className="shrink-0 text-xl transition-transform duration-300 group-hover:scale-110"
          style={{ color }}
        />
        <p className="font-display text-sm font-medium text-ink">{name}</p>
      </div>

      <p className="text-xs text-ink-muted">{description}</p>

      <div className="mt-auto">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="h-full rounded-full bg-gradient-to-r from-purple via-blue to-cyan"
          />
        </div>
        <p className="mt-1.5 text-right text-[11px] font-medium text-ink-faint">{proficiency}%</p>
      </div>
    </motion.div>
  )
}

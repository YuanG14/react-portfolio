import { motion } from 'framer-motion'
import { hoverInteractive } from '../../animations/variants'

/**
 * One of About's four strength highlights (Full-Stack Development,
 * UI/UX Design, etc). Previously an unbordered icon+text row with no
 * card treatment at all; promoted to a real Tier 2 interactive card
 * using the shared hoverInteractive motion preset (the same tier
 * Skills' tech tiles and Timeline's cards use — a small lift on
 * hover *and* keyboard focus, not a mouse-only effect) so it reads
 * as consistent with the rest of the site's card language rather
 * than inventing its own hover numbers.
 *
 * Kept as its own file, not inlined in About.jsx, matching the
 * codebase's existing convention of small focused components
 * (StatusBadge, TechChip, CurrentProject) for anything repeated in a
 * map().
 */
export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      {...hoverInteractive}
      tabIndex={0}
      className="glass group flex gap-4 rounded-2xl p-5 outline-none transition-colors duration-300 hover:border-border-strong focus-visible:border-border-strong"
    >
      <div className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-cyan transition-colors duration-300 group-hover:text-blue">
        <Icon aria-hidden="true" className="text-lg" />
      </div>
      <div>
        <p className="font-medium text-ink">{title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{description}</p>
      </div>
    </motion.div>
  )
}

import { motion, useReducedMotion } from 'framer-motion'
import { FiCompass } from 'react-icons/fi'
import { LEARNING_TOPICS } from '../../data/skills'

/**
 * Small floating card used to fill the otherwise-empty sidebar space
 * next to the skill categories on large screens. The caller controls
 * placement/stickiness (see Skills.jsx) — this component only owns
 * the float animation and its own content.
 */
export default function LearningCard({ className }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
    >
      <div className="glass-elevated rounded-2xl p-6">
        <div className="flex items-center gap-2 text-cyan">
          <FiCompass aria-hidden="true" />
          <p className="font-display text-sm font-medium text-ink">Always Learning</p>
        </div>

        <p className="mt-4 text-xs uppercase tracking-wider text-ink-faint">Currently exploring</p>

        <ul className="mt-3 space-y-2">
          {LEARNING_TOPICS.map((topic) => (
            <li key={topic} className="flex items-start gap-2 text-sm text-ink-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

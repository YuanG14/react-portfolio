import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Reveal from '../layout/Reveal'
import { useCountUp } from '../../hooks/useCountUp'
import { ABOUT_STATS } from '../../data/about'

/**
 * Turns a human label like "Years Experience" into an object-key-looking
 * token: "years_experience". Display-only — source data stays plain
 * English so it's easy to edit in data/about.js.
 */
function toKey(label) {
  return label.toLowerCase().trim().replace(/\s+/g, '_')
}

/**
 * The animated portion of a stat's value. Entries with a numeric
 * `value` count up (via the same useCountUp hook SkillStats already
 * uses, so the numbers don't just materialize on scroll); entries
 * with a `display` string (the coffee "∞") render as-is — counting
 * up to a symbol doesn't mean anything, so it's skipped rather than
 * forced to fit.
 */
function StatValue({ stat, isInView }) {
  const count = useCountUp(stat.value ?? 0, { isInView: isInView && stat.value != null })
  return stat.value != null ? `${count}${stat.suffix ?? ''}` : stat.display
}

/**
 * Headline stats rendered as a faux code editor instead of the usual
 * icon-over-number card grid (that pattern already exists in Skills'
 * SkillStats — keeping this section's own metaphor intentional so
 * the two don't read as duplicated as the visitor scrolls between
 * them). Fits the site's existing mono/dev-tool vocabulary
 * (JetBrains Mono is already reserved for labels/tags) and gives the
 * numbers one shared "object" to live in rather than four identical
 * tiles.
 *
 * Each line now highlights on hover/focus like an editor gutter, and
 * shows the stat's own icon — data/about.js already defined one per
 * stat, it just wasn't being rendered before.
 */
export default function StatsTerminal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="glass-elevated overflow-hidden rounded-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
        </div>
        <span className="ml-2 font-mono text-xs text-ink-faint">about.stats.ts</span>
      </div>

      {/* Code body */}
      <div className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-7 sm:px-8 sm:text-sm">
        <p>
          <span className="text-purple">const</span>{' '}
          <span className="text-ink">me</span>{' '}
          <span className="text-ink-faint">=</span>{' '}
          <span className="text-ink-faint">{'{'}</span>
        </p>

        {ABOUT_STATS.map((stat, index) => (
          <Reveal key={stat.label} delay={0.1 + index * 0.08}>
            <p
              tabIndex={0}
              className="group -mx-3 flex items-center gap-2 rounded-lg py-1 pl-8 pr-3 outline-none transition-colors duration-200 hover:bg-surface-hover focus-visible:bg-surface-hover"
            >
              {stat.icon && (
                <stat.icon
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-colors duration-200 group-hover:text-cyan"
                />
              )}
              <span className="whitespace-pre">
                <span className="text-cyan">{toKey(stat.label)}</span>
                <span className="text-ink-faint">: </span>
                <span className="text-blue">
                  &quot;
                  <StatValue stat={stat} isInView={isInView} />
                  &quot;
                </span>
                <span className="text-ink-faint">,</span>
                <span className="ml-3 hidden text-ink-faint/60 sm:inline">// {stat.label}</span>
              </span>
            </p>
          </Reveal>
        ))}

        <p>
          <span className="text-ink-faint">{'}'}</span>
          <span className="terminal-cursor" aria-hidden="true" />
        </p>
      </div>
    </div>
  )
}

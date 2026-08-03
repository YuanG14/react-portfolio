import Reveal from '../layout/Reveal'
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
 * Headline stats rendered as a faux code editor instead of the usual
 * icon-over-number card grid. Fits the site's existing mono/dev-tool
 * vocabulary (JetBrains Mono is already reserved for labels/tags) and
 * gives the numbers one shared "object" to live in rather than four
 * identical tiles.
 */
export default function StatsTerminal() {
  return (
    <div className="glass-elevated overflow-hidden rounded-2xl">
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
            <p className="whitespace-pre pl-6">
              <span className="text-cyan">{toKey(stat.label)}</span>
              <span className="text-ink-faint">: </span>
              <span className="text-blue">&quot;{stat.value}&quot;</span>
              <span className="text-ink-faint">,</span>
              <span className="ml-3 text-ink-faint/60 hidden sm:inline">// {stat.label}</span>
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

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Reveal from '../layout/Reveal'
import { useCountUp } from '../../hooks/useCountUp'
import { SKILL_STATS } from '../../data/skills'

function StatNumber({ value, suffix, isInView }) {
  const count = useCountUp(value, { isInView })
  return (
    <>
      {count}
      {suffix}
    </>
  )
}

/**
 * Skill stat row (technologies/projects/years/passion). A single
 * `useInView` on the row drives every StatNumber's count-up so they
 * all start together, rather than each tile computing its own
 * intersection independently.
 */
export default function SkillStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
      {SKILL_STATS.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 0.08}>
          <div className="glass-elevated rounded-2xl px-6 py-6 text-center transition-colors duration-300 hover:border-border-strong">
            {stat.icon && <stat.icon className="mx-auto mb-3 text-xl text-cyan" aria-hidden="true" />}
            <p className="font-display text-3xl font-semibold text-gradient-accent">
              <StatNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
            </p>
            <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

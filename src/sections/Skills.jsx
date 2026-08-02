import Section from '../components/layout/Section'
import Reveal from '../components/layout/Reveal'
import SkillPill from '../components/skills/SkillPill'
import { SKILL_CATEGORIES } from '../data/skills'

/**
 * Skills section: one Reveal-wrapped group per category, each a wrap
 * of animated SkillPill tags. Uses the standard Section wrapper for
 * the anchor id + vertical rhythm, same as every other section.
 */
export default function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">Skills</p>
        <h2 className="mt-4 text-display-lg font-display font-medium text-ink">
          What I <span className="text-gradient-accent">work with</span>
        </h2>
      </Reveal>

      <div className="mt-12 space-y-10">
        {SKILL_CATEGORIES.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.1}>
            <h3 className="font-display text-sm font-medium uppercase tracking-wider text-ink-faint">
              {category.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

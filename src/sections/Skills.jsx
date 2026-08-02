import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import Reveal from '../components/layout/Reveal'
import SkillCategoryHeader from '../components/skills/SkillCategoryHeader'
import TechnologyCard from '../components/skills/TechnologyCard'
import LearningCard from '../components/skills/LearningCard'
import SkillStats from '../components/skills/SkillStats'
import SkillsDecor from '../components/skills/SkillsDecor'
import { SKILLS_INTRO, SKILL_CATEGORIES } from '../data/skills'

/**
 * Skills section. Layout: intro line, then a two-column area on large
 * screens — categories (Frontend/Backend/Tools, each a header + a
 * grid of TechnologyCards) on the left, a floating "Always Learning"
 * card sticky in the sidebar on the right — followed by an animated
 * stat row. Falls back to a single column (LearningCard reflows below
 * the categories instead of floating over them) below the lg
 * breakpoint.
 */
export default function Skills() {
  return (
    <Section id="skills">
      <SkillsDecor />

      <div className="relative z-10">
        <SectionHeader eyebrow="Skills" title="What I" accent="work with" />

        <Reveal delay={0.05}>
          <p className="mt-5 max-w-2xl text-ink-muted">{SKILLS_INTRO}</p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start lg:gap-16">
          {/* Categories column */}
          <div className="space-y-12">
            {SKILL_CATEGORIES.map((category, categoryIndex) => {
              const categoryDelay = categoryIndex * 0.15

              return (
                <div key={category.title}>
                  <Reveal delay={categoryDelay}>
                    <SkillCategoryHeader
                      icon={category.icon}
                      title={category.title}
                      description={category.description}
                    />
                  </Reveal>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {category.technologies.map((tech, techIndex) => (
                      <Reveal key={tech.name} delay={categoryDelay + 0.1 + techIndex * 0.05}>
                        <TechnologyCard
                          icon={tech.icon}
                          name={tech.name}
                          description={tech.description}
                          proficiency={tech.proficiency}
                          color={tech.color}
                        />
                      </Reveal>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Learning card: sticky sidebar on large screens (fills the
              space that would otherwise sit empty next to the category
              list), a normal block below the categories on smaller
              screens since it's the second item in a single-column grid. */}
          <Reveal delay={0.25} className="lg:sticky lg:top-32">
            <LearningCard />
          </Reveal>
        </div>

        <SkillStats />
      </div>
    </Section>
  )
}

import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import Reveal from '../components/layout/Reveal'
import StatsTerminal from '../components/about/StatsTerminal'
import BrandingCard from '../components/about/BrandingCard'
import { ABOUT_PARAGRAPHS, ABOUT_HIGHLIGHTS } from '../data/about'

/**
 * About Me section. Uses the standard <Section> wrapper for anchor id
 * + vertical rhythm + shared container width — same pattern every
 * top-level section should follow (see Section.jsx docstring).
 */
export default function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="About Me" title="Get to know" accent="me" />

      <div className="mt-12 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text column */}
        <div>
          {ABOUT_PARAGRAPHS.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.1 + index * 0.1}>
              <p className="mt-4 max-w-xl text-ink-muted first:mt-0">{paragraph}</p>
            </Reveal>
          ))}

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {ABOUT_HIGHLIGHTS.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={0.2 + index * 0.08}>
                <div className="flex gap-3">
                  <div className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-cyan">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">{title}</p>
                    <p className="mt-1 text-sm text-ink-muted">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Visual column */}
        <Reveal delay={0.15}>
          <BrandingCard />
        </Reveal>
      </div>

      {/* Stat row */}
      <div className="mt-16">
        <StatsTerminal />
      </div>
    </Section>
  )
}

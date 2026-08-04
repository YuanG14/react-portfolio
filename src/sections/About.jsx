import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import Reveal from '../components/layout/Reveal'
import StatsTerminal from '../components/about/StatsTerminal'
import BrandingCard from '../components/about/BrandingCard'
import FeatureCard from '../components/about/FeatureCard'
import { ABOUT_PARAGRAPHS, ABOUT_HIGHLIGHTS } from '../data/about'

/**
 * About Me section. Uses the standard <Section> wrapper for anchor id
 * + vertical rhythm + shared container width — same pattern every
 * top-level section should follow (see Section.jsx docstring).
 *
 * R3: same content and same two-column/stat-row layout as before —
 * refined for rhythm and hierarchy rather than restructured. The
 * bio's first paragraph now reads as a lede (larger, full-strength
 * ink) with the second as supporting detail (muted, more separated),
 * so the section opens with a stronger single idea instead of two
 * paragraphs of equal visual weight. The highlight row now uses
 * FeatureCard so those four traits read as real cards, not a bare
 * icon+text list.
 */
export default function About() {
  return (
    <Section id="about" className="section-bg-about">
      <SectionHeader eyebrow="About Me" title="Get to know" accent="me" />

      <div className="mt-12 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text column */}
        <div>
          {ABOUT_PARAGRAPHS.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.1 + index * 0.1}>
              <p
                className={
                  index === 0
                    ? 'max-w-lg text-lg leading-relaxed text-ink'
                    : 'mt-5 max-w-lg leading-relaxed text-ink-muted'
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {ABOUT_HIGHLIGHTS.map(({ icon, title, description }, index) => (
              <Reveal key={title} delay={0.2 + index * 0.08}>
                <FeatureCard icon={icon} title={title} description={description} />
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

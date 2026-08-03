import { useRef } from 'react'
import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import TimelineLine from '../components/timeline/TimelineLine'
import TimelineItem from '../components/timeline/TimelineItem'
import { TIMELINE_ITEMS } from '../data/timeline'

/**
 * Experience / Education timeline (Phase 8). Sits between Projects
 * and Contact. `containerRef` wraps just the line + items — not the
 * whole <Section> — so TimelineLine's scroll-linked draw tracks the
 * timeline's own height rather than the section's outer padding.
 */
export default function Experience() {
  const containerRef = useRef(null)

  return (
    <Section id="experience" className="section-bg-experience">
      <SectionHeader
        eyebrow="Experience"
        title="My"
        accent="journey"
        description="A quick look at how I got here — one year, one skill, one project at a time."
        showUnderline
      />

      <div ref={containerRef} className="relative mt-16 md:mt-20">
        <TimelineLine containerRef={containerRef} />

        <div className="space-y-10 md:space-y-16">
          {TIMELINE_ITEMS.map((item, index) => (
            <TimelineItem key={`${item.year}-${item.title}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}

import Reveal from '../layout/Reveal'
import TimelineNode from './TimelineNode'
import TimelineCard from './TimelineCard'

/**
 * One row of the timeline: a TimelineNode on the spine plus a
 * TimelineCard that slides in from alternating sides on desktop
 * (even index -> left, odd index -> right) and stacks in a single
 * column on mobile. Layout uses a two-column grid with an empty
 * spacer div on the unused side, rather than reordering a single
 * column with CSS order, so the DOM reading order always matches
 * chronological order.
 *
 * @param {object} item - one entry from data/timeline.js
 * @param {number} index - position in the list, drives alternation
 */
function buildSlideVariant(fromX) {
  return {
    hidden: { opacity: 0, x: fromX, y: 16 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }
}

export default function TimelineItem({ item, index }) {
  const isRight = index % 2 === 1
  const slideVariant = buildSlideVariant(isRight ? 48 : -48)

  return (
    <div className="relative pl-16 md:grid md:grid-cols-2 md:items-start md:gap-x-10 md:pl-0 lg:gap-x-16">
      <TimelineNode
        icon={item.icon}
        color={item.color}
        className="absolute left-6 top-6 -translate-x-1/2 md:left-1/2 md:top-7"
      />

      {isRight ? (
        <>
          <div aria-hidden="true" className="hidden md:block" />
          <Reveal variants={slideVariant} className="md:pl-8 lg:pl-10">
            <TimelineCard {...item} align="left" />
          </Reveal>
        </>
      ) : (
        <>
          <Reveal variants={slideVariant} className="md:pr-8 lg:pr-10">
            <TimelineCard {...item} align="right" />
          </Reveal>
          <div aria-hidden="true" className="hidden md:block" />
        </>
      )}
    </div>
  )
}

/**
 * Central animation vocabulary. Every section built in later phases
 * should reach for one of these instead of inventing new easing
 * curves and durations — keeps motion feeling like one system rather
 * than a pile of one-off effects.
 */

// Standard "fade up into place" — the default entrance across the site.
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

// Plain fade, for elements where vertical motion would be distracting
// (e.g. background layers, large images).
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
}

// Subtle scale-in, useful for cards and modals.
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

// Wrap a group of children with this on the parent, and fadeUp/scaleIn
// on each child, to get a staggered reveal.
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
})

// Shared spring used for interactive elements (buttons, nav toggle).
export const springy = { type: 'spring', stiffness: 400, damping: 25 }

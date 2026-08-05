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

/* -------------------------------------------------------------- */
/* Hover/tap interaction tiers — three deliberate levels of motion, */
/* matching the three card variants in index.css (glass /           */
/* glass-elevated / glass-featured). Pick the tier that matches a    */
/* card's actual role instead of inventing new lift/scale numbers;   */
/* spread the result onto a motion.div: <motion.div {...hoverTile}>  */
/* -------------------------------------------------------------- */

// Tier 1 — static info tiles (stat numbers, small icon badges).
// No lift/scale; only the border-color transition already handled
// by the .glass/.glass-elevated utilities in CSS. Exported as an
// empty object so callers can still spread it uniformly.
export const hoverStatic = {}

// Tier 2 — standard interactive cards (skill/tech tiles, timeline
// cards). A small lift with a light spring, mirrored on keyboard
// focus so the interaction isn't mouse-only.
export const hoverInteractive = {
  whileHover: { y: -4, scale: 1.02 },
  whileFocus: { y: -4, scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 320, damping: 24 },
}

// Tier 3 — feature/hero cards (project showcase, identity cards).
// The most pronounced lift, meant to pair with a pointer-tilt/glow
// treatment (see hooks/usePointerTilt.js) and the .glass-featured
// surface + --shadow-featured token.
export const hoverFeature = {
  whileHover: { y: -8, scale: 1.015 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 260, damping: 22 },
}

// Button-specific press: a smaller lift than either card tier (buttons
// are inline controls, not cards) plus a tap scale-down.
export const buttonPress = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring', stiffness: 400, damping: 25 },
}

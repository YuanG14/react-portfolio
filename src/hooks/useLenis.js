import { useEffect } from 'react'
import Lenis from 'lenis'
import { NAVBAR_HEIGHT } from '../constants/site'

/**
 * Initializes Lenis once at the app root for smooth scrolling, and
 * intercepts clicks on same-page anchor links (href="#section") so
 * they scroll smoothly instead of jumping instantly, offset so
 * headings don't land underneath the fixed Navbar.
 *
 * Scroll feel: uses `lerp` (frame-by-frame interpolation) rather than
 * a fixed-duration easing curve. Duration-based easing keeps drifting
 * for a set time regardless of how far you scrolled, which reads as
 * floaty/overshooting on long scrolls — a common source of scroll
 * "dizziness". `lerp` instead moves a constant fraction of the
 * remaining distance every frame, so it settles quickly and
 * proportionally to the actual scroll distance.
 *
 * Anyone with `prefers-reduced-motion` set skips Lenis entirely and
 * gets native browser scrolling.
 *
 * The instance is stashed on `window.__lenis` so any component (e.g.
 * a "back to top" button in the Footer) can trigger a scroll without
 * needing its own copy of the instance.
 */
export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      lerp: 0.12, // lower = smoother/slower settle, higher = snappier
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      smoothWheel: true,
    })
    window.__lenis = lenis

    let frame
    function raf(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    function handleAnchorClick(event) {
      const anchor = event.target.closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href')
      const target = id.length > 1 ? document.querySelector(id) : null
      if (!target) return
      event.preventDefault()
      lenis.scrollTo(target, { offset: -NAVBAR_HEIGHT })
    }
    document.addEventListener('click', handleAnchorClick)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
      window.__lenis = null
    }
  }, [])
}

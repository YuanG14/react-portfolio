import { useEffect } from 'react'
import Lenis from 'lenis'
import { NAVBAR_HEIGHT } from '../constants/site'

/**
 * Initializes Lenis once at the app root for inertia-based smooth
 * scrolling (the "premium" scroll feel seen on Awwwards/Framer sites),
 * and intercepts clicks on same-page anchor links (href="#section")
 * so they scroll smoothly through Lenis instead of jumping instantly,
 * offset so headings don't land underneath the fixed Navbar.
 *
 * The instance is stashed on `window.__lenis` so any component (e.g.
 * a "back to top" button in the Footer) can trigger a scroll without
 * needing its own copy of the instance.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
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

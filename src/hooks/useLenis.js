import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Initializes Lenis once at the app root for inertia-based smooth
 * scrolling (the "premium" scroll feel seen on Awwwards/Framer sites).
 * Cleans itself up on unmount so hot-reload in dev doesn't stack
 * multiple instances.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    })

    let frame
    function raf(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])
}

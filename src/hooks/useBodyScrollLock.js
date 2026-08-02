import { useEffect } from 'react'

/**
 * Locks page scroll while `isLocked` is true: pauses Lenis (see
 * useLenis.js) if it's running, and sets `overflow: hidden` on
 * <body> as a fallback for reduced-motion users who skip Lenis
 * entirely. Written generically so any future overlay (modals,
 * drawers, ...) can reuse it instead of re-implementing scroll lock.
 */
export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return undefined

    window.__lenis?.stop()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.__lenis?.start()
      document.body.style.overflow = previousOverflow
    }
  }, [isLocked])
}

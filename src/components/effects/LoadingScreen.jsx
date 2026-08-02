import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { SITE_NAME } from '../../constants/site'

const MIN_VISIBLE_MS = 900

/**
 * Full-screen splash shown while the page first loads, so the site
 * never flashes unstyled/empty content. Waits for the window `load`
 * event (or fires immediately if the document is already complete —
 * relevant in dev/HMR), enforces a small minimum display time so it
 * never just flickers, then fades out once. Body scroll is locked
 * for the duration via the same hook ProjectModal uses.
 *
 * Rendered once at the top of App.jsx, above the router, so it
 * covers the very first paint regardless of route.
 */
export default function LoadingScreen() {
  const shouldReduceMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(true)
  useBodyScrollLock(isVisible)

  useEffect(() => {
    const start = Date.now()

    function finish() {
      const elapsed = Date.now() - start
      const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0)
      window.setTimeout(() => setIsVisible(false), remaining)
    }

    if (document.readyState === 'complete') {
      finish()
      return undefined
    }

    window.addEventListener('load', finish)
    return () => window.removeEventListener('load', finish)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6"
          >
            <span className="font-display text-2xl font-medium tracking-tight text-ink">
              {SITE_NAME}
            </span>

            <div className="h-[2px] w-40 overflow-hidden rounded-full" style={{ background: 'var(--color-border)' }}>
              {shouldReduceMotion ? (
                <div className="h-full w-full bg-gradient-to-r from-purple via-blue to-cyan" />
              ) : (
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-full w-full bg-gradient-to-r from-purple via-blue to-cyan"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

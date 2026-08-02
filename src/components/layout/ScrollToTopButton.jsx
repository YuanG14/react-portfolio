import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

/**
 * Floating "back to top" control, fixed to the lower-right corner of
 * the viewport. Hidden near the top of the page, fades/scales in once
 * scrolled past roughly one viewport height — tracked via Framer
 * Motion's useScroll + useMotionValueEvent, the same pattern Navbar
 * uses for its glass-on-scroll toggle, so no extra scroll listener is
 * introduced.
 *
 * Scrolls via the shared Lenis instance (see src/hooks/useLenis.js)
 * so it settles with the same smooth feel as every other in-page
 * scroll (nav links, anchor clicks, etc).
 *
 * Rendered once in MainLayout, so it's available above every page.
 */
export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > window.innerHeight * 0.8)
  })

  function scrollToTop() {
    window.__lenis?.scrollTo(0)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 350, damping: 24 }}
          className="glass fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full text-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:border-border-strong hover:text-cyan hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.45)] md:bottom-8 md:right-8"
        >
          <FiArrowUp size={20} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

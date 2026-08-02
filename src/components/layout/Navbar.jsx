import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { NAV_LINKS } from '../../data/navLinks'
import { SITE_NAME } from '../../constants/site'
import Container from '../ui/Container'
import { cn } from '../../lib/cn'

/**
 * Fixed top navigation. Transparent over the hero, and gains a glass
 * background once the page scrolls (tracked via Framer Motion's
 * useScroll rather than a manual scroll listener). Anchor clicks are
 * handled globally by useLenis (see src/hooks/useLenis.js), so this
 * component only needs to render plain <a href="#..."> tags.
 *
 * Tracks which section is currently in view via IntersectionObserver
 * and highlights the matching link, with a shared-layout indicator
 * that slides between links as the active section changes.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0]?.href ?? '')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 16)
  })

  // Close the mobile menu on Escape, same convention as ProjectModal.
  useEffect(() => {
    if (!isMenuOpen) return undefined
    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  // Active-section highlighting: whichever section has the most
  // visible area near the top of the viewport wins.
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(Boolean)
    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (mostVisible) setActiveHref(`#${mostVisible.target.id}`)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        isScrolled ? 'glass' : 'border-b border-transparent'
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg font-medium tracking-tight text-ink"
        >
          {SITE_NAME}
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeHref === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'relative pb-1 text-sm transition-colors',
                  isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-purple via-blue to-cyan"
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-full text-ink md:hidden"
        >
          {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </Container>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="glass mx-4 mb-4 flex flex-col gap-1 rounded-2xl p-4 md:hidden"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeHref === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'rounded-xl px-4 py-3 text-sm transition-colors hover:bg-surface-hover hover:text-ink',
                    isActive ? 'text-ink' : 'text-ink-muted'
                  )}
                >
                  {link.label}
                </a>
              )
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

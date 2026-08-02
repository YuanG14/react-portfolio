import { useState } from 'react'
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
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 16)
  })

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
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
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
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-ink-muted transition-colors hover:bg-surface-hover hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

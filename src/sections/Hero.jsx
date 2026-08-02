import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import Container from '../components/ui/Container'
import Reveal from '../components/layout/Reveal'
import Button from '../components/ui/Button'
import TypingText from '../components/ui/TypingText'
import MouseGlow from '../components/hero/MouseGlow'
import ProfileCard from '../components/hero/ProfileCard'
import { HERO_NAME, HERO_ROLES, HERO_TAGLINE } from '../data/hero'

/**
 * Full-viewport intro. Deliberately not using the standard <Section>
 * wrapper (see components/layout/Section.jsx) — its `.section-py`
 * vertical rhythm is for content sections further down the page,
 * while the Hero needs to own the full screen height itself.
 */
export default function Hero() {
  const heroRef = useRef(null)

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28"
    >
      <MouseGlow containerRef={heroRef} />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text column */}
        <div>
          <Reveal>
            <p className="font-mono text-sm text-ink-faint">Hello,</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-3 text-display-xl font-display font-semibold leading-[1.05] text-ink">
              I&apos;m {HERO_NAME}.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-4 text-display-sm font-display font-medium text-gradient-accent">
              <TypingText words={HERO_ROLES} />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-6 max-w-lg text-ink-muted">{HERO_TAGLINE}</p>
          </Reveal>

          <Reveal delay={0.4} className="mt-10 flex flex-wrap gap-4">
            <Button as="a" href="#projects" variant="primary">
              View Projects
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              Contact Me
            </Button>
          </Reveal>
        </div>

        {/* Floating visual column */}
        <ProfileCard />
      </Container>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1.2 },
          y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint transition-colors hover:text-ink"
      >
        <FiChevronDown size={22} />
      </motion.a>
    </section>
  )
}

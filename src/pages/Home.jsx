import Section from '../components/layout/Section'
import Reveal from '../components/layout/Reveal'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import TechStack from '../sections/TechStack'
import Projects from '../sections/Projects'

/**
 * Contact is still a TEMPORARY placeholder — anchor target only, so
 * Navbar/Footer links have somewhere to scroll to; replaced in
 * Phase 7. Hero (Phase 2), About (Phase 3), Skills/TechStack
 * (Phase 4), and Projects (Phase 5) are now real — see
 * src/sections/Hero.jsx, About.jsx, Skills.jsx, TechStack.jsx, and
 * Projects.jsx.
 */
function Placeholder({ id, phaseLabel, title }) {
  return (
    <Section id={id} className="flex min-h-[70vh] items-center">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
          {phaseLabel}
        </p>
        <h2 className="mt-4 text-display-lg font-display font-medium text-ink">
          {title}
        </h2>
        <p className="mt-3 max-w-md text-ink-muted">
          Placeholder anchor target — real content arrives in a later phase.
        </p>
      </Reveal>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Placeholder id="contact" phaseLabel="Phase 7" title="Contact section" />
    </>
  )
}

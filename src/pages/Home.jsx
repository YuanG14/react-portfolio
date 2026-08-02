import Section from '../components/layout/Section'
import Reveal from '../components/layout/Reveal'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import TechStack from '../sections/TechStack'

/**
 * Projects/Contact are still TEMPORARY placeholders — anchor targets
 * only, so Navbar/Footer links have somewhere to scroll to. Each is
 * replaced by its real section in a later phase:
 * Projects -> Phase 5, Contact -> Phase 7.
 * Hero (Phase 2), About (Phase 3), and Skills/TechStack (Phase 4) are
 * now real — see src/sections/Hero.jsx, About.jsx, Skills.jsx, and
 * TechStack.jsx.
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
      <Placeholder id="projects" phaseLabel="Phase 5" title="Projects section" />
      <Placeholder id="contact" phaseLabel="Phase 7" title="Contact section" />
    </>
  )
}

import Section from '../components/layout/Section'
import Reveal from '../components/layout/Reveal'
import Hero from '../sections/Hero'

/**
 * About/Projects/Contact are still TEMPORARY placeholders — anchor
 * targets only, so Navbar/Footer links have somewhere to scroll to.
 * Each is replaced by its real section in a later phase:
 * About -> Phase 3, Projects -> Phase 5, Contact -> Phase 7.
 * Hero (Phase 2) is now real — see src/sections/Hero.jsx.
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
      <Placeholder id="about" phaseLabel="Phase 3" title="About section" />
      <Placeholder id="projects" phaseLabel="Phase 5" title="Projects section" />
      <Placeholder id="contact" phaseLabel="Phase 7" title="Contact section" />
    </>
  )
}

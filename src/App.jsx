import { useLenis } from './hooks/useLenis'
import GridBackground from './components/effects/GridBackground'
import GradientBlobs from './components/effects/GradientBlobs'
import Container from './components/ui/Container'
import Reveal from './components/layout/Reveal'
import Button from './components/ui/Button'

/**
 * Phase 0 — Foundation shell.
 *
 * This renders only the ambient background system (grid + blobs) and
 * a temporary placeholder so the setup can be visually verified.
 * Real sections (Navbar, Hero, About, Skills, Projects, Timeline,
 * Contact, Footer) are added section-by-section in later phases and
 * will mount inside <main> below, in order.
 */
function App() {
  useLenis()

  return (
    <div className="relative min-h-screen bg-bg text-ink font-body">
      <GradientBlobs />
      <GridBackground />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        <Container className="text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
              Phase 0 — Foundation
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-semibold text-gradient-accent md:text-6xl">
              Design system online.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-md text-ink-muted">
              Tailwind, Framer Motion, routing, forms, and the ambient
              background layer are wired up. Move your cursor to see the
              grid react — this scaffold is ready for the Hero section next.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 flex items-center justify-center gap-4">
            <Button variant="primary">Primary action</Button>
            <Button variant="secondary">Secondary</Button>
          </Reveal>
        </Container>
      </main>
    </div>
  )
}

export default App

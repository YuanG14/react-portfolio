<<<<<<< HEAD
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
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
>>>>>>> 92967a48d10f83cfcb6df8a2c02e58f3c89c54bc
  )
}

export default App

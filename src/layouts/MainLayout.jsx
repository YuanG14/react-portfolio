import { Outlet } from 'react-router-dom'
import GridBackground from '../components/effects/GridBackground'
import GradientBlobs from '../components/effects/GradientBlobs'
import NoiseOverlay from '../components/effects/NoiseOverlay'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollToTopButton from '../components/layout/ScrollToTopButton'
import ScrollProgressBar from '../components/layout/ScrollProgressBar'
import SkipToContent from '../components/layout/SkipToContent'
import { BackgroundProvider } from '../context/BackgroundContext'

/**
 * Shared shell rendered around every route.
 *
 * Layering (back to front): GradientBlobs/GridBackground (z-0) ->
 * NoiseOverlay (z-1) -> routed content (z-10) -> Navbar/back-to-top
 * (z-50) -> ScrollProgressBar (z-60) -> ProjectModal/SkipToContent
 * (z-100) -> LoadingScreen (z-200).
 *
 * Wrapped in BackgroundProvider so any section further down the tree
 * can request a different GradientBlobs treatment (see
 * context/BackgroundContext.jsx) without a second background layer
 * ever mounting — GradientBlobs itself still renders exactly once,
 * right here.
 *
 * Individual pages only need to render their own sections —
 * everything structural (chrome, ambient effects, a11y helpers)
 * lives here.
 */
export default function MainLayout() {
  return (
    <BackgroundProvider>
      <div className="relative min-h-screen bg-bg text-ink">
        <SkipToContent />

        <GradientBlobs />
        <GridBackground />
        <NoiseOverlay />

        <ScrollProgressBar />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            <Outlet />
          </main>
          <Footer />
        </div>

        <ScrollToTopButton />
      </div>
    </BackgroundProvider>
  )
}

import { Outlet } from 'react-router-dom'
import GridBackground from '../components/effects/GridBackground'
import GradientBlobs from '../components/effects/GradientBlobs'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollToTopButton from '../components/layout/ScrollToTopButton'

/**
 * Shared shell rendered around every route: ambient background layers
 * sit at z-0, chrome (Navbar/Footer) and routed page content sit above
 * at z-10. Individual pages only need to render their own sections —
 * everything structural lives here.
 */
export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <GradientBlobs />
      <GridBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>

      <ScrollToTopButton />
    </div>
  )
}

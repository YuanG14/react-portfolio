import { Routes, Route } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

/**
 * Phase 1 — Foundation: routing + layout.
 *
 * MainLayout renders the background system, Navbar, and Footer once;
 * individual pages only supply their own content via <Outlet />.
 * Home is still a placeholder (see src/pages/Home.jsx) — Hero, About,
 * Projects, and Contact are built section-by-section in later phases.
 */
function App() {
  useLenis()

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import LoadingScreen from './components/effects/LoadingScreen'

/**
 * LoadingScreen is rendered above the router so it covers the very
 * first paint on any route, then fades out once (see
 * src/components/effects/LoadingScreen.jsx).
 */
function App() {
  useLenis()

  return (
    <>
      <LoadingScreen />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

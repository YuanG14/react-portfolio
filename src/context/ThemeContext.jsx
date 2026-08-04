import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(undefined)

/**
 * Dark/light theme state for the whole site. The actual color values
 * live in index.css (`@theme` for dark defaults, `.light` for
 * overrides) — this just owns which one is active, persists the
 * choice, and keeps the `light` class on <html> in sync so every
 * CSS custom property resolves correctly.
 *
 * The inline script in index.html already sets the right class
 * before first paint (avoiding a flash of the wrong theme); this
 * provider reads that same starting point on mount so React's first
 * render matches what's already on screen.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'dark'
    return document.documentElement.classList.contains('light') ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* localStorage unavailable (private mode, etc.) — theme still
         applies for this session, it just won't persist */
    }
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

/** @returns {{ theme: 'dark' | 'light', toggleTheme: () => void }} */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

import { createContext, useContext, useEffect, useId, useMemo, useState, useCallback } from 'react'

/**
 * Configurable channel for the site's single global background layer
 * (see components/effects/GradientBlobs.jsx). GradientBlobs renders
 * exactly once, in MainLayout — this site is one continuous scrolling
 * page, not per-section routes, so there's no per-section prop to
 * pass it. This context is how a mounted section can still ask for a
 * different background treatment without a second layer ever being
 * mounted.
 *
 * Default state reproduces GradientBlobs' original hardcoded output
 * exactly, so as long as nothing calls useBackgroundOverride, every
 * page renders pixel-identical to before this existed.
 */
const DEFAULT_CONFIG = { variant: 'default', enabled: true }

const BackgroundContext = createContext(null)

/**
 * Wrap the app in this once (see MainLayout.jsx). Holds a small
 * priority stack of overrides rather than a single value, so more
 * than one section could register a preference without one silently
 * clobbering another — the most recently registered override wins,
 * and removing it reveals whatever was registered before it.
 */
export function BackgroundProvider({ children }) {
  const [stack, setStack] = useState([])

  const push = useCallback((entry) => {
    setStack((prev) => [...prev, entry])
  }, [])

  const remove = useCallback((id) => {
    setStack((prev) => prev.filter((entry) => entry.id !== id))
  }, [])

  const config = stack.length > 0 ? stack[stack.length - 1].config : DEFAULT_CONFIG
  const value = useMemo(() => ({ config, push, remove }), [config, push, remove])

  return <BackgroundContext.Provider value={value}>{children}</BackgroundContext.Provider>
}

/**
 * Read the currently active background config. GradientBlobs uses
 * this instead of hardcoding its own output. Safe to call with no
 * BackgroundProvider mounted (e.g. in isolation/tests) — falls back
 * to the same default.
 */
export function useBackground() {
  const ctx = useContext(BackgroundContext)
  return ctx?.config ?? DEFAULT_CONFIG
}

/**
 * Let a section request a different background variant while it's
 * relevant. Nothing calls this yet (Phase R2 foundation only builds
 * the mechanism); a future section-specific phase can, for example,
 * pair `active` with its own IntersectionObserver so the override
 * only applies while that section is in view, and the previous
 * config reappears automatically once it unmounts or `active` goes
 * false.
 *
 * @param {{variant: string, enabled?: boolean}} config
 * @param {boolean} [active=true] - only registers the override while
 *   true; toggling it off is equivalent to unmounting.
 */
export function useBackgroundOverride(config, active = true) {
  const ctx = useContext(BackgroundContext)
  const id = useId()

  // Stringify so the effect only re-fires when the override's actual
  // content changes, not on every render where the caller passes a
  // fresh object literal.
  const configKey = JSON.stringify(config)

  useEffect(() => {
    if (!ctx || !active) return undefined
    ctx.push({ id, config: JSON.parse(configKey) })
    return () => ctx.remove(id)
  }, [ctx, id, active, configKey])
}

import { useEffect, useRef, useState } from 'react'
import { animate } from 'framer-motion'

/**
 * Animates a number from 0 up to `target` once, the first time
 * `isInView` becomes true. Deliberately takes `isInView` as a prop
 * rather than computing its own viewport ref, so a single shared
 * `useInView` call (e.g. on a stats row) can drive several counters
 * at once instead of each one re-implementing intersection logic.
 *
 * @param {number} target - final value to count up to
 * @param {object} [options]
 * @param {boolean} [options.isInView] - starts the animation on the
 *   rising edge of this flag
 * @param {number} [options.duration] - seconds
 */
export function useCountUp(target, { isInView = false, duration = 1.6 } = {}) {
  const [value, setValue] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!isInView || hasRun.current) return undefined
    hasRun.current = true

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    })

    return () => controls.stop()
  }, [isInView, target, duration])

  return value
}

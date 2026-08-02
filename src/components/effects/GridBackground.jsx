import { useEffect, useRef } from 'react'

/**
 * A faint grid that lives behind every section. Rather than a static
 * decoration, it reveals itself in a soft radius around the cursor —
 * like a flashlight passing over a schematic. This is the site's one
 * signature ambient interaction: quiet everywhere else, alive near
 * the pointer.
 *
 * Mouse position is written straight to CSS custom properties on the
 * element (not React state), so the animation costs zero re-renders.
 */
export default function GridBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let frame = null

    const handlePointerMove = (event) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        node.style.setProperty('--spot-x', `${event.clientX}px`)
        node.style.setProperty('--spot-y', `${event.clientY}px`)
        frame = null
      })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        '--spot-x': '50%',
        '--spot-y': '30%',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage:
          'radial-gradient(420px circle at var(--spot-x) var(--spot-y), black, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(420px circle at var(--spot-x) var(--spot-y), black, transparent 100%)',
        opacity: 0.7,
      }}
    />
  )
}

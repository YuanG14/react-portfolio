import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

/**
 * Replaces the system cursor on fine-pointer (mouse) devices with a
 * small dot glued to the exact pointer position plus a larger ring
 * that eases behind it on a spring, growing slightly over links,
 * buttons, and other interactive elements.
 *
 * No-ops entirely — renders nothing, never hides the system cursor —
 * on touch/coarse-pointer devices and under prefers-reduced-motion,
 * so neither is ever left without a usable pointer.
 */
export default function CustomCursor() {
  const shouldReduceMotion = useReducedMotion()
  const [isSupported] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
  )
  const [isVisible, setIsVisible] = useState(false)
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 })

  useEffect(() => {
    if (!isSupported || shouldReduceMotion) return undefined

    document.documentElement.classList.add('custom-cursor-active')

    function handlePointerMove(event) {
      x.set(event.clientX)
      y.set(event.clientY)
      setIsVisible(true)
      const target = event.target.closest?.('a, button, [role="button"], input, textarea, [tabindex]')
      setIsHoveringInteractive(Boolean(target))
    }

    function handleWindowBlur() {
      setIsVisible(false)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('blur', handleWindowBlur)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('blur', handleWindowBlur)
    }
  }, [isSupported, shouldReduceMotion, x, y])

  if (!isSupported || shouldReduceMotion) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[150] h-2 w-2 rounded-full bg-cyan"
        style={{ x, y, translateX: '-50%', translateY: '-50%', opacity: isVisible ? 1 : 0 }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ scale: isHoveringInteractive ? 1.8 : 1, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="pointer-events-none fixed left-0 top-0 z-[150] h-8 w-8 rounded-full border border-ink/40"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}

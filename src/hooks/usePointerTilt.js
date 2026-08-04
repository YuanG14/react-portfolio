import { useRef } from 'react'
import { useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

/**
 * Shared pointer-tracked tilt + glow physics. Previously reimplemented
 * independently in TiltCard, BrandingCard, and (partially) ProfileCard
 * — same rotateX/rotateY/glow math, three different call sites. Any
 * card that wants the "tilts toward the cursor with a tracking glow"
 * treatment should use this hook instead of hand-rolling it again.
 *
 * Returns the ref to attach to the tilting element, the pointer
 * handlers to wire up, and the motion values to spread into a
 * `style` prop (rotateX/rotateY/glowX/glowY — the last two are meant
 * for a `--glow-x`/`--glow-y` custom property, same pattern TiltCard
 * already uses for its radial-gradient glow layer).
 *
 * @param {number} [intensity=8] - max tilt in degrees. TiltCard and
 *   BrandingCard currently use 8 and 5 respectively — pass the same
 *   value to preserve each card's existing feel when migrating it.
 */
export function usePointerTilt(intensity = 8) {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const pointerX = useMotionValue(0.5)
  const pointerY = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [intensity, -intensity]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-intensity, intensity]), {
    stiffness: 300,
    damping: 30,
  })
  const glowX = useTransform(pointerX, [0, 1], ['0%', '100%'])
  const glowY = useTransform(pointerY, [0, 1], ['0%', '100%'])

  function handlePointerMove(event) {
    if (shouldReduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width)
    pointerY.set((event.clientY - rect.top) / rect.height)
  }

  function handlePointerLeave() {
    pointerX.set(0.5)
    pointerY.set(0.5)
  }

  return {
    ref,
    shouldReduceMotion,
    handlePointerMove,
    handlePointerLeave,
    style: {
      rotateX: shouldReduceMotion ? 0 : rotateX,
      rotateY: shouldReduceMotion ? 0 : rotateY,
      '--glow-x': glowX,
      '--glow-y': glowY,
    },
  }
}

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { HERO_NAME } from '../../data/hero'
import {
  BRANDING_ROLES,
  BRANDING_AVAILABILITY,
  BRANDING_STATEMENT,
  CURRENTLY_BUILDING,
  BRANDING_TECH,
} from '../../data/branding'
import StatusBadge from './StatusBadge'
import TechChip from './TechChip'
import CurrentProject from './CurrentProject'

// Keep to two letters even for a multi-part name like the real
// HERO_NAME ("Yuan Benedict A. Chavez") — the background mark is
// meant to read as a monogram, not spell out every initial.
const initials = HERO_NAME.split(' ')
  .map((part) => part[0])
  .join('')
  .slice(0, 2)

/**
 * About section's premium identity-card visual — replaces the old
 * placeholder (formerly AboutVisual). Lives in the same slot/sizing
 * convention as Hero's ProfileCard so the two floating cards read as
 * one system: a continuous gentle float loop, plus (new here) a
 * cursor-tracking tilt/glow and an animated gradient-border shimmer.
 * Entrance animation is left to the <Reveal> wrapper in About.jsx,
 * same as the component it replaces — this file only owns the
 * always-on float/parallax/shimmer loops.
 *
 * Composed from small reusable pieces (StatusBadge, TechChip,
 * CurrentProject) so each can be restyled or reused independently.
 */
export default function BrandingCard() {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const pointerX = useMotionValue(0.5)
  const pointerY = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [5, -5]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-5, 5]), { stiffness: 300, damping: 30 })
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

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformPerspective: 1200,
          '--glow-x': glowX,
          '--glow-y': glowY,
        }}
        className="group relative rounded-[28px]"
      >
        {/* Cursor-tracking glow */}
        {!shouldReduceMotion && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 rounded-[28px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(37,99,235,0.35), transparent 65%)',
            }}
          />
        )}

        <div className="glass-elevated relative overflow-hidden rounded-[28px] px-6 py-8">
          {/* Background details layer — mesh blobs, dotted grid, a
              reflection streak, and the giant monogram all sit behind
              the real content below. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]"
          >
            <div className="absolute -left-10 -top-16 h-48 w-48 animate-blob-a rounded-full bg-purple/20 blur-3xl" />
            <div className="absolute -right-12 top-1/3 h-40 w-40 animate-blob-b rounded-full bg-cyan/15 blur-3xl" />
            <div className="absolute -bottom-16 left-1/4 h-44 w-44 animate-blob-c rounded-full bg-blue/15 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: 'radial-gradient(rgba(250,250,250,0.4) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
            />

            <div className="absolute -top-1/2 left-[-20%] h-[200%] w-1/3 -rotate-12 bg-gradient-to-b from-white/10 via-white/0 to-transparent" />

            <div className="absolute inset-0 grid place-items-center">
              <span className="select-none font-display text-[7rem] font-medium leading-none text-ink/10">
                {initials}
              </span>
            </div>
          </div>

          {/* Foreground content */}
          <div className="relative flex flex-col gap-6">
            <StatusBadge label={BRANDING_AVAILABILITY} className="self-start" />

            <div>
              <h3 className="font-display text-2xl font-semibold text-ink">{HERO_NAME}</h3>
              <ul className="mt-2 space-y-0.5">
                {BRANDING_ROLES.map((role) => (
                  <li key={role} className="text-sm text-ink-muted">
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {BRANDING_TECH.map((tech, index) => (
                <TechChip
                  key={tech.name}
                  icon={tech.icon}
                  name={tech.name}
                  color={tech.color}
                  delay={index * 0.12}
                />
              ))}
            </div>

            <div className="glass rounded-2xl px-4 py-3.5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                Currently Building
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {CURRENTLY_BUILDING.map((project, index) => (
                  <CurrentProject key={project} name={project} delay={0.1 + index * 0.1} />
                ))}
              </ul>
            </div>

            <p className="text-sm italic text-ink-faint">{BRANDING_STATEMENT}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

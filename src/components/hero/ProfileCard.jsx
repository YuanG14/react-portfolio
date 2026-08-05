import { motion, useReducedMotion } from 'framer-motion'
import { usePointerTilt } from '../../hooks/usePointerTilt'
import { HERO_NAME } from '../../data/hero'
import profilePhoto from '../../assets/profile-photo.jpg'

/**
 * The Hero's identity panel — a premium digital-ID card, not just a
 * photo frame. Promoted to the `.glass-featured` surface tier (see
 * index.css — that tier's own comment names "hero/identity cards" as
 * its intended consumer; nothing used it until now) and wired up to
 * the shared usePointerTilt hook so it tilts/glows toward the cursor
 * the same way ProjectCard/TimelineNode do via TiltCard — same
 * physics, applied directly here (rather than through TiltCard
 * itself) because the floating badges need to bleed past the card's
 * edge, which TiltCard's clipped content layer doesn't allow.
 *
 * The card still floats continuously (a gentle vertical loop) once
 * it has entered, and carries two smaller glass badges that float on
 * their own independent, slightly offset loops. All pointer/looping
 * motion is skipped under prefers-reduced-motion.
 */
export default function ProfileCard() {
  const shouldReduceMotion = useReducedMotion()
  const { ref, handlePointerMove, handlePointerLeave, style } = usePointerTilt(5)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-sm"
    >
      {/* Corner brackets — a quiet engineering-schematic accent that
          frames the card without adding visual weight, using the
          --color-border-glow token (defined in index.css, unused
          elsewhere) so it stays in the site's existing accent
          language rather than a one-off color. Purely decorative. */}
      <span
        aria-hidden="true"
        className="absolute -left-3 -top-3 h-8 w-8 rounded-tl-xl border-l border-t border-[var(--color-border-glow)] opacity-50"
      />
      <span
        aria-hidden="true"
        className="absolute -right-3 -bottom-3 h-8 w-8 rounded-br-xl border-b border-r border-[var(--color-border-glow)] opacity-50"
      />

      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        animate={shouldReduceMotion ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ ...style, transformPerspective: 1000 }}
        className="group glass-featured relative aspect-[4/5] w-full rounded-3xl p-3"
      >
        {/* Pointer-tracking glow — same idiom TiltCard uses for its
            glow layer, kept local here rather than imported since
            TiltCard's clipped inner layer would cut off the badges
            below. */}
        {!shouldReduceMotion && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(96,165,250,0.35), transparent 65%)',
            }}
          />
        )}

        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <img
            src={profilePhoto}
            alt={`Portrait of ${HERO_NAME}`}
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Floating badge: availability. Uses a stronger, more opaque
            backdrop than the generic .glass utility (which is only
            ~3.5% white and relies on the dark page behind it) — these
            two badges sit over the photo itself, so they need to hold
            their own contrast regardless of what's behind them. */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="absolute -left-6 top-10 flex items-center gap-2 rounded-full border border-white/10 bg-bg/80 px-4 py-2.5 text-xs font-medium text-ink shadow-[0_8px_30px_rgba(0,0,0,0.55)] backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-cyan" />
          Available for work
        </motion.div>

        {/* Floating badge: focus areas */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
          className="absolute -right-4 bottom-12 rounded-2xl border border-white/10 bg-bg/80 px-4 py-3 text-xs shadow-[0_8px_30px_rgba(0,0,0,0.55)] backdrop-blur-md"
        >
          <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
            Focus
          </p>
          <p className="mt-1 text-ink-muted">React · Node · UX</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

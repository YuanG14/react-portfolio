import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

/**
 * Three large, heavily-blurred color fields that drift slowly in the
 * background (pure CSS keyframes defined in index.css — no per-frame
 * JS cost for the drift itself). They sit behind the grid's spotlight
 * mask and give the dark canvas depth without competing with
 * foreground content.
 *
 * Each blob also gets a subtle scroll-linked parallax: an outer
 * wrapper's translateY is driven by page scroll progress (via
 * useTransform), at a different rate per blob for a sense of depth,
 * while the inner div keeps its own independent CSS drift animation —
 * kept on separate elements because a CSS `transform` animation would
 * otherwise override the inline `transform` framer-motion sets for
 * parallax on the same element. Blur radius steps down on small
 * viewports (blur is one of the more GPU-expensive properties to
 * paint every frame on lower-power mobile devices).
 */
export default function GradientBlobs() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const yA = useTransform(scrollYProgress, [0, 1], [0, -140])
  const yB = useTransform(scrollYProgress, [0, 1], [0, 180])
  const yC = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div style={{ y: shouldReduceMotion ? 0 : yA }} className="absolute -left-40 top-[-10%]">
        <div
          className="h-[520px] w-[520px] rounded-full opacity-30 blur-[70px] animate-blob-a sm:blur-[120px]"
          style={{ background: 'var(--color-purple)' }}
        />
      </motion.div>

      <motion.div style={{ y: shouldReduceMotion ? 0 : yB }} className="absolute right-[-15%] top-[10%]">
        <div
          className="h-[480px] w-[480px] rounded-full opacity-25 blur-[70px] animate-blob-b sm:blur-[120px]"
          style={{ background: 'var(--color-blue)' }}
        />
      </motion.div>

      <motion.div style={{ y: shouldReduceMotion ? 0 : yC }} className="absolute bottom-[-15%] left-[20%]">
        <div
          className="h-[560px] w-[560px] rounded-full opacity-20 blur-[80px] animate-blob-c sm:blur-[130px]"
          style={{ background: 'var(--color-cyan)' }}
        />
      </motion.div>
    </div>
  )
}

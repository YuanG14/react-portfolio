import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useBackground } from '../../context/BackgroundContext'

/**
 * Three soft, heavily-blurred navy/ice-blue fields that drift slowly
 * in the background (pure CSS keyframes defined in index.css — no
 * per-frame JS cost for the drift itself). Kept low-opacity by design
 * — quiet spotlights rather than visible blobs — so they sit behind
 * the grid's spotlight mask and add depth without competing with
 * foreground content.
 *
 * Renders exactly once, in MainLayout — this is a single scrolling
 * page, not per-section routes, so there's no per-section prop to
 * pass it directly. Which variant it renders instead comes from
 * BackgroundContext (see context/BackgroundContext.jsx), so a
 * section can request a different treatment (or none) without a
 * second background layer ever mounting. Nothing overrides it today,
 * so output is identical to before this existed.
 *
 * Each blob's Tailwind classes are kept as full literal strings
 * (not assembled via template interpolation) so Tailwind's static
 * scanner can still extract them at build time — a dynamically built
 * class like `blur-[${n}px]` would silently produce no CSS.
 */
const VARIANTS = {
  // The original three-blob treatment — unchanged from before this
  // was made configurable.
  default: [
    {
      key: 'a',
      wrapperClassName: 'absolute -left-40 top-[-10%]',
      blobClassName: 'h-[520px] w-[520px] rounded-full opacity-[0.14] blur-[90px] animate-blob-a sm:blur-[140px]',
      color: 'var(--color-purple)',
      parallax: -140,
    },
    {
      key: 'b',
      wrapperClassName: 'absolute right-[-15%] top-[10%]',
      blobClassName: 'h-[480px] w-[480px] rounded-full opacity-[0.11] blur-[90px] animate-blob-b sm:blur-[140px]',
      color: 'var(--color-blue)',
      parallax: 180,
    },
    {
      key: 'c',
      wrapperClassName: 'absolute bottom-[-15%] left-[20%]',
      blobClassName: 'h-[560px] w-[560px] rounded-full opacity-[0.09] blur-[100px] animate-blob-c sm:blur-[150px]',
      color: 'var(--color-cyan)',
      parallax: -100,
    },
  ],
  // No blobs at all — for a section that wants a flatter or entirely
  // custom-lit background of its own.
  none: [],
}

export default function GradientBlobs() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const { variant, enabled } = useBackground()

  const blobs = enabled ? VARIANTS[variant] ?? VARIANTS.default : []

  // Fixed number of hooks regardless of variant/blob count: useTransform
  // is called for a static 3 slots so the variant map can add/remove
  // entries without ever changing hook call order between renders.
  const parallaxA = useTransform(scrollYProgress, [0, 1], [0, blobs[0]?.parallax ?? 0])
  const parallaxB = useTransform(scrollYProgress, [0, 1], [0, blobs[1]?.parallax ?? 0])
  const parallaxC = useTransform(scrollYProgress, [0, 1], [0, blobs[2]?.parallax ?? 0])
  const parallaxValues = [parallaxA, parallaxB, parallaxC]

  if (blobs.length === 0) {
    return <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {blobs.map((blob, index) => (
        <motion.div
          key={blob.key}
          style={{ y: shouldReduceMotion ? 0 : parallaxValues[index] }}
          className={blob.wrapperClassName}
        >
          <div className={blob.blobClassName} style={{ background: blob.color }} />
        </motion.div>
      ))}
    </div>
  )
}

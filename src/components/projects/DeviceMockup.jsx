import { cn } from '../../lib/cn'

/**
 * Wraps a project preview in a device frame instead of showing a bare
 * screenshot. Two variants, used deliberately rather than mixed
 * everywhere (see R5 "avoid overusing mockups"):
 *
 * - 'browser': a compact macOS-style chrome bar (traffic-light dots +
 *   address pill). Used on the standard ProjectCard grid.
 * - 'laptop': the same chrome bar inside a heavier bezel, sitting on
 *   a thin stand/base. Reserved for FeaturedProject, so the flagship
 *   project reads as visibly larger/more premium than the rest.
 *
 * Project previews in data/projects.js are brand logos, not literal
 * app screenshots — the frame is intentionally a generic browser
 * "window" rather than anything device/OS-specific, so it doesn't
 * imply a screenshot that isn't real.
 *
 * @param {'browser'|'laptop'} variant
 */
export default function DeviceMockup({ variant = 'browser', children, className }) {
  const chrome = (
    <div className="flex items-center gap-1.5 border-b border-border bg-bg-secondary/80 px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-ink-faint/30" />
      <span className="h-2 w-2 rounded-full bg-ink-faint/30" />
      <span className="h-2 w-2 rounded-full bg-ink-faint/30" />
      <span className="ml-2 h-4 flex-1 max-w-40 rounded-full bg-bg/60" />
    </div>
  )

  if (variant === 'laptop') {
    return (
      <div className={cn('px-3 pt-3 sm:px-6 sm:pt-6', className)}>
        <div className="overflow-hidden rounded-t-xl border border-b-0 border-border-strong bg-bg shadow-[var(--shadow-card)]">
          {chrome}
          <div className="aspect-[16/10] w-full">{children}</div>
        </div>
        {/* Laptop base: a slim tapered bar to read as a stand, not a real hinge/keyboard render */}
        <div className="mx-auto h-2.5 w-[104%] max-w-none -translate-x-[2%] rounded-b-lg bg-gradient-to-b from-border-strong to-bg-secondary" />
        <div className="mx-auto mt-1 h-1 w-1/3 rounded-full bg-border-strong/60" />
      </div>
    )
  }

  return (
    <div className={cn('overflow-hidden', className)}>
      {chrome}
      <div className="aspect-[16/10] w-full">{children}</div>
    </div>
  )
}

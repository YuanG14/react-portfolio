import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { cn } from '../../lib/cn'

/**
 * Eyebrow + large display heading + animated underline, used to open
 * a section. Extracted from the eyebrow/heading markup that About,
 * Skills, TechStack, Projects, and Contact each currently repeat
 * inline — new sections should reach for this instead of retyping it.
 * (Those existing sections are left as-is per Phase 8 scope; see the
 * "suggested refactoring" note for adopting this there later.)
 *
 * @param {string} eyebrow - small uppercase label above the heading
 * @param {string} title - heading text before the accent span
 * @param {string} [accent] - heading text rendered with the gradient accent
 * @param {string} [description] - optional supporting copy below the heading
 * @param {boolean} [showUnderline] - render the animated underline (off by
 *   default, so retrofitting an existing section's header onto this
 *   component doesn't change how it looks — only Experience opts in)
 * @param {'left'|'center'} [align]
 */
export default function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  showUnderline = false,
  align = 'left',
  className,
}) {
  return (
    <Reveal className={cn(align === 'center' && 'text-center', className)}>
      <p
        className={cn(
          'flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-ink',
          align === 'center' && 'justify-center'
        )}
      >
        <span aria-hidden="true" className="h-[2px] w-8 rounded-full bg-gradient-to-r from-purple to-cyan" />
        {eyebrow}
      </p>

      <h2 className="mt-4 text-display-lg font-display font-medium text-ink">
        {title} {accent && <span className="text-gradient-accent">{accent}</span>}
      </h2>

      {showUnderline && (
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className={cn(
            'mt-5 block h-[2px] w-16 origin-left rounded-full bg-gradient-to-r from-purple via-blue to-cyan',
            align === 'center' && 'mx-auto origin-center'
          )}
        />
      )}

      {description && <p className="mt-5 max-w-xl text-ink-muted">{description}</p>}
    </Reveal>
  )
}

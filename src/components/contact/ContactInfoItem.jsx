import { cn } from '../../lib/cn'

/**
 * A single contact info row (email, location, availability). Mirrors
 * the icon-in-glass-box treatment already used for About's highlight
 * list (see src/sections/About.jsx) so both sections read as one
 * system. Renders as a link when `href` is given, a plain row
 * otherwise.
 */
export default function ContactInfoItem({ icon: Icon, label, value, href, className }) {
  const Tag = href ? 'a' : 'div'
  const isExternal = href?.startsWith('http')

  return (
    <Tag
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={cn(
        'flex items-center gap-4 rounded-2xl px-2 py-2 transition-colors duration-300',
        href && 'hover:bg-surface-hover',
        className
      )}
    >
      <div className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-cyan">
        <Icon aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-ink-faint">{label}</p>
        <p className="mt-0.5 text-sm text-ink">{value}</p>
      </div>
    </Tag>
  )
}

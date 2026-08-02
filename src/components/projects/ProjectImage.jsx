import { cn } from '../../lib/cn'

/**
 * Renders a real screenshot when `src` is provided, otherwise falls
 * back to a branded gradient with the project's initials — the same
 * fallback pattern used by ProfileCard/BrandingCard. Shared by
 * ProjectCard (thumbnail) and ProjectModal (header image) so the
 * fallback logic only exists once.
 */
export default function ProjectImage({ src, title, className }) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${title} preview`}
        loading="lazy"
        decoding="async"
        className={cn('h-full w-full object-cover', className)}
      />
    )
  }

  const initials = title
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')

  return (
    <div
      className={cn(
        'grid h-full w-full place-items-center bg-gradient-to-br from-purple/25 via-blue/10 to-cyan/25',
        className
      )}
    >
      <span className="font-display text-5xl font-medium text-ink/20">{initials}</span>
    </div>
  )
}

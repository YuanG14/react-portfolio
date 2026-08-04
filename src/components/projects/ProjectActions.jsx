import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi'
import Button from '../ui/Button'
import { cn } from '../../lib/cn'

/**
 * Live Demo + GitHub + "View Details" action row. Shared by
 * FeaturedProject and ProjectCard so the button set/order/styling
 * only exists once. `links` entries of '#' (the current placeholder
 * value in data/projects.js) are treated as "not available yet" and
 * rendered disabled rather than as a dead link.
 *
 * @param {{ github?: string, demo?: string }} links
 * @param {() => void} [onViewDetails] - omit to hide the button (the
 *   modal's own footer doesn't need a "View Details" back into itself)
 * @param {'primary'|'secondary'} [size] - 'primary' (default) sizes
 *   for the featured project; 'secondary' is more compact for cards
 */
export default function ProjectActions({ links, onViewDetails, size = 'primary', className }) {
  const hasDemo = links?.demo && links.demo !== '#'
  const hasGithub = links?.github && links.github !== '#'
  const compact = size === 'secondary'

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {onViewDetails && (
        <Button
          type="button"
          onClick={onViewDetails}
          variant="primary"
          className={compact ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm'}
        >
          View Details <FiArrowUpRight aria-hidden="true" />
        </Button>
      )}

      <Button
        as="a"
        href={hasDemo ? links.demo : undefined}
        target={hasDemo ? '_blank' : undefined}
        rel={hasDemo ? 'noopener noreferrer' : undefined}
        aria-disabled={!hasDemo}
        variant="secondary"
        className={cn(
          compact ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm',
          !hasDemo && 'pointer-events-none opacity-40'
        )}
      >
        <FiExternalLink aria-hidden="true" /> Live Demo
      </Button>

      <Button
        as="a"
        href={hasGithub ? links.github : undefined}
        target={hasGithub ? '_blank' : undefined}
        rel={hasGithub ? 'noopener noreferrer' : undefined}
        aria-disabled={!hasGithub}
        variant="secondary"
        className={cn(
          compact ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm',
          !hasGithub && 'pointer-events-none opacity-40'
        )}
      >
        <FiGithub aria-hidden="true" /> GitHub
      </Button>
    </div>
  )
}

import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../ui/Button'
import { cn } from '../../lib/cn'

/**
 * "View Details" action, shared by FeaturedProject and ProjectCard so
 * the button styling only exists once. Live Demo / GitHub buttons
 * were removed from this row per request — data/projects.js still
 * carries `links.demo`/`links.github` in case they're wanted again
 * later, this component just doesn't render them.
 *
 * @param {() => void} onViewDetails
 * @param {'primary'|'secondary'} [size] - 'primary' (default) sizes
 *   for the featured project; 'secondary' is more compact for cards
 */
export default function ProjectActions({ onViewDetails, size = 'primary', className }) {
  const compact = size === 'secondary'

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      <Button
        type="button"
        onClick={onViewDetails}
        variant="primary"
        className={compact ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm'}
      >
        View Details <FiArrowUpRight aria-hidden="true" />
      </Button>
    </div>
  )
}

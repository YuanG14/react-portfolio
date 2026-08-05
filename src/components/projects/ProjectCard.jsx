import { FiZap } from 'react-icons/fi'
import TiltCard from '../ui/TiltCard'
import StatusBadge from '../about/StatusBadge'
import CategoryTag from './CategoryTag'
import TechBadge from './TechBadge'
import DeviceMockup from './DeviceMockup'
import ProjectImage from './ProjectImage'
import ProjectActions from './ProjectActions'

/**
 * A single project showcase card — one of the secondary projects
 * below <FeaturedProject>. All hover polish (tilt, glow, lift,
 * floating shadow) lives in TiltCard; this component only arranges
 * content, so it never duplicates that interaction logic. Uses
 * glass-featured (via TiltCard's contentClassName) rather than the
 * plain .glass ProjectCard previously used, matching the "product
 * showcase" surface the R5 brief called for.
 *
 * @param {object} project - one entry from src/data/projects.js
 * @param {(project: object) => void} onViewDetails - opens the shared
 *   ProjectModal for this project (see sections/Projects.jsx)
 */
export default function ProjectCard({ project, onViewDetails }) {
  const { title, description, image, category, status, tech, keyHighlight } = project

  return (
    <TiltCard className="h-full" contentClassName="glass-featured flex h-full flex-col">
      <DeviceMockup variant="browser" className="border-b border-border">
        <ProjectImage
          src={image}
          title={title}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </DeviceMockup>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge label={status} />
          <CategoryTag label={category} />
        </div>

        <h3 className="mt-4 font-display text-xl font-medium text-ink">{title}</h3>
        <p className="mt-2 text-sm text-ink-muted">{description}</p>

        {keyHighlight && (
          <div className="mt-4 flex items-start gap-2 rounded-xl bg-surface px-3 py-2.5 text-sm text-ink-muted">
            <FiZap aria-hidden="true" className="mt-0.5 shrink-0 text-cyan" />
            {keyHighlight}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <ProjectActions onViewDetails={() => onViewDetails(project)} size="secondary" />
        </div>
      </div>
    </TiltCard>
  )
}

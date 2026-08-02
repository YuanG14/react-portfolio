import { FiArrowUpRight } from 'react-icons/fi'
import TiltCard from '../ui/TiltCard'
import Button from '../ui/Button'
import SkillPill from '../skills/SkillPill'
import ProjectImage from './ProjectImage'

/**
 * A single project showcase card. All hover polish (tilt, glow,
 * lift, floating shadow) lives in TiltCard — this component only
 * arranges content, so it never duplicates that interaction logic.
 *
 * @param {object} project - one entry from src/data/projects.js
 * @param {(project: object) => void} onViewDetails - opens the shared
 *   ProjectModal for this project (see sections/Projects.jsx)
 */
export default function ProjectCard({ project, onViewDetails }) {
  const { title, description, image, tech, highlights } = project

  return (
    <TiltCard className="h-full" contentClassName="glass flex h-full flex-col">
      <div className="aspect-[16/10] w-full">
        <ProjectImage src={image} title={title} />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="font-display text-xl font-medium text-ink">{title}</h3>
        <p className="mt-2 text-sm text-ink-muted">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <SkillPill key={item} label={item} className="px-3 py-1 text-xs" />
          ))}
        </div>

        {highlights?.length > 0 && (
          <ul className="mt-5 space-y-1.5">
            {highlights.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                {point}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex items-center border-t border-border pt-6">
          <Button
            type="button"
            onClick={() => onViewDetails(project)}
            variant="primary"
            className="ml-auto px-4 py-2 text-xs"
          >
            View Details <FiArrowUpRight aria-hidden="true" />
          </Button>
        </div>
      </div>
    </TiltCard>
  )
}

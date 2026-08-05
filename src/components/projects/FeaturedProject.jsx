import { hoverFeature } from '../../animations/variants'
import { motion } from 'framer-motion'
import { usePointerTilt } from '../../hooks/usePointerTilt'
import Reveal from '../layout/Reveal'
import StatusBadge from '../about/StatusBadge'
import CategoryTag from './CategoryTag'
import TechBadge from './TechBadge'
import DeviceMockup from './DeviceMockup'
import ProjectImage from './ProjectImage'
import ProjectActions from './ProjectActions'

/**
 * The single "flagship" project (data/projects.js: `featured: true`),
 * shown large above the standard ProjectCard grid so it reads as the
 * strongest proof point rather than one tile among equals.
 *
 * Reuses the same tilt/glow physics as TiltCard (via usePointerTilt
 * directly, since the split image+content layout here doesn't fit
 * TiltCard's single-children wrapper) so the interaction still feels
 * like the same design system, just at a bigger scale — glass-featured
 * + --shadow-featured, the tier reserved for exactly this kind of
 * surface.
 *
 * @param {object} project - a PROJECTS entry with `featured: true`
 * @param {(project: object) => void} onViewDetails
 */
export default function FeaturedProject({ project, onViewDetails }) {
  const { ref, shouldReduceMotion, handlePointerMove, handlePointerLeave, style } = usePointerTilt(4)
  const { title, tagline, image, category, status, tech, highlights } = project

  return (
    <Reveal>
      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        {...hoverFeature}
        style={{ ...style, transformPerspective: 1200 }}
        className="glass-featured group relative grid gap-0 overflow-hidden rounded-3xl lg:grid-cols-2"
      >
        {!shouldReduceMotion && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(37,99,235,0.35), transparent 65%)',
            }}
          />
        )}

        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge label={status} />
            <CategoryTag label={category} />
          </div>

          <h3 className="mt-6 font-display text-display-sm font-medium text-ink">{title}</h3>
          <p className="mt-3 text-ink-muted">{tagline}</p>

          {highlights?.length > 0 && (
            <ul className="mt-6 space-y-2">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-ink-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {tech.map((item) => (
              <TechBadge key={item} label={item} />
            ))}
          </div>

          <ProjectActions onViewDetails={() => onViewDetails(project)} className="mt-8" />
        </div>

        <div className="flex items-center border-t border-border bg-bg-secondary/40 lg:border-l lg:border-t-0">
          <DeviceMockup variant="laptop" className="w-full">
            <ProjectImage src={image} title={title} className="transition-transform duration-700 group-hover:scale-105" />
          </DeviceMockup>
        </div>
      </motion.div>
    </Reveal>
  )
}

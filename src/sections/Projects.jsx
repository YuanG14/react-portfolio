import { useState } from 'react'
import Section from '../components/layout/Section'
import Reveal from '../components/layout/Reveal'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectModal from '../components/projects/ProjectModal'
import { PROJECTS } from '../data/projects'

/**
 * Projects section. Holds exactly one `activeProject` value and one
 * <ProjectModal> instance — clicking "View Details" on any card just
 * sets which project that shared modal displays, rather than each
 * card mounting its own.
 */
export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <Section id="projects">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">Projects</p>
        <h2 className="mt-4 text-display-lg font-display font-medium text-ink">
          Things I&apos;ve <span className="text-gradient-accent">built</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 0.1}>
            <ProjectCard project={project} onViewDetails={setActiveProject} />
          </Reveal>
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </Section>
  )
}

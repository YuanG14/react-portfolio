import { useState } from 'react'
import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
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
      <SectionHeader eyebrow="Projects" title="Things I've" accent="built" />

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

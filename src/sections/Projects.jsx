import { useState } from 'react'
import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import Reveal from '../components/layout/Reveal'
import FeaturedProject from '../components/projects/FeaturedProject'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectModal from '../components/projects/ProjectModal'
import { PROJECTS } from '../data/projects'

const featuredProject = PROJECTS.find((project) => project.featured)
const secondaryProjects = PROJECTS.filter((project) => !project.featured)

/**
 * Projects section. The one `featured: true` project (see
 * data/projects.js) renders large via <FeaturedProject> above the
 * rest, which render as a balanced grid of <ProjectCard>s — desktop:
 * featured project full-width, secondary projects two-up; tablet:
 * still two-up; mobile: everything stacks to one column. Holds
 * exactly one `activeProject` value and one <ProjectModal> instance —
 * clicking "View Details" on any card/featured project just sets
 * which project that shared modal displays, rather than each card
 * mounting its own.
 */
export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <Section id="projects" className="section-bg-projects">
      <SectionHeader eyebrow="Projects" title="Things I've" accent="built" />

      {featuredProject && (
        <div className="mt-12">
          <FeaturedProject project={featuredProject} onViewDetails={setActiveProject} />
        </div>
      )}

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {secondaryProjects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 0.1}>
            <ProjectCard project={project} onViewDetails={setActiveProject} />
          </Reveal>
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </Section>
  )
}

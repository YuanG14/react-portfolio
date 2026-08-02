import Section from '../components/layout/Section'
import Reveal from '../components/layout/Reveal'
import TechCard from '../components/techstack/TechCard'
import { TECH_STACK } from '../data/techStack'

/**
 * Tech Stack section: a grid of floating TechCards. Float
 * duration/delay are varied per card (via index) so the grid reads as
 * organically alive rather than a synchronized bounce.
 */
export default function TechStack() {
  return (
    <Section id="tech-stack">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">Tech Stack</p>
        <h2 className="mt-4 text-display-lg font-display font-medium text-ink">
          Tools I <span className="text-gradient-accent">reach for</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
        {TECH_STACK.map((tech, index) => (
          <Reveal key={tech.name} delay={(index % 5) * 0.06}>
            <TechCard
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
              description={tech.description}
              level={tech.level}
              floatDuration={4.5 + (index % 3) * 0.8}
              floatDelay={(index % 4) * 0.2}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

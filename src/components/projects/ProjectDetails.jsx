import SkillPill from '../skills/SkillPill'

/**
 * Declarative map of every detail section a project can have.
 * `type` controls how the value renders: plain string -> paragraph,
 * 'list' -> bullet list, 'pills' -> SkillPill row. Adding, removing,
 * or reordering a section is a one-line change here — never a
 * copy-pasted JSX block per section.
 */
const DETAIL_SECTIONS = [
  { key: 'overview', label: 'Overview' },
  { key: 'problem', label: 'Problem' },
  { key: 'solution', label: 'Solution' },
  { key: 'features', label: 'Features', type: 'list' },
  { key: 'technologies', label: 'Technologies', type: 'pills' },
  { key: 'challenges', label: 'Challenges' },
  { key: 'futureImprovements', label: 'Future Improvements', type: 'list' },
]

/**
 * Renders a project's `details` object as a stack of labeled
 * sections. Used inside ProjectCard's expanded state.
 *
 * @param {object} details - project.details from src/data/projects.js
 */
export default function ProjectDetails({ details }) {
  return (
    <div className="space-y-6">
      {DETAIL_SECTIONS.map(({ key, label, type }) => {
        const content = details?.[key]
        if (!content || (Array.isArray(content) && content.length === 0)) return null

        return (
          <div key={key}>
            <h4 className="font-display text-sm font-medium uppercase tracking-wider text-ink-faint">
              {label}
            </h4>

            {type === 'list' && (
              <ul className="mt-2 space-y-1.5">
                {content.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {type === 'pills' && (
              <div className="mt-3 flex flex-wrap gap-2">
                {content.map((item) => (
                  <SkillPill key={item} label={item} className="px-3 py-1 text-xs" />
                ))}
              </div>
            )}

            {!type && <p className="mt-2 text-sm text-ink-muted">{content}</p>}
          </div>
        )
      })}
    </div>
  )
}

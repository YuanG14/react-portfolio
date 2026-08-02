/**
 * Header for one skill category (Frontend/Backend/Tools): an icon
 * tile plus title and description. Deliberately mirrors the
 * icon-tile pattern already used for ABOUT_HIGHLIGHTS in About.jsx
 * (`glass` square, `text-cyan` icon) so this reads as the same
 * design language, not a new pattern.
 *
 * @param {React.ComponentType} icon
 * @param {string} title
 * @param {string} description
 */
export default function SkillCategoryHeader({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-cyan">
        <Icon aria-hidden="true" className="text-lg" />
      </div>
      <div>
        <h3 className="font-display text-base font-medium text-ink">{title}</h3>
        <p className="mt-1 text-sm text-ink-muted">{description}</p>
      </div>
    </div>
  )
}

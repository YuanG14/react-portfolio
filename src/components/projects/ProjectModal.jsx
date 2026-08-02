import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'
import { scaleIn } from '../../animations/variants'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import ProjectImage from './ProjectImage'
import SkillPill from '../skills/SkillPill'
import Button from '../ui/Button'

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
 * A single shared modal for the whole Projects section — Projects.jsx
 * mounts exactly one instance and swaps `project` in/out, rather than
 * mounting one modal per card. Renders via a portal to <body> so it
 * escapes any section's stacking context, and is closable by
 * backdrop click, the close button, or Escape.
 *
 * @param {object|null} project - the active project, or null when closed
 * @param {() => void} onClose
 */
export default function ProjectModal({ project, onClose }) {
  const isOpen = Boolean(project)
  useBodyScrollLock(isOpen)

  useEffect(() => {
    if (!isOpen) return undefined
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex justify-center overflow-y-auto bg-bg/80 p-4 backdrop-blur-sm md:p-8"
        >
          {/*
            `my-auto` centers vertically without `items-center` on the
            parent — align-items:center clips the top of anything
            taller than the viewport instead of letting you scroll to
            it, a well-known flexbox+overflow bug. `my-auto` avoids it:
            it centers when there's room and degrades to normal
            top-anchored scrolling when there isn't.
            `max-h-[85vh]` + `flex-col` on this panel, with the content
            block below set to `flex-1 overflow-y-auto`, keeps the
            whole dialog within the viewport — the image stays fully
            visible and only the text area scrolls if needed.
          */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project?.title}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(event) => event.stopPropagation()}
            className="glass relative my-auto flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl"
          >
            <button
              type="button"
              aria-label="Close dialog"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-bg/70 text-ink backdrop-blur transition-colors hover:bg-bg"
            >
              <FiX size={18} />
            </button>

            <div className="aspect-[16/9] w-full shrink-0">
              <ProjectImage src={project?.image} title={project?.title ?? ''} />
            </div>

            <div
              className="flex-1 overflow-y-auto p-6 md:p-8"
              onWheel={(event) => event.stopPropagation()}
              onTouchMove={(event) => event.stopPropagation()}
            >
              <h3 className="font-display text-2xl font-medium text-ink">{project?.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{project?.description}</p>

              <div className="mt-6 space-y-6">
                {DETAIL_SECTIONS.map(({ key, label, type }) => {
                  const content = project?.details?.[key]
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

              <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
                {project?.links?.github && (
                  <Button
                    as="a"
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                    className="px-4 py-2 text-xs"
                  >
                    <FiGithub aria-hidden="true" /> GitHub
                  </Button>
                )}
                {project?.links?.demo && (
                  <Button
                    as="a"
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                    className="px-4 py-2 text-xs"
                  >
                    <FiExternalLink aria-hidden="true" /> Live Demo
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

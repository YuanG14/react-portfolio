import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { scaleIn } from '../../animations/variants'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import ProjectImage from './ProjectImage'
import ProjectDetails from './ProjectDetails'
import ProjectActions from './ProjectActions'
import StatusBadge from '../about/StatusBadge'
import CategoryTag from './CategoryTag'

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
              {project && (
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge label={project.status} />
                  <CategoryTag label={project.category} />
                </div>
              )}

              <h3 className="mt-4 font-display text-2xl font-medium text-ink">{project?.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{project?.description}</p>

              <div className="mt-6">
                <ProjectDetails details={project?.details} />
              </div>

              {project && (
                <ProjectActions links={project.links} size="secondary" className="mt-8" />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

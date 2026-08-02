import { cn } from '../../lib/cn'

/**
 * Shared label + inline-error chrome for Input and TextArea (see
 * Input.jsx / TextArea.jsx) so the two only differ in which native
 * form element they render — this wrapper markup isn't duplicated
 * between them.
 */
export default function FieldShell({ label, id, error, className, children }) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-sm font-medium text-ink-muted">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

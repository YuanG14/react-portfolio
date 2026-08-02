import { forwardRef } from 'react'
import { cn } from '../../lib/cn'
import FieldShell from './FieldShell'

/**
 * The single multi-line text field for the whole site (the Contact
 * form's message field now, any future form later). Shares its
 * label/error chrome and field styling with Input via FieldShell so
 * the two read as one system rather than two one-off components.
 *
 * Forwards its ref so react-hook-form's `register()` can attach
 * directly to the underlying <textarea>.
 *
 * @param {string} className - applied to the outer wrapper (layout, e.g. `sm:col-span-2`)
 * @param {string} textareaClassName - applied to the <textarea> element itself
 */
const TextArea = forwardRef(function TextArea(
  { label, id, error, className, textareaClassName, rows = 5, ...props },
  ref
) {
  return (
    <FieldShell label={label} id={id} error={error} className={className}>
      <textarea
        id={id}
        ref={ref}
        rows={rows}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'glass w-full resize-none rounded-xl px-4 py-3 text-sm text-ink outline-none transition-colors duration-300 placeholder:text-ink-faint focus:border-cyan/60',
          error && 'border-red-400/60 focus:border-red-400/60',
          textareaClassName
        )}
        {...props}
      />
    </FieldShell>
  )
})

export default TextArea

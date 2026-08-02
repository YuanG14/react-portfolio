import { forwardRef } from 'react'
import { cn } from '../../lib/cn'
import FieldShell from './FieldShell'

/**
 * The single text input for the whole site (name/email/subject in
 * the Contact form now, any future form later) — same "one component
 * per primitive" convention as Button. Invalid state gets a red
 * border and, via FieldShell, an inline error message beneath it.
 *
 * Forwards its ref so react-hook-form's `register()` can attach
 * directly to the underlying <input> (react-hook-form is
 * uncontrolled by default).
 *
 * @param {string} className - applied to the outer wrapper (layout, e.g. `sm:col-span-2`)
 * @param {string} inputClassName - applied to the <input> element itself
 */
const Input = forwardRef(function Input(
  { label, id, error, className, inputClassName, ...props },
  ref
) {
  return (
    <FieldShell label={label} id={id} error={error} className={className}>
      <input
        id={id}
        ref={ref}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'glass w-full rounded-xl px-4 py-3 text-sm text-ink outline-none transition-colors duration-300 placeholder:text-ink-faint focus:border-cyan/60',
          error && 'border-red-400/60 focus:border-red-400/60',
          inputClassName
        )}
        {...props}
      />
    </FieldShell>
  )
})

export default Input

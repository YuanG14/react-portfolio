import { forwardRef } from 'react'
import { cn } from '../../lib/cn'

/**
 * Single text input / textarea used by the Contact form: label, glass
 * field, and inline error message in one place so Contact.jsx only
 * wires up react-hook-form's `register(...)` + the matching error per
 * field instead of repeating this markup for every one of them.
 *
 * Forwards its ref so `register()` can attach directly to the
 * underlying <input>/<textarea> (react-hook-form is uncontrolled by
 * default).
 *
 * @param {'input'|'textarea'} as
 */
const FormField = forwardRef(function FormField(
  { label, id, error, as = 'input', className, inputClassName, ...props },
  ref
) {
  const Tag = as

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-sm font-medium text-ink-muted">
        {label}
      </label>
      <Tag
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
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
})

export default FormField

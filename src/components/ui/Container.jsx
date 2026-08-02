import { cn } from '../../lib/cn'

/**
 * Centralizes the page's max-width and horizontal padding so every
 * section lines up. Change the values here once instead of in every
 * section file.
 */
export default function Container({ as: Tag = 'div', className, children }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-6xl px-6 md:px-10', className)}>
      {children}
    </Tag>
  )
}

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combine conditional class names (clsx) and safely resolve any
 * conflicting Tailwind utility classes (tailwind-merge).
 * Use this instead of raw template strings whenever a component
 * accepts a `className` prop or has conditional variants.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

import { z } from 'zod'

/**
 * Validation for the Contact form (src/sections/Contact.jsx). Kept
 * next to the form it validates rather than in a shared /lib folder —
 * nothing else in the app currently needs it, and colocating makes
 * the two easy to keep in sync if fields ever change.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter at least 2 characters')
    .max(80, 'Keep it under 80 characters'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  subject: z
    .string()
    .trim()
    .min(2, 'Add a short subject')
    .max(120, 'Keep it under 120 characters'),
  message: z
    .string()
    .trim()
    .min(20, 'Message should be at least 20 characters')
    .max(2000, 'Keep it under 2000 characters'),
})

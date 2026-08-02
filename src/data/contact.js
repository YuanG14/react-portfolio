import { FiMail, FiMapPin, FiClock } from 'react-icons/fi'

/**
 * Info rows shown beside the Contact form (src/sections/Contact.jsx).
 * Placeholders — swap in real details when content is finalized, same
 * convention as constants/site.js and data/socialLinks.js.
 */
export const CONTACT_INFO = [
  {
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
    icon: FiMail,
  },
  {
    label: 'Location',
    value: 'Remote / worldwide',
    icon: FiMapPin,
  },
  {
    label: 'Availability',
    value: 'Open to new opportunities',
    icon: FiClock,
  },
]

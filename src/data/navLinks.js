/**
 * Single source of truth for the site's primary sections. Both the
 * Navbar and Footer read from this list instead of hardcoding anchors
 * separately. `href` targets the matching section id — real sections
 * (Hero, About, Projects, Contact) are added in later phases with
 * these exact ids.
 */
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

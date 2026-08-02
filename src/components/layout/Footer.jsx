import { NAV_LINKS } from '../../data/navLinks'
import { SOCIAL_LINKS } from '../../data/socialLinks'
import { SITE_NAME, SITE_TAGLINE } from '../../constants/site'
import Container from '../ui/Container'

/**
 * Closes out the page. Reads from the same NAV_LINKS as the Navbar so
 * the two never fall out of sync. (Back-to-top now lives in the
 * floating ScrollToTopButton, rendered globally in MainLayout, rather
 * than as a link here.)
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg text-ink">{SITE_NAME}</p>
          <p className="mt-1 text-sm text-ink-muted">{SITE_TAGLINE}</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full text-ink-muted transition-colors hover:bg-surface-hover hover:text-ink"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-xs text-ink-faint md:flex-row">
        <p>
          © {year} {SITE_NAME}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import Section from '../components/layout/Section'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">404</p>
      <h1 className="mt-4 text-display-md font-display font-medium text-ink">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-ink-muted">
        The page you're looking for doesn't exist.
      </p>
      <Button as={Link} to="/" className="mt-8">
        Back home
      </Button>
    </Section>
  )
}

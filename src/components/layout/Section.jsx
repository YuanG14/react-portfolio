import { cn } from '../../lib/cn'
import Container from '../ui/Container'

/**
 * The wrapper every top-level section (Hero, About, Projects, Timeline,
 * Contact...) should use. Handles the anchor id Navbar/Footer links
 * point to, consistent vertical rhythm (`.section-py`), and the shared
 * width constraint — so section files only ever contain their own
 * content, never layout boilerplate.
 */
export default function Section({ id, className, containerClassName, children }) {
  return (
    <section id={id} className={cn('section-py relative', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

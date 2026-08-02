/**
 * Keyboard-only "skip to content" link — invisible until focused,
 * then slides into view at the top-left so keyboard/screen-reader
 * users can bypass the Navbar without tabbing through every link.
 * Targets `#main-content`, the id set on <main> in MainLayout.jsx.
 */
export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="glass fixed left-4 top-4 z-[100] -translate-y-24 rounded-full px-5 py-2.5 text-sm text-ink transition-transform duration-200 focus:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
    >
      Skip to content
    </a>
  )
}

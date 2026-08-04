import { AnimatePresence, motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import { cn } from '../../lib/cn'

/**
 * Dark/light switch. A small icon-only button so it drops into
 * Navbar's existing layout (desktop link row, mobile menu panel)
 * without needing new layout work — same size/shape convention as
 * ScrollToTopButton's circular icon buttons.
 */
export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className={cn(
        'glass relative grid h-10 w-10 place-items-center overflow-hidden rounded-full text-ink-muted transition-colors duration-300 hover:text-ink',
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="grid place-items-center"
        >
          {isLight ? <FiSun size={17} aria-hidden="true" /> : <FiMoon size={17} aria-hidden="true" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

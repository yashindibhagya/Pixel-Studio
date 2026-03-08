'use client'

import { useTheme } from '@/components/ThemeProvider'
import { useCursorHover } from '@/components/Cursor'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const hover = useCursorHover()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      {...hover}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb" data-theme={theme} />
      </span>
      <span className="theme-toggle-icons" aria-hidden>
        <span className="theme-toggle-sun">☀</span>
        <span className="theme-toggle-moon">☽</span>
      </span>
    </button>
  )
}

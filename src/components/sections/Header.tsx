'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCursorHover } from '@/components/Cursor'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const hover = useCursorHover()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={scrolled ? 'scrolled header-bar' : 'header-bar'}>
        <Link href="#" className="logo" {...hover}>
          Pixel<span>.</span>Studio
        </Link>
        <div className="header-right">
          <ThemeToggle />
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            {...hover}
          >
            <span className="menu-toggle-label">Menu</span>
            <span className="menu-toggle-indicator">{menuOpen ? '×' : '+'}</span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="menu-overlay">
          <div className="menu-overlay-inner">
            <div className="menu-panel">
              <ul className="menu-links">
                <li>
                  <Link href="#top" onClick={() => setMenuOpen(false)} {...hover}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" onClick={() => setMenuOpen(false)} {...hover}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#benefits" onClick={() => setMenuOpen(false)} {...hover}>
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#work" onClick={() => setMenuOpen(false)} {...hover}>
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" onClick={() => setMenuOpen(false)} {...hover}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#reviews" onClick={() => setMenuOpen(false)} {...hover}>
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#faqs" onClick={() => setMenuOpen(false)} {...hover}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#contact" onClick={() => setMenuOpen(false)} {...hover}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="menu-gallery">
              <div className="menu-gallery-card">
                <div className="menu-gallery-tag">Selected work</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useCursorHover } from '@/components/Cursor'

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const hover = useCursorHover()
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav className={`hdr-bar${scrolled ? ' scrolled' : ''}`}>
        <div className="hdr-inner">
          <Link href="#" className="hdr-logo" {...hover}>
            Devora<span className="hdr-logo-dot">.</span>Labs
          </Link>

          <span className="hdr-center">Creative Digital Agency</span>

          <button
            type="button"
            className={`hdr-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            {...hover}
            aria-label="Toggle menu"
          >
            <span className="hdr-toggle-label">{menuOpen ? 'Close' : 'Menu'}</span>
            <span className="hdr-toggle-icon">
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      {/* ── FULLSCREEN OVERLAY ── */}
      <div ref={overlayRef} className={`menu-overlay${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>

        {/* LEFT — nav links */}
        <div className="menu-left">
          <span className="menu-eyebrow">Navigation</span>

          <ul className="menu-nav">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={hoveredIndex === i ? 'is-hovered' : ''}
                  {...hover}
                >
                  <span className="link-label-wrap">
                    <span className="link-num">0{i + 1}</span>
                    {link.label}
                  </span>
                  <span className="link-arrow">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — info / decoration */}
        <div className="menu-right">
          <div className="menu-info">
            <div className="menu-tag">
              <span className="menu-tag-dot" />
              Available for projects
            </div>

            <div className="menu-stat-grid">
              <div>
                <div className="menu-stat-label">Successful Projects</div>
                <div className="menu-stat-value">10<span>+</span></div>
              </div>
              <div>
                <div className="menu-stat-label">Client Satisfaction</div>
                <div className="menu-stat-value">100<span>%</span></div>
              </div>
              <div>
                <div className="menu-stat-label">Hours of Development</div>
                <div className="menu-stat-value">10,000<span>+</span></div>
              </div>
              <div>
                <div className="menu-stat-label">Support & Maintenance</div>
                <div className="menu-stat-value">24/<span>7</span></div>
              </div>
            </div>

            <Link href="#contact" onClick={() => setMenuOpen(false)} className="menu-cta" {...hover}>
              Start a project
              <span className="menu-cta-arrow">→</span>
            </Link>
          </div>

          <span className="menu-big-num">DL</span>
        </div>

      </div>
    </>
  )
}
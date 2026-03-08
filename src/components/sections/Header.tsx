'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useCursorHover } from '@/components/Cursor'

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400&family=Italiana&display=swap');

        .hdr-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2.5rem;
          height: 72px;
          transition: background 0.4s ease, backdrop-filter 0.4s ease;
          background: rgba(248, 246, 252, 0.92);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(12, 2, 26, 0.08);
        }
        .hdr-bar.scrolled {
          background: rgba(8, 8, 8, 0.85);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        /* Logo – dark by default for visibility on light background */
        .hdr-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem;
          letter-spacing: 0.08em;
          color: #0C021A;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
          position: relative;
          z-index: 101;
        }
        .hdr-bar.scrolled .hdr-logo { color: #fff; }
        .hdr-logo-dot {
          color: #0088A3;
          font-size: 2rem;
          line-height: 1;
          margin-bottom: 2px;
        }
        .hdr-bar.scrolled .hdr-logo-dot { color: #e8ff47; }

        /* Nav center (optional tagline) */
        .hdr-center {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(12, 2, 26, 0.5);
          display: none;
        }
        .hdr-bar.scrolled .hdr-center { color: rgba(255,255,255,0.28); }
        @media (min-width: 768px) { .hdr-center { display: block; } }

        /* Burger / Close – dark by default for visibility on light background */
        .hdr-toggle {
          background: none;
          border: 1px solid rgba(12, 2, 26, 0.2);
          color: #0C021A;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px 8px 18px;
          border-radius: 2px;
          transition: border-color 0.25s, background 0.25s, color 0.25s;
          position: relative;
          z-index: 101;
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .hdr-bar.scrolled .hdr-toggle {
          border-color: rgba(255,255,255,0.15);
          color: #fff;
        }
        .hdr-toggle:hover {
          border-color: #0088A3;
          background: rgba(0, 136, 163, 0.08);
        }
        .hdr-bar.scrolled .hdr-toggle:hover {
          border-color: #e8ff47;
          background: rgba(232,255,71,0.06);
        }
        .hdr-toggle-icon {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 18px;
        }
        .hdr-toggle-icon span {
          display: block;
          height: 1.5px;
          background: #0C021A;
          border-radius: 1px;
          transition: transform 0.35s cubic-bezier(.77,0,.18,1), opacity 0.25s, width 0.35s, background 0.25s;
          transform-origin: center;
        }
        .hdr-bar.scrolled .hdr-toggle-icon span { background: #fff; }
        .hdr-toggle-icon span:nth-child(1) { width: 18px; }
        .hdr-toggle-icon span:nth-child(2) { width: 12px; }
        .hdr-toggle.open .hdr-toggle-icon span:nth-child(1) {
          transform: translateY(5.5px) rotate(45deg);
          width: 18px;
        }
        .hdr-toggle.open .hdr-toggle-icon span:nth-child(2) {
          transform: translateY(-5.5px) rotate(-45deg);
          width: 18px;
        }

        /* ── OVERLAY ── */
        .menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 99;
          display: grid;
          grid-template-columns: 1fr 1fr;
          pointer-events: none;
          overflow: hidden;
        }
        .menu-overlay.is-open { pointer-events: all; }

        /* Left panel */
        .menu-left {
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 8rem 3rem 3.5rem;
          transform: translateX(-100%);
          transition: transform 0.65s cubic-bezier(.77,0,.18,1);
          border-right: 1px solid rgba(255,255,255,0.07);
          position: relative;
          overflow: hidden;
        }
        .menu-left::before {
          content: '';
          position: absolute;
          top: -60px; right: -40px;
          width: 220px; height: 220px;
          background: radial-gradient(circle, rgba(232,255,71,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .menu-overlay.is-open .menu-left {
          transform: translateX(0);
        }

        /* Right panel */
        .menu-right {
          background: #111;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 8rem 3rem 3.5rem;
          transform: translateX(100%);
          transition: transform 0.65s cubic-bezier(.77,0,.18,1) 0.05s;
        }
        .menu-overlay.is-open .menu-right {
          transform: translateX(0);
        }

        /* Big index label */
        .menu-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .menu-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.2);
        }

        /* Nav list */
        .menu-nav { list-style: none; padding: 0; margin: 0; }
        .menu-nav li {
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .menu-nav li:last-child { border-bottom: 1px solid rgba(255,255,255,0.07); }

        .menu-nav a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 0;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          letter-spacing: 0.05em;
          line-height: 1;
          transition: color 0.2s;
          transform: translateY(110%);
        }
        .menu-overlay.is-open .menu-nav a {
          animation: linkSlide 0.55s cubic-bezier(.77,0,.18,1) forwards;
        }
        .menu-nav li:nth-child(1) a { animation-delay: 0.15s; }
        .menu-nav li:nth-child(2) a { animation-delay: 0.18s; }
        .menu-nav li:nth-child(3) a { animation-delay: 0.21s; }
        .menu-nav li:nth-child(4) a { animation-delay: 0.24s; }
        .menu-nav li:nth-child(5) a { animation-delay: 0.27s; }
        .menu-nav li:nth-child(6) a { animation-delay: 0.30s; }
        .menu-nav li:nth-child(7) a { animation-delay: 0.33s; }
        .menu-nav li:nth-child(8) a { animation-delay: 0.36s; }

        @keyframes linkSlide {
          from { transform: translateY(110%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        .menu-nav a:hover,
        .menu-nav a.is-hovered {
          color: #e8ff47;
        }
        .menu-nav a .link-arrow {
          font-size: 1rem;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.2s, transform 0.2s;
          color: #e8ff47;
        }
        .menu-nav a:hover .link-arrow { opacity: 1; transform: translateX(0); }

        /* Index number beside each link */
        .menu-nav a .link-num {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.2);
          align-self: flex-start;
          margin-top: 6px;
          margin-right: 8px;
          transition: color 0.2s;
        }
        .menu-nav a:hover .link-num { color: rgba(232,255,71,0.5); }
        .link-label-wrap { display: flex; align-items: center; gap: 8px; }

        /* Right side – decorative info block */
        .menu-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.5s 0.4s ease, transform 0.5s 0.4s ease;
        }
        .menu-overlay.is-open .menu-info {
          opacity: 1; transform: translateY(0);
        }

        .menu-big-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(6rem, 12vw, 10rem);
          line-height: 0.85;
          color: rgba(255,255,255,0.04);
          pointer-events: none;
          user-select: none;
          position: absolute;
          bottom: 3.5rem; right: 2.5rem;
          transition: color 0.3s;
        }
        .menu-overlay.is-open .menu-big-num { color: rgba(232,255,71,0.07); }

        .menu-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(232,255,71,0.3);
          color: #e8ff47;
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 2px;
          width: fit-content;
        }
        .menu-tag-dot {
          width: 5px; height: 5px;
          background: #e8ff47;
          border-radius: 50%;
          animation: blink 1.6s infinite;
        }
        @keyframes blink {
          0%,100% { opacity: 1; } 50% { opacity: 0.2; }
        }

        .menu-stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem 1rem;
        }
        .menu-stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 4px;
        }
        .menu-stat-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.9rem;
          letter-spacing: 0.04em;
          color: #fff;
          line-height: 1;
        }
        .menu-stat-value span { color: #e8ff47; }

        .menu-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #e8ff47;
          color: #0a0a0a;
          text-decoration: none;
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 13px 22px;
          border-radius: 2px;
          font-weight: 500;
          transition: background 0.2s, transform 0.2s;
          width: fit-content;
        }
        .menu-cta:hover { background: #fff; transform: translateX(3px); }
        .menu-cta-arrow { font-size: 0.85rem; }

        @media (max-width: 640px) {
          .menu-overlay { grid-template-columns: 1fr; }
          .menu-right { display: none; }
          .menu-left { padding: 7rem 1.8rem 3rem; }
          .hdr-bar { padding: 0 1.4rem; }
          .hdr-toggle-label { display: none; }
        }
      `}</style>

      {/* ── NAV BAR ── */}
      <nav className={`hdr-bar${scrolled ? ' scrolled' : ''}`}>
        <Link href="#" className="hdr-logo" {...hover}>
          Pixel<span className="hdr-logo-dot">.</span>Studio
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
                <div className="menu-stat-label">Projects done</div>
                <div className="menu-stat-value">120<span>+</span></div>
              </div>
              <div>
                <div className="menu-stat-label">Happy clients</div>
                <div className="menu-stat-value">84<span>+</span></div>
              </div>
              <div>
                <div className="menu-stat-label">Years active</div>
                <div className="menu-stat-value">07<span>yrs</span></div>
              </div>
              <div>
                <div className="menu-stat-label">Awards</div>
                <div className="menu-stat-value">12<span>×</span></div>
              </div>
            </div>

            <Link href="#contact" onClick={() => setMenuOpen(false)} className="menu-cta" {...hover}>
              Start a project
              <span className="menu-cta-arrow">→</span>
            </Link>
          </div>

          <span className="menu-big-num">PS</span>
        </div>

      </div>
    </>
  )
}
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCursorHover } from '@/components/Cursor'

export function Footer() {
  const hover = useCursorHover()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  const styles = `
    .ft {
      background: #0a0a0a;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
    }

    .ft-inner {
      max-width: 1280px;
      width: 100%;
      margin: 0 auto;
      padding: 0 16px;
    }

    /* Top band */
    .ft-top {
      border-bottom: 1px solid rgba(255,255,255,0.1);
      display: grid;
      grid-template-columns: 1fr 1px 1fr 1px 1fr;
      max-width: 100%;
    }

    .ft-top-cell {
      padding: 24px 32px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .ft-top-divider {
      background: rgba(255,255,255,0.1);
      width: 1px;
    }

    .ft-top-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
      background: var(--accent);
    }

    .ft-top-cell:nth-child(3) .ft-top-dot { opacity: 0.7; }
    .ft-top-cell:nth-child(5) .ft-top-dot { opacity: 0.5; }

    .ft-top-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
    }

    .ft-top-value {
      font-size: 12px;
      font-weight: 500;
      color: rgba(255,255,255,0.7);
      margin-left: auto;
    }

    /* Hero row */
    .ft-hero {
      padding: 56px 0 48px;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: flex-end;
      gap: 40px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .ft-label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 999px;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.15);
      color: rgba(255,255,255,0.8);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 14px;
      width: fit-content;
    }

    .ft-label .label-slashes {
      color: var(--accent);
    }

    .ft-wordmark {
      font-size: clamp(48px, 8vw, 80px);
      font-weight: 800;
      letter-spacing: -0.04em;
      color: #ffffff;
      line-height: 0.95;
      margin: 0;
    }

    .ft-wordmark .period {
      color: var(--accent);
    }

    .ft-hero-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 18px;
      padding-bottom: 4px;
    }

    .ft-tagline {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.65;
      color: rgba(255,255,255,0.6);
      text-align: right;
      max-width: 280px;
    }

    .ft-cta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 20px;
      border-radius: 12px;
      background: #ffffff;
      color: #0a0a0a;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-decoration: none;
      transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    }

    .ft-cta:hover {
      background: #f0f0f0;
      transform: translateY(-1px);
      box-shadow: 0 12px 28px rgba(0,0,0,0.4);
    }

    .ft-cta-arrow {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #0a0a0a;
      color: var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
      transition: transform 0.25s;
    }

    .ft-cta:hover .ft-cta-arrow { transform: rotate(45deg); }

    /* Links grid */
    .ft-links {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .ft-links-col {
      padding: 36px 32px;
      border-right: 1px solid rgba(255,255,255,0.1);
    }

    .ft-links-col:last-child { border-right: none; }

    .ft-col-title {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.45);
      margin-bottom: 18px;
    }

    .ft-col-links {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .ft-col-link {
      font-size: 13px;
      font-weight: 500;
      color: rgba(255,255,255,0.65);
      text-decoration: none;
      transition: color 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .ft-col-link::before {
      content: '';
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: rgba(255,255,255,0.3);
      flex-shrink: 0;
      transition: background 0.2s;
    }

    .ft-col-link:hover { color: #fff; }
    .ft-col-link:hover::before { background: var(--accent); }

    /* Bottom bar — horizontal line */
    .ft-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 22px 0;
      gap: 16px;
    }

    .ft-meta {
      font-size: 11px;
      font-weight: 400;
      color: rgba(255,255,255,0.4);
      letter-spacing: 0.04em;
    }

    .ft-socials {
      display: flex;
      gap: 8px;
    }

    .ft-social {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.15);
      background: rgba(255,255,255,0.05);
      color: rgba(255,255,255,0.7);
      font-size: 12px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: border-color 0.2s, color 0.2s, background 0.2s;
    }

    .ft-social:hover {
      border-color: var(--accent);
      color: var(--accent);
      background: rgba(0, 229, 255, 0.1);
    }

    .ft-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.15);
      background: rgba(255,255,255,0.05);
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.6);
    }

    .ft-badge-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent);
    }

    @media (max-width: 1024px) {
      .ft-top { grid-template-columns: 1fr 1px 1fr; }
      .ft-top-cell:nth-child(5) { display: none; }
      .ft-top-cell:nth-child(4) { display: none; }
      .ft-hero { padding: 48px 0 40px; }
      .ft-links { grid-template-columns: repeat(2, 1fr); }
      .ft-links-col:nth-child(2) { border-right: none; }
    }

    @media (max-width: 768px) {
      .ft-inner { padding: 0 14px; }
      .ft-top-cell { padding: 20px 24px; }
      .ft-wordmark { font-size: clamp(40px, 10vw, 56px); }
    }

    @media (max-width: 640px) {
      .ft-top { grid-template-columns: 1fr; }
      .ft-top-divider { display: none; }
      .ft-top-cell:nth-child(3) { display: none; }
      .ft-hero { grid-template-columns: 1fr; padding: 40px 0 32px; gap: 28px; }
      .ft-hero-right { align-items: flex-start; }
      .ft-tagline { text-align: left; max-width: 100%; }
      .ft-links { grid-template-columns: 1fr 1fr; }
      .ft-links-col { padding: 28px 24px; }
      .ft-bottom { flex-direction: column; align-items: flex-start; gap: 12px; }
      .ft-wordmark { font-size: 40px; }
    }

    @media (max-width: 480px) {
      .ft-inner { padding: 0 12px; }
      .ft-top-cell { padding: 16px 20px; }
      .ft-top-label, .ft-top-value { font-size: 10px; }
      .ft-hero { padding: 32px 0 28px; gap: 24px; }
      .ft-label { font-size: 10px; padding: 6px 12px; }
      .ft-wordmark { font-size: 32px; }
      .ft-tagline { font-size: 13px; }
      .ft-cta { padding: 10px 18px; font-size: 11px; }
      .ft-links { grid-template-columns: 1fr; }
      .ft-links-col { padding: 24px 20px; }
      .ft-col-title { font-size: 9px; margin-bottom: 14px; }
      .ft-col-link { font-size: 12px; }
      .ft-bottom { padding: 18px 0; }
      .ft-meta { font-size: 10px; }
      .ft-badge { font-size: 9px; padding: 5px 10px; }
      .ft-social { width: 32px; height: 32px; font-size: 11px; }
    }
  `

  return (
    <footer className="ft">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="ft-inner">
        {/* Top info band */}
        <div className="ft-top">
          <div className="ft-top-cell">
            <span className="ft-top-dot" />
            <span className="ft-top-label">Studio</span>
            <span className="ft-top-value">Sofia, BG</span>
          </div>
          <div className="ft-top-divider" />
          <div className="ft-top-cell">
            <span className="ft-top-dot" />
            <span className="ft-top-label">Est.</span>
            <span className="ft-top-value">2019</span>
          </div>
          <div className="ft-top-divider" />
          <div className="ft-top-cell">
            <span className="ft-top-dot" />
            <span className="ft-top-label">Projects shipped</span>
            <span className="ft-top-value">140+</span>
          </div>
        </div>

        {/* Hero wordmark row */}
        <div className="ft-hero">
          <div>
            <div className="ft-label">
              <span className="label-slashes">//</span>
              <span>PIXEL.STUDIO</span>
              <span className="label-slashes">//</span>
            </div>
            <h2 className="ft-wordmark">
              Pixel<span className="period">.</span>Studio
            </h2>
          </div>

          <div className="ft-hero-right">
            <p className="ft-tagline">
              Book a quick call to see how we work and get a plan built around your team.
            </p>
            <Link href="#pricing" className="ft-cta" {...hover}>
              <span>See Pricing</span>
              <span className="ft-cta-arrow">↗</span>
            </Link>
          </div>
        </div>

        {/* Nav columns */}
        <div className="ft-links">
          <div className="ft-links-col">
            <div className="ft-col-title">Navigate</div>
            <div className="ft-col-links">
              <Link href="#work" className="ft-col-link" {...hover}>Work</Link>
              <Link href="#services" className="ft-col-link" {...hover}>Services</Link>
              <Link href="#pricing" className="ft-col-link" {...hover}>Pricing</Link>
              <Link href="#contact" className="ft-col-link" {...hover}>Contact</Link>
            </div>
          </div>
          <div className="ft-links-col">
            <div className="ft-col-title">Services</div>
            <div className="ft-col-links">
              <Link href="#" className="ft-col-link" {...hover}>Web Design</Link>
              <Link href="#" className="ft-col-link" {...hover}>Mobile Apps</Link>
              <Link href="#" className="ft-col-link" {...hover}>Branding</Link>
              <Link href="#" className="ft-col-link" {...hover}>Design Systems</Link>
            </div>
          </div>
          <div className="ft-links-col">
            <div className="ft-col-title">Social</div>
            <div className="ft-col-links">
              <Link href="#" className="ft-col-link" {...hover}>Behance</Link>
              <Link href="#" className="ft-col-link" {...hover}>Twitter / X</Link>
              <Link href="#" className="ft-col-link" {...hover}>LinkedIn</Link>
              <Link href="#" className="ft-col-link" {...hover}>Dribbble</Link>
            </div>
          </div>
          <div className="ft-links-col">
            <div className="ft-col-title">Legal</div>
            <div className="ft-col-links">
              <Link href="#" className="ft-col-link" {...hover}>Privacy Policy</Link>
              <Link href="#" className="ft-col-link" {...hover}>Terms of Use</Link>
              <Link href="#" className="ft-col-link" {...hover}>Cookie Policy</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <span className="ft-meta">© 2025 Pixel Studio. All rights reserved.</span>

          <div className="ft-badge">
            <span className="ft-badge-dot" />
            Available for new projects
          </div>

          <div className="ft-socials">
            <button type="button" className="ft-social" aria-label="Behance" {...hover}>Bē</button>
            <button type="button" className="ft-social" aria-label="Twitter" {...hover}>𝕏</button>
            <button type="button" className="ft-social" aria-label="LinkedIn" {...hover}>in</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
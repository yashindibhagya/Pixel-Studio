'use client'

import { useCursorHover } from '@/components/Cursor'

const projects = [
  {
    id: 'nova',
    label: 'Fintech · Web App',
    title: 'NovaPay Financial Platform',
    summary: 'Redesigned dashboard and flows that increased paid conversions by 37%.',
  },
  {
    id: 'flux',
    label: 'Health · Mobile',
    title: 'Flux Fitness Tracker',
    summary: 'A mobile experience that keeps users returning every day to close their rings.',
  },
  {
    id: 'terrain',
    label: 'E‑Commerce · Retail',
    title: 'Terrain Outdoor Storefront',
    summary: 'Modern, conversion‑focused storefront that boosted average order value.',
  },
]

export function Work() {
  const hover = useCursorHover()

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400&family=Fraunces:ital,opsz,wght@1,9..144,300&display=swap');

    :root {
      --wk-bg: #F8F6FC;
      --wk-ink: #0C021A;
      --wk-muted: rgba(12, 2, 26, 0.6);
      --wk-accent: #ff4d1c;
      --wk-border: rgba(12, 2, 26, 0.08);
    }

    .wk-section {
      font-family: 'Syne', sans-serif;
      background: var(--wk-bg);
      color: var(--wk-ink);
      padding: 0 0 120px;
      position: relative;
      overflow: hidden;
    }

    /* grain */
    .wk-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
      opacity: 0.025;
      pointer-events: none;
      z-index: 0;
    }

    .wk-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 4vw;
      position: relative;
      z-index: 1;
    }

    /* ── HEADER ── */
    .wk-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: end;
      gap: 32px;
      padding: 80px 0 56px;
      border-bottom: 1px solid var(--wk-border);
      margin-bottom: 0;
    }

    .wk-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      font-family: 'DM Mono', monospace;
      font-size: 0.6rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--wk-muted);
      margin-bottom: 18px;
    }
    .wk-eyebrow::before {
      content: '';
      display: inline-block;
      width: 24px; height: 1px;
      background: var(--wk-accent);
    }

    .wk-title {
      font-size: clamp(3rem, 6vw, 5.5rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 0.9;
      color: var(--wk-ink);
      margin: 0;
    }
    .wk-title-em {
      font-family: 'Fraunces', serif;
      font-style: italic;
      font-weight: 300;
      color: var(--wk-accent);
    }

    .wk-intro {
      font-family: 'DM Mono', monospace;
      font-size: 0.75rem;
      line-height: 1.85;
      color: var(--wk-muted);
      font-weight: 300;
      max-width: 400px;
      align-self: end;
    }

    /* ── PROJECT LIST ── */
    .wk-grid {
      display: grid;
      grid-template-columns: 1fr;
      border-left: 1px solid var(--wk-border);
      border-right: 1px solid var(--wk-border);
    }

    /* ── CASE CARD ── */
    .case-card {
      position: relative;
      display: grid;
      grid-template-columns: 56px 1fr auto;
      align-items: stretch;
      border-bottom: 1px solid var(--wk-border);
      background: transparent;
      cursor: pointer;
      overflow: hidden;
      text-decoration: none;
      color: inherit;
      transition: background 0.4s cubic-bezier(0.16,1,0.3,1);
    }

    /* light ink fill sweeps up from bottom on hover */
    .case-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: #ffffff;
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
      z-index: 0;
    }
    .case-card:hover::before { transform: scaleY(1); }

    /* when filled, flip all text to dark */
    .case-card:hover .case-index {
      color: rgba(12,12,11,0.35) !important;
      border-right-color: rgba(12,12,11,0.1) !important;
    }
    .case-card:hover .case-label { color: var(--wk-accent) !important; }
    .case-card:hover .case-title { color: #0c0c0b !important; }
    .case-card:hover .case-summary { color: rgba(12,12,11,0.55) !important; }
    .case-card:hover .case-right { border-left-color: rgba(12,12,11,0.1) !important; }
    .case-card:hover .case-link {
      border-color: rgba(12,12,11,0.2) !important;
      color: #0c0c0b !important;
      background: rgba(12,12,11,0.06) !important;
    }
    .case-card:hover .case-link-icon {
      background: var(--wk-accent) !important;
      color: #fff !important;
    }

    /* left accent bar */
    .case-media-strip {
      position: absolute;
      top: 0; left: 0;
      width: 3px;
      height: 0%;
      background: var(--wk-accent);
      transition: height 0.45s cubic-bezier(0.16,1,0.3,1);
      z-index: 3;
    }
    .case-card:hover .case-media-strip { height: 100%; }

    /* index */
    .case-index {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 32px 0;
      font-family: 'DM Mono', monospace;
      font-size: 0.55rem;
      letter-spacing: 0.2em;
      color: var(--wk-muted);
      border-right: 1px solid var(--wk-border);
      min-width: 56px;
      transition: color 0.35s, border-color 0.35s;
    }
    .case-card:hover .case-index {
      color: rgba(240,237,230,0.2);
      border-right-color: rgba(240,237,230,0.06);
    }

    /* body */
    .case-body {
      position: relative;
      z-index: 1;
      padding: 32px 36px;
      display: flex;
      flex-direction: column;
      gap: 7px;
    }

    .case-label {
      font-family: 'DM Mono', monospace;
      font-size: 0.58rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--wk-muted);
      transition: color 0.35s;
    }
    .case-title {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1.8rem, 3.2vw, 2.8rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      color: var(--wk-ink);
      line-height: 1.0;
      transition: color 0.35s;
    }
    .case-summary {
      font-family: 'DM Mono', monospace;
      font-size: 0.68rem;
      font-weight: 300;
      font-style: italic;
      line-height: 1.75;
      color: var(--wk-muted);
      margin: 4px 0 0;
      max-width: 480px;
      transition: color 0.35s;
    }
    /* right */
    .case-right {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      padding: 32px 28px;
      border-left: 1px solid var(--wk-border);
      min-width: 160px;
      gap: 12px;
      transition: border-color 0.35s;
    }
    .case-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 16px;
      border: 1px solid var(--wk-border);
      border-radius: 2px;
      background: transparent;
      font-family: 'DM Mono', monospace;
      font-size: 0.6rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--wk-muted);
      cursor: pointer;
      transition: border-color 0.25s, color 0.25s, background 0.25s, transform 0.2s;
      white-space: nowrap;
    }
    .case-link:hover { transform: translateX(3px); }

    .case-link-icon {
      width: 20px; height: 20px;
      border-radius: 50%;
      background: var(--wk-border);
      color: var(--wk-ink);
      display: flex; align-items: center; justify-content: center;
      font-size: 0.7rem;
      flex-shrink: 0;
      transition: background 0.25s, color 0.25s;
    }
    /* ── FOOTER ── */
    .wk-footer {
      padding: 32px 0;
      border: 1px solid var(--wk-border);
      border-top: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
      padding-left: 28px;
      padding-right: 28px;
    }
    .wk-footer-note {
      font-family: 'DM Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--wk-muted);
    }
    .wk-footer-cta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--wk-accent);
      color: #fff;
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-decoration: none;
      padding: 12px 20px;
      border-radius: 2px;
      transition: background 0.2s, transform 0.2s;
    }
    .wk-footer-cta:hover { background: #ff6b3d; transform: translateX(3px); }

    /* ── RESPONSIVE ── */
    @media (max-width: 1024px) {
      .wk-header { grid-template-columns: 1fr; gap: 20px; }
      .case-card {
        grid-template-columns: 40px 1fr;
        grid-template-rows: auto auto;
      }
      .case-right {
        grid-column: 2;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        border-left: none;
        border-top: 1px solid var(--wk-border);
        padding: 16px 28px;
        min-width: 0;
      }
      .case-card:hover .case-right { border-top-color: rgba(240,237,230,0.06); }
      .case-index { grid-row: span 2; }
    }
    @media (max-width: 640px) {
      .wk-section { padding-bottom: 80px; }
      .wk-header { padding: 60px 0 40px; }
      .wk-title { font-size: 2.8rem; }
      .case-body { padding: 22px 18px; }
      .case-right { padding: 14px 18px; }
      .case-title { font-size: 1.6rem; }
      .wk-footer { padding: 24px 18px; flex-direction: column; align-items: flex-start; }
    }
  `

  return (
    <section id="work" className="wk-section">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="wk-inner">

        {/* ── HEADER ── */}
        <div className="wk-header">
          <div>
            <div className="wk-eyebrow">Portfolio</div>
            <h2 className="wk-title">
              Selected<br />
              <span className="wk-title-em">Work.</span>
            </h2>
          </div>
          <p className="wk-intro">
            A curated sample of web, mobile, and brand projects we've shipped for fast‑moving teams — from zero to launch.
          </p>
        </div>

        {/* ── PROJECT LIST ── */}
        <div className="wk-grid">
          {projects.map((project, i) => (
            <article key={project.id} className="case-card" {...hover}>

              <div className="case-media-strip" />

              <div className="case-index">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="case-body">
                <div className="case-label">{project.label}</div>
                <h3 className="case-title">{project.title}</h3>
                <p className="case-summary">{project.summary}</p>
              </div>

              <div className="case-right">
                <button className="case-link" type="button">
                  <span>View case</span>
                  <span className="case-link-icon">↗</span>
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* ── FOOTER STRIP ── */}
        <div className="wk-footer">
          <span className="wk-footer-note">More projects available on request</span>
          <a href="#contact" className="wk-footer-cta">Start a project ↗</a>
        </div>

      </div>
    </section>
  )
}
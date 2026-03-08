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

  const sectionStyles = `
        section.work-section#work {
          background: #ffffff !important;
        }

        section.work-section#work .work-grid {
          background: #ffffff !important;
        }

        .work-section {
          padding: 96px 16px 120px;
          display: flex;
          justify-content: center;
        }

        .work-container {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          background: #ffffff;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
        }

        .work-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          margin-bottom: 32px;
        }

        .work-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 999px;
          background: #111;
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .work-label .label-slashes {
          color: var(--accent);
        }

        .work-title {
          font-size: clamp(46px, 6vw, 62px);
          font-weight: 800;
          letter-spacing: -0.04em;
          margin: 0;
          color: #111;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
        }

        .work-title span.period {
          color: var(--accent);
        }

        .work-intro {
          max-width: 360px;
          font-size: 14px;
          line-height: 1.7;
          color: #6b6b6b;
        }

        /* ── NEW PROJECT GRID STYLES ── */

        .work-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border-top: 1.5px solid rgb(255, 255, 255);
        }

        .case-card {
          position: relative;
          display: grid;
          grid-template-columns: 56px 1fr auto;
          align-items: stretch;
          gap: 0;
          border-bottom: 1.5px solid #d0d0d0;
          background: transparent;
          cursor: pointer;
          transition: background 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          text-decoration: none;
          color: inherit;
        }

        .case-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #111;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }

        .case-card:hover::before {
          transform: scaleY(1);
        }

        .case-index {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          padding: 28px 0 28px 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: #aaa;
          letter-spacing: 0.06em;
          transition: color 0.35s;
          border-right: 1.5px solid #d0d0d0;
          justify-content: center;
          min-width: 56px;
        }

        .case-card:hover .case-index {
          color: rgba(255, 255, 255, 0.35);
          border-right-color: rgba(255,255,255,0.1);
        }

        .case-body {
          position: relative;
          z-index: 1;
          padding: 28px 32px 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .case-label {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #999;
          transition: color 0.35s;
        }

        .case-card:hover .case-label {
          color: var(--accent);
        }

        .case-title {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: clamp(30px, 3.5vw, 44px);
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #111;
          line-height: 1.0;
          transition: color 0.35s;
        }

        .case-card:hover .case-title {
          color: #ffffff;
        }

        .case-summary {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 13px;
          font-style: italic;
          line-height: 1.6;
          color: #777;
          margin: 4px 0 0;
          max-width: 480px;
          transition: color 0.35s;
        }

        .case-card:hover .case-summary {
          color: rgba(255,255,255,0.55);
        }

        .case-right {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          padding: 28px 28px 28px 24px;
          gap: 16px;
          border-left: 1.5px solid #d0d0d0;
          min-width: 180px;
          transition: border-color 0.35s;
        }

        .case-card:hover .case-right {
          border-left-color: rgba(255, 255, 255, 0.1);
        }

        .case-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 14px 8px 14px;
          border-radius: 999px;
          border: 1.5px solid #ddd;
          background: transparent;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: #111;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.2s;
          white-space: nowrap;
        }

        .case-card:hover .case-link {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.3);
          color: #fff;
        }

        .case-link:hover {
          transform: scale(1.04);
        }

        .case-link-icon {
          width: 19px;
          height: 19px;
          border-radius: 50%;
          background: #111;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          flex-shrink: 0;
          transition: background 0.25s, color 0.25s;
        }

        .case-card:hover .case-link-icon {
          background: var(--accent);
          color: #fff;
        }

        /* Hover shimmer on media strip */
        .case-media-strip {
          position: absolute;
          top: 0;
          right: 0;
          width: 5px;
          height: 0%;
          background: var(--accent);
          transition: height 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .case-card:hover .case-media-strip {
          height: 100%;
        }

        @media (max-width: 1024px) {
          .work-section {
            padding: 80px 14px 96px;
          }
          .case-card {
            grid-template-columns: 40px 1fr;
            grid-template-rows: auto auto;
          }
          .case-right {
            grid-column: 2;
            flex-direction: row;
            align-items: center;
            border-left: none;
            border-top: 1.5px solid #d0d0d0;
            padding: 16px 28px;
            min-width: 0;
          }
          .case-card:hover .case-right {
            border-top-color: rgba(255,255,255,0.1);
          }
          .case-index {
            grid-row: span 2;
          }
        }

        @media (max-width: 640px) {
          .work-header {
            flex-direction: column;
          }
          .case-card {
            grid-template-columns: 36px 1fr;
          }
          .case-body {
            padding: 20px 16px;
          }
          .case-right {
            padding: 12px 16px;
          }
        }
      `

  return (
    <section id="work" className="work-section">
      <style dangerouslySetInnerHTML={{ __html: sectionStyles }} />

      <div className="work-container">
        <div className="work-header">
          <div>
            <div className="work-label">
              <span className="label-slashes">//</span>
              <span>PORTFOLIO</span>
              <span className="label-slashes">//</span>
            </div>
            <h2 className="work-title">
              Selected Work<span className="period">.</span>
            </h2>
          </div>
          <p className="work-intro">
            A small sample of the web, mobile, and brand projects we've shipped for fast‑moving teams.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="case-card"
              {...hover}
            >
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
      </div>
    </section>
  )
}
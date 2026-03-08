'use client'

import { useCursorHover } from '@/components/Cursor'

const services = [
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'Elevate your identity: sharp positioning, cohesive visuals, real impact.',
    tags: ['Art Direction', 'Brand Strategy', 'Logo Design', 'Color Systems'],
  },
  {
    id: 'web-mobile',
    title: 'Web & Mobile Design',
    description: 'Refresh or rebrand your UX. High retention with clear flows and micro‑interactions.',
    tags: ['Clean & Modern UI', 'Rebranding', 'Design Systems', 'Prototyping'],
  },
  {
    id: 'no-code',
    title: 'No-Code Websites',
    description: 'Launch a revenue‑driving site that captures qualified leads 24/7 — shipped in 14 days or less.',
    tags: ['Framer Dev', 'Integrations', 'CMS Integration', 'Animation'],
  },
]

function FolderIcon() {
  return (
    <svg
      viewBox="0 0 40 32"
      aria-hidden="true"
      className="services-folder-icon"
    >
      <path
        d="M3 8.5C3 7.12 4.12 6 5.5 6h8.2c.7 0 1.37.3 1.83.81l1.94 2.14H34c1.1 0 2 .9 2 2v11.5A3.5 3.5 0 0 1 32.5 26h-23A3.5 3.5 0 0 1 6 22.5V11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Services() {
  const hover = useCursorHover()

  const sectionStyles = `
        .services-section {
          background: #f4f4f4;
          padding: 96px 16px 120px;
          display: flex;
          justify-content: center;
        }

        .services-container {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
        }

        .services-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          margin-bottom: 40px;
        }

        .services-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 999px;
          background: #111;
          color: #f5f5f5;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .services-label span:last-child {
          color: #ff4d4d;
        }

        .services-title {
          font-size: clamp(32px, 4vw, 40px);
          font-weight: 800;
          letter-spacing: -0.04em;
          margin: 0;
          color: #111;
        }

        .services-title span.period {
          color: #ff4d4d;
        }

        .services-intro {
          max-width: 360px;
          font-size: 14px;
          line-height: 1.7;
          color: #6b6b6b;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .services-card {
          background: #ffffff;
          border-radius: 22px;
          padding: 18px 18px 16px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.10);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .services-card-top {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .services-folder-icon {
          width: 26px;
          height: 20px;
          color: #111;
        }

        .services-card-title {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #111;
        }

        .services-card-desc {
          font-size: 13px;
          line-height: 1.7;
          color: #777;
          margin: 0;
        }

        .services-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }

        .services-tag {
          display: inline-flex;
          align-items: center;
          padding: 5px 11px;
          border-radius: 999px;
          border: 1px solid #e4e4e4;
          background: #fafafa;
          font-size: 11px;
          font-weight: 500;
          color: #444;
          white-space: nowrap;
        }

        .services-card-media {
          margin-top: 6px;
          border-radius: 18px;
          overflow: hidden;
          background: radial-gradient(circle at top left, #f97316 0, #111827 55%, #020617 100%);
          position: relative;
          min-height: 150px;
        }

        .services-card-media::after {
          content: 'Dummy image';
          position: absolute;
          left: 14px;
          bottom: 14px;
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(0,0,0,0.72);
          color: rgba(249,250,251,0.9);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid rgba(156,163,175,0.6);
        }

        .services-dots {
          margin-top: 8px;
          display: flex;
          justify-content: center;
          gap: 6px;
        }

        .services-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #d4d4d4;
        }

        .services-dot.active {
          width: 9px;
          background: #ff4d4d;
        }

        @media (max-width: 1024px) {
          .services-section {
            padding: 80px 14px 96px;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .services-header {
            flex-direction: column;
          }
        }
      `

  return (
    <section id="services" className="services-section">
      <style dangerouslySetInnerHTML={{ __html: sectionStyles }} />

      <div className="services-container">
        <div className="services-header">
          <div>
            <div className="services-label">
              <span>// SERVICES //</span>
            </div>
            <h2 className="services-title">
              What We Do<span className="period">.</span>
            </h2>
          </div>
          <p className="services-intro">
            We combine strategy, speed, and skill to deliver exceptional design — every time.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="services-card"
              {...hover}
            >
              <div className="services-card-top">
                <FolderIcon />
                <div>
                  <h3 className="services-card-title">{service.title}</h3>
                  <p className="services-card-desc">{service.description}</p>
                </div>
                <div className="services-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="services-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="services-card-media" />

              <div className="services-dots">
                <span className={`services-dot ${index === 0 ? 'active' : ''}`} />
                <span className="services-dot" />
                <span className="services-dot" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

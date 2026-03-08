'use client'

import { useCursorHover } from '@/components/Cursor'

const benefits = [
  {
    id: 'pricing',
    icon: '$',
    title: 'Predictable Pricing',
    description: 'Simple pricing structure that gives you unlimited design.',
  },
  {
    id: 'turnarounds',
    icon: '⏱',
    title: 'Fast Turnarounds',
    description: 'Quick and reliable results to keep your business moving forward.',
  },
  {
    id: 'requests',
    icon: '⟳',
    title: 'Unlimited Requests',
    description: 'We’ll handle them one by one — or a few at a time on higher tiers.',
  },
  {
    id: 'portal',
    icon: '↗',
    title: 'Design Portal',
    description: 'Manage tasks, revisions, and updates inside a clean, organized dashboard.',
  },
  {
    id: 'quality',
    icon: '★',
    title: 'Top-Tier Quality',
    description: 'Built with care by a team that treats your brand like their own.',
  },
  {
    id: 'problems',
    icon: '▮▮',
    title: 'Problem Solving',
    description: 'We solve your brand challenges with innovative solutions.',
  },
]

export function Benefits() {
  const hover = useCursorHover()

  const sectionStyles = `
        .benefits-section {
          background: #f4f4f4;
          padding: 96px 16px 120px;
          display: flex;
          justify-content: center;
        }

        .benefits-container {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
        }

        .benefits-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          margin-bottom: 32px;
        }

        .benefits-label {
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

        .benefits-label .label-slashes {
          color: var(--accent);
        }

        .benefits-title {
          font-size: clamp(46px, 6vw, 62px);
          font-weight: 800;
          letter-spacing: -0.04em;
          margin: 0;
          color: #111;
        }

        .benefits-title span.period {
          color: #ff4d4d;
        }

        .benefits-intro {
          max-width: 360px;
          font-size: 14px;
          line-height: 1.7;
          color: #6b6b6b;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .benefit-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 18px 18px 20px;
          box-shadow: 0 14px 34px rgba(0,0,0,0.10);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .benefit-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .benefit-icon {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #f4f4f4;
          font-size: 16px;
        }

        .benefit-dots {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .benefit-dot {
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: #e4e4e4;
        }

        .benefit-dot.active {
          background: #ff4d4d;
        }

        .benefit-title {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 4px;
          color: #111;
        }

        .benefit-desc {
          font-size: 13px;
          line-height: 1.7;
          color: #777;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .benefits-section {
            padding: 80px 14px 96px;
          }
          .benefits-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .benefits-header {
            flex-direction: column;
          }
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `

  return (
    <section id="benefits" className="benefits-section">
      <style dangerouslySetInnerHTML={{ __html: sectionStyles }} />

      <div className="benefits-container">
        <div className="benefits-header">
          <div>
            <div className="benefits-label">
              <span className="label-slashes">//</span>
              <span>BENEFITS</span>
              <span className="label-slashes">//</span>
            </div>
            <h2 className="benefits-title">
              Our Benefits<span className="period">.</span>
            </h2>
          </div>
          <p className="benefits-intro">
            Get unlimited design work for a simple monthly rate. No hourly billing, no surprises — pause or cancel whenever you need.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.id}
              className="benefit-card"
              {...hover}
            >
              <div className="benefit-card-top">
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-dots">
                  <span className="benefit-dot active" />
                  <span className="benefit-dot" />
                  <span className="benefit-dot" />
                  <span className="benefit-dot" />
                </div>
              </div>
              <div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

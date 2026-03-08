'use client'

import { useCursorHover } from '@/components/Cursor'

const projects = [
  { category: 'Web Application', title: 'NovaPay Financial Platform', bg: 'work-bg-1', mockup: 'browser' as const },
  { category: 'Mobile App', title: 'Flux Fitness Tracker', bg: 'work-bg-2', mockup: 'phone' as const },
  { category: 'E-Commerce', title: 'Terrain Outdoor Retail', bg: 'work-bg-3', mockup: 'browser' as const },
]

export function Work() {
  const hover = useCursorHover()

  return (
    <section id="work" style={{ background: 'var(--mid)' }}>
      <div className="section-label reveal">Portfolio</div>
      <h2 className="section-title reveal reveal-delay-1">Selected Work</h2>
      <div className="work-grid">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={`work-card reveal reveal-delay-${i}`}
            {...hover}
          >
            <div className={`work-bg ${p.bg}`} />
            <div className="work-mockup">
              {p.mockup === 'browser' ? (
                <div className="browser-mockup">
                  <div className="browser-bar">
                    <div className="browser-dot" style={{ background: '#ff5f57' }} />
                    <div className="browser-dot" style={{ background: '#ffbd2e' }} />
                    <div className="browser-dot" style={{ background: '#28ca41' }} />
                  </div>
                  <div className="browser-content">
                    <div className="browser-row" style={{ width: '70%' }} />
                    <div className="browser-row half" />
                    <div className="browser-row" />
                    <div className="browser-row accent-row" />
                  </div>
                </div>
              ) : (
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <div className="phone-bar" />
                    <div className="phone-bar short" />
                    <div className="phone-bar" />
                    <div className="phone-bar short" />
                    <div className="phone-bar" style={{ background: 'linear-gradient(90deg, rgba(0,229,255,0.5), rgba(189,0,255,0.5))', height: '32px', borderRadius: '8px' }} />
                  </div>
                </div>
              )}
            </div>
            <div className="work-overlay" />
            <div className="work-arrow">↗</div>
            <div className="work-content">
              <div className="work-category">{p.category}</div>
              <div className="work-title">{p.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

'use client'

import { useCursorHover } from '@/components/Cursor'

const benefits = [
  {
    id: 'pricing',
    num: '01',
    icon: '$',
    title: 'Predictable Pricing',
    description: 'Simple pricing structure that gives you unlimited design. No hourly billing, no surprises — ever.',
  },
  {
    id: 'turnarounds',
    num: '02',
    icon: '⏱',
    title: 'Fast Turnarounds',
    description: 'Quick and reliable results to keep your business moving forward without waiting weeks.',
  },
  {
    id: 'requests',
    num: '03',
    icon: '⟳',
    title: 'Unlimited Requests',
    description: 'Submit as many requests as you need. We handle them one by one — or in parallel on higher tiers.',
  },
  {
    id: 'portal',
    num: '04',
    icon: '↗',
    title: 'Design Portal',
    description: 'Manage tasks, revisions, and updates inside a clean, organized dashboard built for clarity.',
  },
  {
    id: 'quality',
    num: '05',
    icon: '★',
    title: 'Top-Tier Quality',
    description: 'Built with care by a team that treats your brand like their own — every pixel intentional.',
  },
  {
    id: 'problems',
    num: '06',
    icon: '◈',
    title: 'Problem Solving',
    description: 'We dig into your brand challenges and surface innovative, strategy-backed solutions.',
  },
]

export function Benefits() {
  const hover = useCursorHover()

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400&family=Fraunces:ital,opsz,wght@1,9..144,300&display=swap');

    :root {
      --bn-bg: #F8F6FC;
      --bn-ink: #0C021A;
      --bn-muted: rgba(12, 2, 26, 0.6);
      --bn-accent: #0088A3;
      --bn-border: rgba(12, 2, 26, 0.08);
    }

    .bn-section {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
      background: var(--bn-bg);
      color: var(--bn-ink);
      padding: 0 0 120px;
      position: relative;
      overflow: hidden;
    }

    /* grain */
    .bn-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
      opacity: 0.025;
      pointer-events: none;
      z-index: 0;
    }

    .bn-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 4vw;
      position: relative;
      z-index: 1;
    }

    /* ── HEADER ── */
    .bn-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: end;
      gap: 32px;
      padding: 80px 0 56px;
      border-bottom: 1px solid var(--bn-border);
      margin-bottom: 0;
    }

    .bn-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      font-family: 'DM Mono', monospace;
      font-size: 0.6rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--bn-muted);
      margin-bottom: 18px;
    }
    .bn-eyebrow::before {
      content: '';
      display: inline-block;
      width: 24px; height: 1px;
      background: var(--bn-accent);
    }

    .bn-title {
      font-size: clamp(3rem, 6vw, 5.5rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 0.9;
      color: var(--bn-ink);
      margin: 0;
    }
    .bn-title-em {
      font-family: 'Fraunces', serif;
      font-style: italic;
      font-weight: 300;
      color: var(--bn-accent);
    }

    .bn-intro {
      font-family: 'DM Mono', monospace;
      font-size: 0.75rem;
      line-height: 1.85;
      color: var(--bn-muted);
      font-weight: 300;
      max-width: 400px;
      align-self: end;
    }

    /* ── GRID ── */
    .bn-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: var(--bn-bg);
      border-left: 1px solid var(--bn-border);
      border-right: 1px solid var(--bn-border);
      border-bottom: 1px solid var(--bn-border);
    }

    /* ── CARD ── (same hover as Work: fill from bottom + left strip) */
    .bn-card {
      background: transparent;
      padding: 32px 28px 28px;
      display: flex;
      flex-direction: column;
      gap: 0;
      position: relative;
      overflow: hidden;
      transition: background 0.3s;
      cursor: default;
    }

    /* white fill from bottom on hover */
    .bn-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: #ffffff;
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
      z-index: 0;
    }
    .bn-card:hover::before { transform: scaleY(1); }

    /* left accent bar */
    .bn-card-strip {
      position: absolute;
      top: 0; left: 0;
      width: 3px;
      height: 0%;
      background: var(--bn-accent);
      transition: height 0.45s cubic-bezier(0.16,1,0.3,1);
      z-index: 3;
    }
    .bn-card:hover .bn-card-strip { height: 100%; }

    /* top row: index + icon */
    .bn-card-head {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 28px;
    }
    .bn-card-num {
      font-family: 'DM Mono', monospace;
      font-size: 0.55rem;
      letter-spacing: 0.2em;
      color: var(--bn-muted);
      transition: color 0.35s;
    }
    .bn-card:hover .bn-card-num { color: rgba(12,12,11,0.35); }
    .bn-card-icon {
      width: 36px; height: 36px;
      border: 1px solid var(--bn-border);
      border-radius: 2px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem;
      color: var(--bn-ink);
      transition: border-color 0.3s, color 0.3s, background 0.3s;
    }
    .bn-card:hover .bn-card-icon {
      border-color: var(--bn-accent);
      color: var(--bn-accent);
      background: rgba(0,136,163,0.08);
    }

    /* text */
    .bn-card-title {
      position: relative;
      z-index: 1;
      font-size: clamp(1.05rem, 1.6vw, 1.3rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.15;
      color: var(--bn-ink);
      margin: 0 0 10px;
      transition: color 0.3s;
    }
    .bn-card:hover .bn-card-title { color: #0c0c0b; }
    .bn-card-desc {
      position: relative;
      z-index: 1;
      font-family: 'DM Mono', monospace;
      font-size: 0.68rem;
      line-height: 1.85;
      color: var(--bn-muted);
      font-weight: 300;
      margin: 0;
      flex: 1;
      transition: color 0.3s;
    }
    .bn-card:hover .bn-card-desc { color: rgba(12,12,11,0.55); }

    /* bottom divider + read more */
    .bn-card-foot {
      position: relative;
      z-index: 1;
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid var(--bn-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: border-color 0.3s;
    }
    .bn-card:hover .bn-card-foot { border-top-color: rgba(12,12,11,0.1); }
    .bn-card-tag {
      font-family: 'DM Mono', monospace;
      font-size: 0.52rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--bn-muted);
      transition: color 0.3s;
    }
    .bn-card:hover .bn-card-tag { color: rgba(12,12,11,0.5); }
    .bn-card-arrow {
      font-size: 0.75rem;
      color: var(--bn-muted);
      transition: color 0.2s, transform 0.2s;
    }
    .bn-card:hover .bn-card-arrow {
      color: var(--bn-accent);
      transform: translate(2px, -2px);
    }

    /* ── FOOTER ── */
    .bn-footer {
      padding: 32px 0;
      border-top: 1px solid var(--bn-border);
      border-left: 1px solid var(--bn-border);
      border-right: 1px solid var(--bn-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
      padding-left: 28px;
      padding-right: 28px;
    }
    .bn-footer-note {
      font-family: 'DM Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--bn-muted);
    }
    .bn-footer-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 1px solid rgba(0,136,163,0.3);
      border-radius: 2px;
      padding: 7px 14px;
      font-family: 'DM Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--bn-accent);
    }
    .bn-footer-badge-dot {
      width: 5px; height: 5px;
      background: var(--bn-accent);
      border-radius: 50%;
      animation: bnPulse 2s infinite;
    }
    @keyframes bnPulse {
      0%,100% { opacity: 1; }
      50%      { opacity: 0.2; }
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 1024px) {
      .bn-grid { grid-template-columns: repeat(2, 1fr); }
      .bn-header { grid-template-columns: 1fr; gap: 20px; }
    }
    @media (max-width: 640px) {
      .bn-section { padding-bottom: 80px; }
      .bn-header { padding: 60px 0 40px; }
      .bn-title { font-size: 2.8rem; }
      .bn-grid { grid-template-columns: 1fr; }
      .bn-card { padding: 24px 20px 20px; }
      .bn-footer { padding: 24px 20px; flex-direction: column; align-items: flex-start; }
    }
  `

  return (
    <section id="benefits" className="bn-section">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="bn-inner">

        {/* ── HEADER ── */}
        <div className="bn-header">
          <div>
            <div className="bn-eyebrow">Benefits</div>
            <h2 className="bn-title">
              Our<br />
              <span className="bn-title-em">Benefits.</span>
            </h2>
          </div>
          <p className="bn-intro">
            Get unlimited design work for a simple monthly rate. No hourly billing, no surprises — pause or cancel whenever you need.
          </p>
        </div>

        {/* ── CARDS ── */}
        <div className="bn-grid">
          {benefits.map((benefit) => (
            <article key={benefit.id} className="bn-card" {...hover}>
              <div className="bn-card-strip" aria-hidden />

              <div className="bn-card-head">
                <span className="bn-card-num">{benefit.num} /</span>
                <span className="bn-card-icon">{benefit.icon}</span>
              </div>

              <h3 className="bn-card-title">{benefit.title}</h3>
              <p className="bn-card-desc">{benefit.description}</p>

              <div className="bn-card-foot">
                <span className="bn-card-tag">Learn more</span>
                <span className="bn-card-arrow">↗</span>
              </div>

            </article>
          ))}
        </div>

        {/* ── FOOTER STRIP ── */}
        <div className="bn-footer">
          <span className="bn-footer-note">Pause or cancel anytime — no contracts, no lock-in</span>
          <span className="bn-footer-badge">
            <span className="bn-footer-badge-dot" />
            Currently accepting new clients
          </span>
        </div>

      </div>
    </section>
  )
}
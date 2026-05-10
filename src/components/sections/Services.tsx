'use client'

import { useCursorHover } from '@/components/Cursor'

const services = [
  {
    id: 'ui-ux',
    num: '01',
    title: 'UI/UX Design',
    description: 'Elevate your identity with sharp positioning, cohesive visuals, and interfaces that convert visitors into loyal users.',
    tags: ['Art Direction', 'Brand Strategy', 'Logo Design', 'Color Systems'],
    gradient: 'linear-gradient(135deg, #0088A3 0%, #0C021A 100%)',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'UI and UX design layouts across desktop and mobile screens',
  },
  {
    id: 'web-development',
    num: '02',
    title: 'Web Development',
    description: 'Refresh or rebuild your web presence. High retention with pixel-perfect flows, micro‑interactions, and clean architecture.',
    tags: ['Clean & Modern UI', 'Rebranding', 'Design Systems', 'Prototyping'],
    gradient: 'linear-gradient(135deg, #00b4d8 0%, #0088A3 50%, #0C021A 100%)',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Modern marketing website with bold hero and clean layouts',
  },
  {
    id: 'mobile-development',
    num: '03',
    title: 'Mobile Development',
    description: 'Launch a revenue‑driving app that captures qualified leads 24/7 — designed, developed, and shipped in 14 days or less.',
    tags: ['React Native', 'Integrations', 'CMS', 'Animation'],
    gradient: 'linear-gradient(135deg, #0C021A 0%, #0088A3 100%)',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Mobile app interface with analytics and messaging screens',
  },
]

export function Services() {
  const hover = useCursorHover()

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400&family=Fraunces:ital,opsz,wght@1,9..144,300&display=swap');

    :root {
      --sv-bg: #F8F6FC;
      --sv-ink: #18130c;
      --sv-muted: rgba(24,19,12,0.55);
      --sv-accent: #0088A3;
      --sv-border: rgba(24,19,12,0.12);
    }

    .sv-section {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
      background: var(--sv-bg);
      color: var(--sv-ink);
      padding: 0 0 120px;
      position: relative;
      overflow: hidden;
    }

    /* grain */
    .sv-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
      opacity: 0.025;
      pointer-events: none;
      z-index: 0;
    }

    .sv-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 4vw;
      position: relative;
      z-index: 1;
    }

    /* ── HEADER ── */
    .sv-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: end;
      gap: 32px;
      padding: 80px 0 56px;
      border-bottom: 1px solid var(--sv-border);
      margin-bottom: 56px;
    }

    .sv-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      font-family: 'DM Mono', monospace;
      font-size: 0.6rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--sv-muted);
      margin-bottom: 18px;
    }
    .sv-eyebrow::before {
      content: '';
      display: inline-block;
      width: 24px; height: 1px;
      background: var(--sv-accent);
    }

    .sv-title {
      font-size: clamp(3rem, 6vw, 5.5rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 0.9;
      color: var(--sv-ink);
      margin: 0;
    }
    .sv-title-em {
      font-family: 'Fraunces', serif;
      font-style: italic;
      font-weight: 300;
      color: var(--sv-accent);
    }

    .sv-intro {
      font-family: 'DM Mono', monospace;
      font-size: 0.75rem;
      line-height: 1.85;
      color: var(--sv-muted);
      font-weight: 300;
      max-width: 400px;
      align-self: end;
    }

    /* ── GRID ── */
    .sv-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: var(--sv-border);
      border: 1px solid var(--sv-border);
    }

    /* ── CARD ── */
    .sv-card {
      background: var(--sv-bg);
      display: flex;
      flex-direction: column;
      cursor: default;
      position: relative;
      overflow: hidden;
      transition: background 0.35s;
    }
    .sv-card:hover { background: #ffffff; }

    /* left accent bar */
    .sv-card-strip {
      position: absolute;
      top: 0; left: 0;
      width: 3px; height: 0%;
      background: var(--sv-accent);
      transition: height 0.45s cubic-bezier(0.16,1,0.3,1);
      z-index: 3;
    }
    .sv-card:hover .sv-card-strip { height: 100%; }

    /* gradient orb — decorative bg element */
    .sv-card-orb {
      position: absolute;
      top: -60px; right: -60px;
      width: 220px; height: 220px;
      border-radius: 50%;
      opacity: 0.12;
      transition: opacity 0.4s, transform 0.5s cubic-bezier(0.16,1,0.3,1);
      pointer-events: none;
      z-index: 0;
    }
    .sv-card:hover .sv-card-orb {
      opacity: 0.18;
      transform: scale(1.1);
    }

    /* top meta row */
    .sv-card-meta {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 28px 28px 0;
    }
    .sv-card-num {
      font-family: 'DM Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.2em;
      color: var(--sv-muted);
      transition: color 0.3s;
    }
    .sv-card:hover .sv-card-num { color: rgba(12,12,11,0.35); }
    .sv-card-arrow {
      width: 28px; height: 28px;
      border: 1px solid var(--sv-border);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.75rem;
      color: var(--sv-muted);
      transition: border-color 0.2s, color 0.2s, transform 0.2s;
    }
    .sv-card:hover .sv-card-arrow {
      border-color: var(--sv-accent);
      color: var(--sv-accent);
      transform: rotate(45deg);
    }

    /* large decorative number */
    .sv-card-bignum {
      position: relative;
      z-index: 1;
      font-family: 'Syne', sans-serif;
      font-size: clamp(4rem, 6vw, 6.5rem);
      font-weight: 800;
      letter-spacing: -0.05em;
      line-height: 1;
      color: transparent;
      -webkit-text-stroke: 1px var(--sv-border);
      padding: 20px 28px 0;
      transition: -webkit-text-stroke-color 0.3s;
      user-select: none;
    }
    .sv-card:hover .sv-card-bignum {
      -webkit-text-stroke-color: rgba(0,136,163,0.2);
    }

    /* content */
    .sv-card-body {
      position: relative;
      z-index: 1;
      padding: 16px 28px 28px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .sv-card-title {
      font-size: clamp(1.35rem, 2vw, 1.7rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.1;
      color: var(--sv-ink);
      margin-bottom: 12px;
      transition: color 0.3s;
    }
    .sv-card:hover .sv-card-title { color: #0c0c0b; }
    .sv-card-desc {
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      line-height: 1.85;
      color: var(--sv-muted);
      font-weight: 300;
      flex: 1;
      margin-bottom: 24px;
      transition: color 0.3s;
    }
    .sv-card:hover .sv-card-desc { color: rgba(12,12,11,0.55); }

    /* accent rule */
    .sv-card-rule {
      width: 32px;
      height: 2px;
      background: var(--sv-accent);
      margin-bottom: 20px;
      opacity: 0.5;
      transition: width 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s;
    }
    .sv-card:hover .sv-card-rule { width: 56px; opacity: 1; }

    /* tags */
    .sv-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      padding-top: 16px;
      border-top: 1px solid var(--sv-border);
      transition: border-color 0.3s;
    }
    .sv-card:hover .sv-tags { border-top-color: rgba(12,12,11,0.1); }
    .sv-tag {
      display: inline-flex;
      align-items: center;
      padding: 5px 11px;
      border: 1px solid var(--sv-border);
      border-radius: 2px;
      font-family: 'DM Mono', monospace;
      font-size: 0.55rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--sv-muted);
      transition: border-color 0.2s, color 0.2s, background 0.2s;
      white-space: nowrap;
    }
    .sv-card:hover .sv-tag {
      border-color: rgba(0,136,163,0.25);
      color: rgba(12,12,11,0.8);
    }

    /* ── FOOTER STRIP ── */
    .sv-footer {
      margin-top: 56px;
      padding-top: 32px;
      border-top: 1px solid var(--sv-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
    }
    .sv-footer-note {
      font-family: 'DM Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--sv-muted);
    }
    .sv-footer-cta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--sv-accent);
      color: #fff;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-decoration: none;
      padding: 12px 20px;
      border-radius: 2px;
      transition: background 0.2s, transform 0.2s;
    }
    .sv-footer-cta:hover { background: #ff6b3d; transform: translateX(3px); }

    /* ── RESPONSIVE ── */
    @media (max-width: 1024px) {
      .sv-grid { grid-template-columns: 1fr; }
      .sv-header { grid-template-columns: 1fr; gap: 20px; }
    }
    @media (max-width: 640px) {
      .sv-section { padding-bottom: 80px; }
      .sv-header { padding: 60px 0 40px; margin-bottom: 40px; }
      .sv-title { font-size: 2.8rem; }
      .sv-card-meta, .sv-card-body { padding-left: 18px; padding-right: 18px; }
      .sv-card-bignum { padding-left: 18px; padding-right: 18px; }
    }
  `

  return (
    <section id="services" className="sv-section">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="sv-inner">

        {/* ── HEADER ── */}
        <div className="sv-header">
          <div>
            <div className="sv-eyebrow">Services</div>
            <h2 className="sv-title">
              What We<br />
              <span className="sv-title-em">Do.</span>
            </h2>
          </div>
          <p className="sv-intro">
            We combine strategy, speed, and skill to deliver exceptional design — every time. One flat fee, unlimited revisions, real results.
          </p>
        </div>

        {/* ── CARDS ── */}
        <div className="sv-grid">
          {services.map((service) => (
            <article key={service.id} className="sv-card" {...hover}>
              <div className="sv-card-strip" aria-hidden />

              {/* decorative gradient orb */}
              <div
                className="sv-card-orb"
                style={{ background: service.gradient }}
                aria-hidden
              />

              <div className="sv-card-meta">
                <span className="sv-card-num">{service.num} /</span>
                <span className="sv-card-arrow">↗</span>
              </div>

              <div className="sv-card-bignum" aria-hidden>{service.num}</div>

              <div className="sv-card-body">
                <h3 className="sv-card-title">{service.title}</h3>
                <div className="sv-card-rule" />
                <p className="sv-card-desc">{service.description}</p>
                <div className="sv-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="sv-tag">{tag}</span>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>


        {/* ── FOOTER ── */}
        <div className="sv-footer">
          <span className="sv-footer-note">All services available on a flat monthly subscription</span>
          <a href="#contact" className="sv-footer-cta">
            Contact Us ↗
          </a>
        </div>

      </div>
    </section>
  )
}
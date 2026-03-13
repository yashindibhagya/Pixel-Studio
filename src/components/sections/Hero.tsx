'use client'

import Link from 'next/link'

export function Hero() {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400&family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,300&display=swap');

    :root {
      --hero-bg: #f9f5ee;
      --hero-ink: #18130c;
      --hero-muted: rgba(24,19,12,0.55);
      --hero-accent: #ff4d1c;
      --hero-accent2: #ffb347;
      --hero-border: rgba(24,19,12,0.12);
    }

    /* ─── RESET ─────────────────────────── */
    .h-wrap * { box-sizing: border-box; margin: 0; padding: 0; }

    /* ─── OUTER ─────────────────────────── */
    .h-wrap {
      font-family: 'Syne', sans-serif;
      background: var(--hero-bg);
      color: var(--hero-ink);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding-top: 72px; /* nav offset */
      position: relative;
    }

    /* noise grain overlay */
    .h-wrap::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
      opacity: 0.028;
      pointer-events: none;
      z-index: 0;
    }

    /* ─── TICKER ────────────────────────── */
    .h-ticker {
      border-top: 1px solid var(--hero-border);
      border-bottom: 1px solid var(--hero-border);
      overflow: hidden;
      white-space: nowrap;
      padding: 11px 0;
      position: relative;
      z-index: 1;
    }
    .h-ticker-track {
      display: inline-flex;
      gap: 0;
      animation: tickerSlide 28s linear infinite;
    }
    .h-ticker-item {
      display: inline-flex;
      align-items: center;
      gap: 18px;
      padding: 0 28px;
      font-family: 'DM Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--hero-muted);
    }
    .h-ticker-dot {
      width: 4px; height: 4px;
      background: var(--hero-accent);
      border-radius: 50%;
      flex-shrink: 0;
    }
    @keyframes tickerSlide {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }

    /* ─── MAIN GRID ─────────────────────── */
    .h-main {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 420px;
      grid-template-rows: auto 1fr;
      gap: 0;
      position: relative;
      z-index: 1;
    }

    /* ─── LEFT ──────────────────────────── */
    .h-left {
      grid-column: 1;
      grid-row: 1 / 3;
      padding: 5vw 4vw 4vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-right: 1px solid var(--hero-border);
      min-height: calc(100vh - 72px - 46px);
    }

    /* availability badge */
    .h-badge {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      border: 1px solid var(--hero-border);
      border-radius: 2px;
      padding: 7px 14px;
      width: fit-content;
      margin-bottom: 3.5vw;
      font-family: 'DM Mono', monospace;
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--hero-muted);
      animation: fadeUp 0.7s ease both;
    }
    .h-badge-dot {
      width: 6px; height: 6px;
      background: #4ade80;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.5); }
      50%      { box-shadow: 0 0 0 5px rgba(74,222,128,0); }
    }

    /* giant headline */
    .h-headline {
      font-size: clamp(4.2rem, 8.5vw, 9.5rem);
      line-height: 0.91;
      letter-spacing: -0.04em;
      font-weight: 800;
      color: var(--hero-ink);
      animation: fadeUp 0.7s 0.1s ease both;
    }
    .h-headline-em {
      font-family: 'Fraunces', serif;
      font-weight: 300;
      font-style: italic;
      color: var(--hero-accent);
      display: block;
    }
    .h-headline-ghost {
      -webkit-text-stroke: 1px rgba(24,19,12,0.18);
      color: transparent;
      display: block;
    }

    /* bottom of left */
    .h-left-foot {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
      padding-top: 3vw;
      animation: fadeUp 0.7s 0.25s ease both;
    }

    .h-desc {
      max-width: 380px;
      font-family: 'DM Mono', monospace;
      font-size: 0.78rem;
      line-height: 1.85;
      color: var(--hero-muted);
      font-weight: 300;
    }
    .h-desc strong {
      color: var(--hero-ink);
      font-weight: 400;
    }

    /* CTA cluster */
    .h-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: flex-end;
      flex-shrink: 0;
    }
    .h-btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--hero-accent);
      color: #fff;
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-decoration: none;
      padding: 13px 22px;
      border-radius: 2px;
      transition: background 0.2s, transform 0.2s;
      white-space: nowrap;
    }
    .h-btn-primary:hover { background: #ff6b3d; transform: translateX(3px); }
    .h-btn-ghost {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: transparent;
      color: var(--hero-ink);
      font-family: 'DM Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      text-decoration: none;
      border-bottom: 1px solid var(--hero-border);
      padding-bottom: 4px;
      transition: border-color 0.2s, color 0.2s;
      white-space: nowrap;
    }
    .h-btn-ghost:hover { border-color: var(--hero-accent); color: var(--hero-accent); }

    /* ─── RIGHT ─────────────────────────── */
    .h-right {
      grid-column: 2;
      grid-row: 1 / 3;
      display: flex;
      flex-direction: column;
    }

    /* stats column */
    .h-stats {
      flex: 1;
      display: grid;
      grid-template-rows: 1fr 1fr;
      border-bottom: 1px solid var(--hero-border);
    }
    .h-stat {
      padding: 2.5vw 2.2vw;
      border-bottom: 1px solid var(--hero-border);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      animation: fadeUp 0.7s ease both;
    }
    .h-stat:last-child { border-bottom: none; }
    .h-stat:nth-child(1) { animation-delay: 0.2s; }
    .h-stat:nth-child(2) { animation-delay: 0.3s; }
    .h-stat:nth-child(3) { animation-delay: 0.4s; }
    .h-stat-num {
      font-size: clamp(2.4rem, 4vw, 4.2rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1;
      color: var(--hero-ink);
      margin-bottom: 6px;
    }
    .h-stat-num span { color: var(--hero-accent); }
    .h-stat-label {
      font-family: 'DM Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--hero-muted);
    }

    /* proof strip at bottom-right */
    .h-proof {
      padding: 1.8vw 2.2vw;
      display: flex;
      align-items: center;
      gap: 14px;
      border-top: 1px solid var(--hero-border);
      animation: fadeUp 0.7s 0.45s ease both;
    }
    .h-avatars { display: flex; }
    .h-avatar {
      width: 30px; height: 30px;
      border-radius: 50%;
      border: 2px solid var(--hero-bg);
      display: flex; align-items: center; justify-content: center;
      font-size: 11px; font-weight: 700;
      color: #fff;
      flex-shrink: 0;
    }
    .h-avatar + .h-avatar { margin-left: -8px; }
    .h-av1 { background: linear-gradient(135deg, #ff4d1c, #ff9b3d); }
    .h-av2 { background: linear-gradient(135deg, #38bdf8, #0ea5e9); }
    .h-av3 { background: linear-gradient(135deg, #a78bfa, #7c3aed); }
    .h-av4 { background: linear-gradient(135deg, #4ade80, #16a34a); }
    .h-proof-text { display: flex; flex-direction: column; gap: 2px; }
    .h-proof-stars { color: var(--hero-accent2); font-size: 11px; letter-spacing: 1px; }
    .h-proof-main {
      font-family: 'DM Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--hero-ink);
    }
    .h-proof-sub {
      font-family: 'DM Mono', monospace;
      font-size: 0.52rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--hero-muted);
    }

    /* ─── SHARED ANIM ───────────────────── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ─── RESPONSIVE ────────────────────── */
    @media (max-width: 900px) {
      .h-main {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
      }
      .h-left {
        grid-column: 1; grid-row: 1;
        border-right: none;
        border-bottom: 1px solid var(--hero-border);
        min-height: unset;
        padding: 6vw 5vw;
      }
      .h-right {
        grid-column: 1; grid-row: 2;
      }
      .h-stats { grid-template-rows: unset; grid-template-columns: 1fr 1fr 1fr; }
      .h-stat { border-bottom: none; border-right: 1px solid var(--hero-border); }
      .h-stat:last-child { border-right: none; }
      .h-headline { font-size: clamp(3rem, 10vw, 6rem); }
      .h-actions { align-items: flex-start; }
      .h-left-foot { flex-direction: column; align-items: flex-start; }
    }

    @media (max-width: 560px) {
      .h-stats { grid-template-columns: 1fr 1fr; }
      .h-stat:nth-child(2) { border-right: none; }
      .h-stat:nth-child(3) { border-top: 1px solid var(--hero-border); border-right: 1px solid var(--hero-border); }
      .h-headline { font-size: clamp(2.6rem, 12vw, 4rem); }
      .h-left { padding: 8vw 5vw 6vw; }
    }
  `

  const tickerItems = [
    'Brand Identity', 'Web Design', 'UI/UX Systems', 'Motion & Animation',
    'Product Design', 'Creative Direction', 'Design Subscriptions',
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <section className="h-wrap">

        {/* ── TICKER ── */}
        <div className="h-ticker">
          <div className="h-ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="h-ticker-item">
                <span className="h-ticker-dot" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="h-main">

          {/* LEFT */}
          <div className="h-left">
            <div>
              <div className="h-badge">
                <span className="h-badge-dot" />
                Available for projects
              </div>

              <h1 className="h-headline">
                World-Class
                <span className="h-headline-em">Design</span>
                <span className="h-headline-ghost">Partner.</span>
              </h1>
            </div>

            <div className="h-left-foot">
              <p className="h-desc">
                <strong>Design subscriptions</strong> for AI-powered startups.<br />
                Strategy, UI/UX, branding and motion — all in one flat monthly fee.
                Ship faster. Look better. <strong>Grow with confidence.</strong>
              </p>

              <div className="h-actions">
                <Link href="#pricing" className="h-btn-primary">
                  View Pricing ↗
                </Link>
                <Link href="#contact" className="h-btn-ghost">
                  Get in touch →
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-right">
            <div className="h-stats">
              <div className="h-stat">
                <div className="h-stat-num">120<span>+</span></div>
                <div className="h-stat-label">Projects delivered</div>
              </div>
              <div className="h-stat">
                <div className="h-stat-num">100<span>+</span></div>
                <div className="h-stat-label">Happy clients</div>
              </div>
              <div className="h-stat">
                <div className="h-stat-num">07<span>yrs</span></div>
                <div className="h-stat-label">In the craft</div>
              </div>
            </div>

            <div className="h-proof">
              <div className="h-avatars">
                <div className="h-avatar h-av1">A</div>
                <div className="h-avatar h-av2">B</div>
                <div className="h-avatar h-av3">C</div>
                <div className="h-avatar h-av4">D</div>
              </div>
              <div className="h-proof-text">
                <span className="h-proof-stars">★★★★★</span>
                <span className="h-proof-main">Trusted by 100+ businesses</span>
                <span className="h-proof-sub">They hit their targets — you're next.</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
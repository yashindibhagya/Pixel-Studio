'use client'

import { useEffect, useRef, useState } from 'react'

type Step = {
  number: string
  title: string
  description: string
  delay: string
  offsetTop?: boolean
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Book a free discovery call',
    description:
      'A casual 30-minute conversation about your project, goals, and where you need help. No commitments, no pressure.',
    delay: '0ms',
  },
  {
    number: '02',
    title: 'Receive your action plan',
    description:
      "Within 48 hours you'll receive a detailed scope, timeline, and pricing. No guesswork, no hidden costs.",
    delay: '120ms',
    offsetTop: true,
  },
  {
    number: '03',
    title: "Let's start designing",
    description:
      "Once we're aligned, I get to work immediately. You'll see first concepts within the first week.",
    delay: '240ms',
  },
]

function ArrowLeft() {
  return (
    <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 38 C 10 10, 50 4, 76 14" stroke="rgba(240,237,230,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="4 3" />
      <path d="M68 8 L76 14 L66 18" stroke="rgba(240,237,230,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StepCard({ step, isVisible }: { step: Step; isVisible: boolean }) {
  return (
    <div
      className={`pc-card${isVisible ? ' visible' : ''}`}
      style={{
        transitionDelay: step.delay,
        marginTop: step.offsetTop ? '-60px' : '60px',
      }}
    >
      <div className="pc-card-inner">
        <div className="pc-strip" aria-hidden />

        <div className="pc-card-head">
          <span className="pc-num">{step.number} /</span>
          <span className="pc-card-arrow">↗</span>
        </div>

        <div className="pc-card-spacer" />

        <h3 className="pc-title">{step.title}</h3>
        <p className="pc-desc">{step.description}</p>
      </div>
    </div>
  )
}

export function Process() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400&family=Fraunces:ital,opsz,wght@1,9..144,300&display=swap');

    :root {
      --pc-bg: #F8F6FC;
      --pc-ink: #0C021A;
      --pc-muted: rgba(12, 2, 26, 0.6);
      --pc-accent: #0088A3;
      --pc-border: rgba(12, 2, 26, 0.08);
    }

    .pc-section {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
      background: var(--pc-bg);
      color: var(--pc-ink);
      padding: 0 0 120px;
      position: relative;
      overflow: hidden;
    }

    /* grain */
    .pc-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
      opacity: 0.025;
      pointer-events: none;
      z-index: 0;
    }

    .pc-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 4vw;
      position: relative;
      z-index: 1;
    }

    /* ── HEADER ── */
    .pc-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: end;
      gap: 32px;
      padding: 80px 0 56px;
      border-bottom: 1px solid var(--pc-border);
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .pc-header.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .pc-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      font-family: 'DM Mono', monospace;
      font-size: 0.6rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--pc-muted);
      margin-bottom: 18px;
    }
    .pc-eyebrow::before {
      content: '';
      display: inline-block;
      width: 24px; height: 1px;
      background: var(--pc-accent);
    }

    .pc-title-main {
      font-size: clamp(3rem, 6vw, 5.5rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 0.9;
      color: var(--pc-ink);
      margin: 0;
    }
    .pc-title-em {
      font-family: 'Fraunces', serif;
      font-style: italic;
      font-weight: 300;
      color: var(--pc-accent);
    }

    .pc-intro {
      font-family: 'DM Mono', monospace;
      font-size: 0.75rem;
      line-height: 1.85;
      color: var(--pc-muted);
      font-weight: 300;
      max-width: 400px;
      align-self: end;
    }

    /* ── CARDS WRAPPER ── */
    .pc-cards-wrapper {
      position: relative;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: start;
      gap: 1px;
      background: var(--pc-bg);
      border-left: 1px solid var(--pc-border);
      border-right: 1px solid var(--pc-border);
      border-bottom: 1px solid var(--pc-border);
      margin-top: 120px;
    }

    /* arrows */
    .pc-arrow {
      position: absolute;
      top: 0;
      pointer-events: none;
      z-index: 2;
      opacity: 0;
      transition: opacity 0.6s ease 0.3s;
    }
    .pc-arrow.arrow-2 { transition-delay: 0.5s; }
    .pc-arrow.visible { opacity: 1; }

    .pc-arrow.arrow-1 {
      left: calc(33.333% - 40px);
      top: 28px;
    }
    .pc-arrow.arrow-2 {
      left: calc(66.666% - 40px);
      top: calc(100% - 200px);
    }

    /* ── CARD ── */
    .pc-card {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .pc-card.visible {
      opacity: 1;
      transform: translateY(0) !important;
    }

    .pc-card-inner {
      background: #ffffff;
      min-height: 340px;
      padding: 28px;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      cursor: default;
      transition: background 0.3s;
    }
    .pc-card-inner:hover { background: #f0ecff; }

    /* ink fill from bottom — same system as Work/FAQ */
    .pc-card-inner::before {
      content: '';
      position: absolute;
      inset: 0;
      background: #ffffff;
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
      z-index: 0;
    }
    .pc-card-inner:hover::before { transform: scaleY(1); }

    /* accent bar */
    .pc-strip {
      position: absolute;
      top: 0; right: 0;
      width: 3px; height: 0%;
      background: var(--pc-accent);
      transition: height 0.45s cubic-bezier(0.16,1,0.3,1);
      z-index: 3;
    }
    .pc-card-inner:hover .pc-strip { height: 100%; }

    /* head row */
    .pc-card-head {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0;
    }
    .pc-num {
      font-family: 'DM Mono', monospace;
      font-size: 0.55rem;
      letter-spacing: 0.2em;
      color: var(--pc-muted);
      transition: color 0.3s;
    }
    .pc-card-inner:hover .pc-num { color: rgba(12,12,11,0.35); }

    .pc-card-arrow {
      width: 28px; height: 28px;
      border: 1px solid var(--pc-border);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.7rem;
      color: var(--pc-muted);
      transition: border-color 0.2s, color 0.2s, transform 0.2s;
    }
    .pc-card-inner:hover .pc-card-arrow {
      border-color: var(--pc-accent);
      color: var(--pc-accent);
      transform: rotate(45deg);
    }

    .pc-card-spacer { flex: 1; min-height: 48px; }

    .pc-title {
      position: relative;
      z-index: 1;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
      font-size: clamp(1.2rem, 1.8vw, 1.55rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.15;
      color: var(--pc-ink);
      margin: 0 0 12px;
      transition: color 0.3s;
    }
    .pc-card-inner:hover .pc-title { color: #0c0c0b; }

    .pc-desc {
      position: relative;
      z-index: 1;
      font-family: 'DM Mono', monospace;
      font-size: 0.68rem;
      font-weight: 300;
      line-height: 1.85;
      color: var(--pc-muted);
      margin: 0;
      transition: color 0.3s;
    }
    .pc-card-inner:hover .pc-desc { color: rgba(12,12,11,0.55); }

    /* ── FOOTER STRIP ── */
    .pc-footer {
      padding: 32px 0;
      border: 1px solid var(--pc-border);
      border-top: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
      padding-left: 28px;
      padding-right: 28px;
    }
    .pc-footer-note {
      font-family: 'DM Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--pc-muted);
    }
    .pc-footer-cta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--pc-accent);
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
    .pc-footer-cta:hover { background: #ff6b3d; transform: translateX(3px); }

    /* ── RESPONSIVE ── */
    @media (max-width: 1024px) {
      .pc-header { grid-template-columns: 1fr; gap: 20px; }
      .pc-cards-wrapper { margin-top: 80px; }
    }
    @media (max-width: 768px) {
      .pc-cards-wrapper {
        grid-template-columns: 1fr;
        margin-top: 48px;
      }
      .pc-card { margin-top: 0 !important; }
      .pc-arrow { display: none; }
      .pc-card-inner { min-height: auto; }
    }
    @media (max-width: 640px) {
      .pc-section { padding-bottom: 80px; }
      .pc-header { padding: 60px 0 40px; }
      .pc-title-main { font-size: 2.8rem; }
      .pc-card-inner { padding: 22px 20px; }
      .pc-footer { padding: 24px 20px; flex-direction: column; align-items: flex-start; }
    }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <section id="process" className="pc-section" ref={sectionRef}>
        <div className="pc-inner">

          {/* ── HEADER ── */}
          <div className={`pc-header${isVisible ? ' visible' : ''}`}>
            <div>
              <div className="pc-eyebrow">Process</div>
              <h2 className="pc-title-main">
                How it<br />
                <span className="pc-title-em">Works.</span>
              </h2>
            </div>
            <p className="pc-intro">
              Get unlimited design work for a simple monthly rate. No hourly billing, no surprises — pause or cancel whenever you need.
            </p>
          </div>

          {/* ── CARDS ── */}
          <div className="pc-cards-wrapper">

            <div className={`pc-arrow arrow-1${isVisible ? ' visible' : ''}`}>
              <ArrowLeft />
            </div>
            <div className={`pc-arrow arrow-2${isVisible ? ' visible' : ''}`}>
              <ArrowLeft />
            </div>

            {steps.map((step) => (
              <StepCard key={step.number} step={step} isVisible={isVisible} />
            ))}
          </div>

          {/* ── FOOTER STRIP ── */}
          <div className="pc-footer">
            <span className="pc-footer-note">Three steps. Zero friction. Real results.</span>
            <a href="#contact" className="pc-footer-cta">Book a free call ↗</a>
          </div>

        </div>
      </section>
    </>
  )
}
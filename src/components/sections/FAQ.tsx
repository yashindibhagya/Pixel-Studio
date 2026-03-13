'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCursorHover } from '@/components/Cursor'

const faqs: { question: string; answer: string }[] = [
  {
    question: "What's your design process like?",
    answer: "We start with a discovery call to understand your goals, then move through strategy, concepts, and iterations. You'll get clear milestones and regular check-ins so the project stays on track.",
  },
  {
    question: 'How long does a typical project take?',
    answer: "It depends on scope — from 2 weeks for a focused task to 8–12 weeks for a full brand or product redesign. We'll give you a timeline and milestones in the proposal.",
  },
  {
    question: 'How much do you charge?',
    answer: "We work on fixed project fees or monthly retainers, so you know the cost up front. Pricing is based on scope; we'll outline it clearly after the discovery call.",
  },
  {
    question: 'Do you work with startups?',
    answer: "Yes. We work with startups at every stage — from pre-launch to scaling. We're used to moving fast and fitting into your workflow.",
  },
  {
    question: 'Can you work with my existing team?',
    answer: "Absolutely. We slot in as your design partner and work with your product, marketing, or dev team. We use your tools and processes where it makes sense.",
  },
  {
    question: 'What do I need to have ready before we start?',
    answer: "A clear brief, goals, and any brand or product references help. We'll guide you on what we need in the discovery call so you're not guessing.",
  },
]

export function FAQ() {
  const hover = useCursorHover()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400&family=Fraunces:ital,opsz,wght@1,9..144,300&display=swap');

    :root {
      --fq-bg: #F8F6FC;
      --fq-ink: #0C021A;
      --fq-muted: rgba(12, 2, 26, 0.6);
      --fq-accent: #ff4d1c;
      --fq-border: rgba(12, 2, 26, 0.08);
    }

    .fq-section {
      font-family: 'Syne', sans-serif;
      background: var(--fq-bg);
      color: var(--fq-ink);
      padding: 0 0 120px;
      position: relative;
      overflow: hidden;
    }

    /* grain */
    .fq-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
      opacity: 0.025;
      pointer-events: none;
      z-index: 0;
    }

    .fq-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 4vw;
      position: relative;
      z-index: 1;
    }

    /* ── HEADER ── */
    .fq-header {
      padding: 80px 0 56px;
      border-bottom: 1px solid var(--fq-border);
      margin-bottom: 0;
    }

    .fq-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      font-family: 'DM Mono', monospace;
      font-size: 0.6rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--fq-muted);
      margin-bottom: 18px;
    }
    .fq-eyebrow::before {
      content: '';
      display: inline-block;
      width: 24px; height: 1px;
      background: var(--fq-accent);
    }

    .fq-title {
      font-size: clamp(3rem, 6vw, 5.5rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 0.92;
      color: var(--fq-ink);
      margin: 0;
    }
    .fq-title-em {
      font-family: 'Fraunces', serif;
      font-style: italic;
      font-weight: 300;
      color: var(--fq-accent);
    }

    /* ── BODY GRID ── */
    .fq-body-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: var(--fq-border);
      border-left: 1px solid var(--fq-border);
      border-right: 1px solid var(--fq-border);
      border-bottom: 1px solid var(--fq-border);
    }

    /* ── LEFT PANEL ── */
    .fq-left {
      background: var(--fq-bg);
      padding: 48px 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 40px;
    }

    .fq-availability {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 1px solid var(--fq-border);
      border-radius: 2px;
      padding: 7px 14px;
      width: fit-content;
      font-family: 'DM Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--fq-muted);
      margin-bottom: 24px;
    }
    .fq-avail-dot {
      width: 6px; height: 6px;
      background: #4ade80;
      border-radius: 50%;
      animation: fqPulse 2s infinite;
    }
    @keyframes fqPulse {
      0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.5); }
      50%      { box-shadow: 0 0 0 5px rgba(74,222,128,0); }
    }

    .fq-cta-heading {
      font-size: clamp(1.5rem, 2.8vw, 2.4rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.1;
      color: var(--fq-ink);
      margin-bottom: 16px;
    }
    .fq-cta-heading-em {
      font-family: 'Fraunces', serif;
      font-style: italic;
      font-weight: 300;
      color: var(--fq-accent);
    }

    .fq-cta-body {
      font-family: 'DM Mono', monospace;
      font-size: 0.72rem;
      line-height: 1.85;
      color: var(--fq-muted);
      font-weight: 300;
      margin-bottom: 32px;
      max-width: 380px;
    }

    .fq-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
    }

    .fq-btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--fq-accent);
      color: #fff;
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-decoration: none;
      padding: 13px 22px;
      border-radius: 2px;
      transition: background 0.2s, transform 0.2s;
      white-space: nowrap;
    }
    .fq-btn-primary:hover { background: #ff6b3d; transform: translateX(3px); }

    .fq-btn-ghost {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: transparent;
      color: var(--fq-ink);
      font-family: 'DM Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      text-decoration: none;
      border-bottom: 1px solid var(--fq-border);
      padding-bottom: 4px;
      transition: border-color 0.2s, color 0.2s;
      white-space: nowrap;
    }
    .fq-btn-ghost:hover { border-color: var(--fq-accent); color: var(--fq-accent); }

    /* stat pair at bottom of left */
    .fq-stat-row {
      display: flex;
      gap: 32px;
      padding-top: 32px;
      border-top: 1px solid var(--fq-border);
    }
    .fq-stat-num {
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: var(--fq-ink);
      line-height: 1;
      margin-bottom: 4px;
    }
    .fq-stat-num span { color: var(--fq-accent); }
    .fq-stat-label {
      font-family: 'DM Mono', monospace;
      font-size: 0.55rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--fq-muted);
    }

    /* ── RIGHT PANEL – FAQ LIST ── */
    .fq-right {
      background: var(--fq-bg);
      display: flex;
      flex-direction: column;
    }

    .fq-item {
      position: relative;
      border-bottom: 1px solid var(--fq-border);
      cursor: pointer;
      overflow: hidden;
      transition: background 0.3s;
    }
    .fq-item:last-child { border-bottom: none; }

    /* ink fill sweeps up from bottom — same as Work hover */
    .fq-item::before {
      content: '';
      position: absolute;
      inset: 0;
      background: #ffffff;
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
      z-index: 0;
    }
    .fq-item:hover::before { transform: scaleY(1); }

    /* accent bar right side */
    .fq-item-strip {
      position: absolute;
      top: 0; right: 0;
      width: 3px;
      height: 0%;
      background: var(--fq-accent);
      transition: height 0.45s cubic-bezier(0.16,1,0.3,1);
      z-index: 2;
    }
    .fq-item:hover .fq-item-strip { height: 100%; }

    .fq-item-header {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 22px 28px;
    }

    .fq-question {
      font-family: 'Syne', sans-serif;
      font-size: clamp(0.85rem, 1.2vw, 1rem);
      font-weight: 700;
      color: var(--fq-ink);
      text-align: left;
      flex: 1;
      transition: color 0.3s;
      letter-spacing: -0.01em;
    }
    .fq-item:hover .fq-question { color: #0c0c0b; }
    .fq-item.expanded .fq-question { color: var(--fq-ink); }
    .fq-item.expanded:hover .fq-question { color: #0c0c0b; }

    .fq-toggle {
      position: relative;
      z-index: 1;
      width: 26px; height: 26px;
      border: 1px solid var(--fq-border);
      border-radius: 2px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem;
      font-weight: 300;
      color: var(--fq-muted);
      flex-shrink: 0;
      transition: border-color 0.2s, color 0.2s, background 0.2s;
      font-family: 'DM Mono', monospace;
    }
    .fq-item:hover .fq-toggle {
      border-color: rgba(12,12,11,0.2);
      color: #0c0c0b;
      background: transparent;
    }
    .fq-item.expanded .fq-toggle {
      border-color: var(--fq-accent);
      color: var(--fq-accent);
      background: rgba(255,77,28,0.08);
    }
    .fq-item.expanded:hover .fq-toggle {
      border-color: var(--fq-accent);
      color: var(--fq-accent);
      background: rgba(255,77,28,0.12);
    }

    .fq-answer-wrap {
      position: relative;
      z-index: 1;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s ease;
    }
    .fq-item.expanded .fq-answer-wrap { max-height: 400px; }

    .fq-answer {
      padding: 0 28px 22px;
      border-top: 1px solid var(--fq-border);
      padding-top: 16px;
    }
    .fq-item:hover .fq-answer { border-top-color: rgba(12,12,11,0.1); }

    .fq-answer p {
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      line-height: 1.85;
      color: var(--fq-muted);
      margin: 0;
      font-weight: 300;
      transition: color 0.3s;
    }
    .fq-item:hover .fq-answer p { color: rgba(12,12,11,0.6); }

    /* ── RESPONSIVE ── */
    @media (max-width: 1024px) {
      .fq-body-grid { grid-template-columns: 1fr; }
      .fq-left { padding: 40px 28px; }
    }
    @media (max-width: 640px) {
      .fq-section { padding-bottom: 80px; }
      .fq-header { padding: 60px 0 40px; }
      .fq-title { font-size: 2.8rem; }
      .fq-left { padding: 32px 20px; gap: 28px; }
      .fq-item-header { padding: 18px 20px; }
      .fq-answer { padding: 0 20px 18px; padding-top: 14px; }
      .fq-stat-row { gap: 20px; }
    }
  `

  return (
    <section id="faqs" className="fq-section">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="fq-inner">

        {/* ── HEADER ── */}
        <div className="fq-header">
          <div className="fq-eyebrow">FAQ</div>
          <h2 className="fq-title">
            Have a project<br />
            in <span className="fq-title-em">mind?</span>
          </h2>
        </div>

        {/* ── BODY GRID ── */}
        <div className="fq-body-grid">

          {/* LEFT — CTA */}
          <div className="fq-left">
            <div>
              <div className="fq-availability">
                <span className="fq-avail-dot" />
                Available from March 2025
              </div>

              <h3 className="fq-cta-heading">
                Let's make<br />
                it <span className="fq-cta-heading-em">real.</span>
              </h3>

              <p className="fq-cta-body">
                Whether you need a full brand identity, a product redesign, or a strategic creative partner — let's talk and figure out the best path forward.
              </p>

              <div className="fq-actions">
                <Link href="mailto:hello@pixelstudio.io?subject=Book%20a%20free%20call" className="fq-btn-primary" {...hover}>
                  Book a free call ↗
                </Link>
                <Link href="mailto:hello@pixelstudio.io" className="fq-btn-ghost" {...hover}>
                  Drop us an email →
                </Link>
              </div>
            </div>

            <div className="fq-stat-row">
              <div>
                <div className="fq-stat-num">14<span>d</span></div>
                <div className="fq-stat-label">Avg. first delivery</div>
              </div>
              <div>
                <div className="fq-stat-num">∞<span></span></div>
                <div className="fq-stat-label">Revisions included</div>
              </div>
              <div>
                <div className="fq-stat-num">0<span>lock</span></div>
                <div className="fq-stat-label">Cancel anytime</div>
              </div>
            </div>
          </div>

          {/* RIGHT — FAQ accordion */}
          <div className="fq-right">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={item.question}
                  className={`fq-item${isOpen ? ' expanded' : ''}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setOpenIndex(isOpen ? null : index)
                    }
                  }}
                  aria-expanded={isOpen}
                  {...hover}
                >
                  <div className="fq-item-strip" aria-hidden />

                  <div className="fq-item-header">
                    <div className="fq-question">{item.question}</div>
                    <div className="fq-toggle" aria-hidden>{isOpen ? '−' : '+'}</div>
                  </div>

                  <div className="fq-answer-wrap">
                    <div className="fq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
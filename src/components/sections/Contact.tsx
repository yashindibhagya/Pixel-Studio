'use client'

import Link from 'next/link'
import { useCursorHover } from '@/components/Cursor'

const contactMethods = [
  {
    id: 'email',
    label: 'Write to sales',
    value: 'sales@pixelstudio.io',
    icon: '✉',
  },
  {
    id: 'phone',
    label: 'Call us',
    value: '+359-887-779',
    icon: '☎',
  },
]

const pricingOptions = ['Design retainer', 'Single project', 'Brand identity', 'Other']

export function Contact() {
  const hover = useCursorHover()

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400&family=Fraunces:ital,opsz,wght@1,9..144,300&display=swap');

    :root {
      --ct-bg: #F8F6FC;
      --ct-ink: #0C021A;
      --ct-muted: rgba(12, 2, 26, 0.6);
      --ct-accent: #ff4d1c;
      --ct-border: rgba(12, 2, 26, 0.08);
    }

    .ct-section {
      font-family: 'Syne', sans-serif;
      background: var(--ct-bg);
      color: var(--ct-ink);
      padding: 0 0 120px;
      position: relative;
      overflow: hidden;
    }

    /* grain */
    .ct-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
      opacity: 0.025;
      pointer-events: none;
      z-index: 0;
    }

    .ct-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 4vw;
      position: relative;
      z-index: 1;
    }

    /* ── HEADER ── */
    .ct-header {
      padding: 80px 0 56px;
      border-bottom: 1px solid var(--ct-border);
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: end;
      gap: 32px;
    }

    .ct-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      font-family: 'DM Mono', monospace;
      font-size: 0.6rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--ct-muted);
      margin-bottom: 18px;
    }
    .ct-eyebrow::before {
      content: '';
      display: inline-block;
      width: 24px; height: 1px;
      background: var(--ct-accent);
    }

    .ct-title {
      font-size: clamp(3rem, 6vw, 5.5rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 0.9;
      color: var(--ct-ink);
      margin: 0;
    }
    .ct-title-em {
      font-family: 'Fraunces', serif;
      font-style: italic;
      font-weight: 300;
      color: var(--ct-accent);
    }

    .ct-header-right {
      font-family: 'DM Mono', monospace;
      font-size: 0.75rem;
      line-height: 1.85;
      color: var(--ct-muted);
      font-weight: 300;
      max-width: 400px;
      align-self: end;
    }

    /* ── BODY GRID ── */
    .ct-body {
      display: grid;
      grid-template-columns: 1fr 1.4fr;
      gap: 1px;
      background: var(--ct-border);
      border-left: 1px solid var(--ct-border);
      border-right: 1px solid var(--ct-border);
      border-bottom: 1px solid var(--ct-border);
    }

    /* ── LEFT ── */
    .ct-left {
      background: #ffffff;
      padding: 48px 36px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 40px;
    }

    .ct-avail {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 1px solid var(--ct-border);
      border-radius: 2px;
      padding: 7px 14px;
      width: fit-content;
      font-family: 'DM Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--ct-muted);
      margin-bottom: 28px;
    }
    .ct-avail-dot {
      width: 6px; height: 6px;
      background: #4ade80;
      border-radius: 50%;
      animation: ctPulse 2s infinite;
    }
    @keyframes ctPulse {
      0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.5); }
      50%      { box-shadow: 0 0 0 5px rgba(74,222,128,0); }
    }

    .ct-left-heading {
      font-size: clamp(1.6rem, 2.8vw, 2.5rem);
      font-weight: 800;
      letter-spacing: -0.035em;
      line-height: 1.05;
      color: var(--ct-ink);
      margin-bottom: 14px;
    }
    .ct-left-heading-em {
      font-family: 'Fraunces', serif;
      font-style: italic;
      font-weight: 300;
      color: var(--ct-accent);
    }

    .ct-left-copy {
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      line-height: 1.85;
      color: var(--ct-muted);
      font-weight: 300;
      margin-bottom: 36px;
      max-width: 340px;
    }

    /* contact method cards */
    .ct-methods {
      display: flex;
      flex-direction: column;
      gap: 1px;
      background: var(--ct-border);
      border: 1px solid var(--ct-border);
      flex: 1;
    }
    .ct-method {
      background: #ffffff;
      padding: 18px 20px;
      display: flex;
      align-items: center;
      gap: 16px;
      position: relative;
      overflow: hidden;
      transition: background 0.3s;
      cursor: default;
    }
    .ct-method::before {
      content: '';
      position: absolute;
      inset: 0;
      background: #ffffff;
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
      z-index: 0;
    }
    .ct-method:hover::before { transform: scaleY(1); }

    .ct-method-strip {
      position: absolute;
      top: 0; right: 0;
      width: 3px; height: 0%;
      background: var(--ct-accent);
      transition: height 0.4s cubic-bezier(0.16,1,0.3,1);
      z-index: 2;
    }
    .ct-method:hover .ct-method-strip { height: 100%; }

    .ct-method-icon {
      position: relative;
      z-index: 1;
      width: 36px; height: 36px;
      border: 1px solid var(--ct-border);
      border-radius: 2px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.9rem;
      color: var(--ct-muted);
      flex-shrink: 0;
      transition: border-color 0.3s, color 0.3s, background 0.3s;
    }
    .ct-method:hover .ct-method-icon {
      border-color: var(--ct-accent);
      color: var(--ct-accent);
      background: rgba(12,12,11,0.06);
    }
    .ct-method-text {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .ct-method-label {
      font-family: 'DM Mono', monospace;
      font-size: 0.55rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--ct-muted);
      transition: color 0.3s;
    }
    .ct-method:hover .ct-method-label { color: rgba(12,12,11,0.45); }
    .ct-method-value {
      font-family: 'Syne', sans-serif;
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--ct-ink);
      letter-spacing: -0.01em;
      transition: color 0.3s;
    }
    .ct-method:hover .ct-method-value { color: #0c0c0b; }

    /* ── RIGHT — FORM ── */
    .ct-right {
      background: #ffffff;
      padding: 48px 40px;
    }

    .ct-form-title {
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: var(--ct-ink);
      margin: 0 0 28px;
    }

    .ct-form {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .ct-form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    .ct-field {
      display: flex;
      flex-direction: column;
      gap: 7px;
    }

    .ct-field-label {
      font-family: 'DM Mono', monospace;
      font-size: 0.55rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--ct-muted);
    }

    .ct-input,
    .ct-textarea {
      background: rgba(12, 2, 26, 0.02);
      border: 1px solid var(--ct-border);
      border-radius: 2px;
      padding: 12px 14px;
      font-size: 0.8rem;
      font-family: 'DM Mono', monospace;
      font-weight: 300;
      color: var(--ct-ink);
      outline: none;
      transition: border-color 0.2s, background 0.2s;
    }
    .ct-input:focus,
    .ct-textarea:focus {
      border-color: var(--ct-accent);
      background: rgba(255,77,28,0.04);
    }
    .ct-input::placeholder,
    .ct-textarea::placeholder {
      color: rgba(12, 2, 26, 0.35);
      font-size: 0.75rem;
    }
    .ct-textarea {
      min-height: 100px;
      resize: vertical;
    }

    /* pricing pills */
    .ct-options {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
    .ct-option {
      border: 1px solid var(--ct-border);
      border-radius: 2px;
      padding: 10px 14px;
      font-family: 'DM Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-align: center;
      color: var(--ct-muted);
      cursor: pointer;
      transition: border-color 0.2s, color 0.2s, background 0.2s;
    }
    .ct-option.active {
      border-color: var(--ct-accent);
      color: var(--ct-ink);
      background: rgba(255,77,28,0.08);
    }
    .ct-option:hover:not(.active) {
      border-color: rgba(12, 2, 26, 0.15);
      color: var(--ct-ink);
    }

    .ct-divider {
      height: 1px;
      background: var(--ct-border);
    }

    .ct-submit {
      width: 100%;
      border: none;
      background: var(--ct-accent);
      color: #fff;
      font-family: 'Syne', sans-serif;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 15px 20px;
      border-radius: 2px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      transition: background 0.2s, transform 0.2s;
      margin-top: 4px;
    }
    .ct-submit:hover { background: #ff6b3d; transform: translateX(3px); }

    .ct-submit-arrow {
      width: 22px; height: 22px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      display: flex; align-items: center; justify-content: center;
      font-size: 0.8rem;
      transition: transform 0.25s;
    }
    .ct-submit:hover .ct-submit-arrow { transform: rotate(45deg); }

    /* ── RESPONSIVE ── */
    @media (max-width: 1024px) {
      .ct-body { grid-template-columns: 1fr; }
      .ct-header { grid-template-columns: 1fr; gap: 20px; }
      .ct-left { padding: 36px 28px; }
      .ct-right { padding: 36px 28px; }
    }
    @media (max-width: 640px) {
      .ct-section { padding-bottom: 80px; }
      .ct-header { padding: 60px 0 40px; }
      .ct-title { font-size: 2.8rem; }
      .ct-left { padding: 28px 20px; }
      .ct-right { padding: 28px 20px; }
      .ct-form-row { grid-template-columns: 1fr; }
      .ct-options { grid-template-columns: 1fr; }
    }
  `

  return (
    <section id="contact" className="ct-section">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="ct-inner">

        {/* ── HEADER ── */}
        <div className="ct-header">
          <div>
            <div className="ct-eyebrow">Contact</div>
            <h2 className="ct-title">
              Let's<br />
              <span className="ct-title-em">Talk.</span>
            </h2>
          </div>
          <p className="ct-header-right">
            Got questions or ready to start your design project? Let's bring your ideas to life with a tailored plan that fits your team and timeline.
          </p>
        </div>

        {/* ── BODY ── */}
        <div className="ct-body">

          {/* LEFT */}
          <div className="ct-left">
            <div>
              <div className="ct-avail">
                <span className="ct-avail-dot" />
                Available from March 2025
              </div>

              <h3 className="ct-left-heading">
                Start a<br />
                <span className="ct-left-heading-em">conversation.</span>
              </h3>
              <p className="ct-left-copy">
                We're a small team that moves fast. Reach out directly and we'll get back to you within one business day.
              </p>
            </div>

            <div className="ct-methods">
              {contactMethods.map((m) => (
                <div key={m.id} className="ct-method" {...hover}>
                  <div className="ct-method-strip" />
                  <div className="ct-method-icon">{m.icon}</div>
                  <div className="ct-method-text">
                    <span className="ct-method-label">{m.label}</span>
                    <span className="ct-method-value">{m.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="ct-right">
            <p className="ct-form-title">Send us a message</p>

            <form className="ct-form" onSubmit={(e) => e.preventDefault()}>
              <div className="ct-form-row">
                <div className="ct-field">
                  <label className="ct-field-label">Your name *</label>
                  <input className="ct-input" placeholder="John Doe" name="name" autoComplete="name" />
                </div>
                <div className="ct-field">
                  <label className="ct-field-label">E-mail *</label>
                  <input className="ct-input" placeholder="you@email.com" type="email" name="email" autoComplete="email" />
                </div>
              </div>

              <div className="ct-field">
                <label className="ct-field-label">Website</label>
                <input className="ct-input" placeholder="https://yoursite.com" name="website" />
              </div>

              <div className="ct-field">
                <span className="ct-field-label">Pricing model</span>
                <div className="ct-options">
                  {pricingOptions.map((opt, i) => (
                    <div key={opt} className={`ct-option${i === 0 ? ' active' : ''}`}>{opt}</div>
                  ))}
                </div>
              </div>

              <div className="ct-field">
                <label className="ct-field-label">Message</label>
                <textarea className="ct-textarea" placeholder="Tell us about your project…" name="message" />
              </div>

              <div className="ct-divider" />

              <button type="submit" className="ct-submit" {...hover}>
                <span>Get in touch</span>
                <span className="ct-submit-arrow">↗</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
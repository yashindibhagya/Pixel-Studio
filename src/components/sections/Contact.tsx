'use client'

import Link from 'next/link'
import { useCursorHover } from '@/components/Cursor'

const contactMethods = [
  {
    id: 'email',
    label: 'Write to sales',
    value: 'sales@formix.com',
  },
  {
    id: 'phone',
    label: 'Call us',
    value: '+359-887-779',
  },
]

export function Contact() {
  const hover = useCursorHover()

  const sectionStyles = `
        .contact-section {
          background: #f4f4f4;
          padding: 96px 16px 120px;
          display: flex;
          justify-content: center;
        }

        .contact-shell {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
          gap: 24px;
        }

        /* Left card */
        .contact-left {
          background: #ffffff;
          border-radius: 22px;
          padding: 32px 28px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 480px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.08);
        }

        .contact-left-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        .contact-label {
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
          width: fit-content;
        }

        .contact-label .label-slashes {
          color: var(--accent);
        }

        .contact-heading {
          font-size: clamp(40px, 5vw, 56px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin: 0 0 16px;
          color: #111;
        }

        .contact-heading .period {
          color: var(--accent);
        }

        .contact-copy {
          font-size: 14px;
          line-height: 1.7;
          color: #6b6b6b;
          max-width: 340px;
        }

        .contact-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 28px;
        }

        .contact-card {
          background: #f5f5f5;
          border: 1px solid #e4e4e4;
          border-radius: 14px;
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
          cursor: default;
        }

        .contact-card:hover {
          background: #fafafa;
          border-color: #ddd;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }

        .contact-card-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0, 229, 255, 0.12);
          border: 1px solid rgba(0, 229, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .contact-card-label {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #888;
        }

        .contact-card-value {
          font-size: 13px;
          font-weight: 600;
          color: #111;
        }

        /* Right form card */
        .contact-right {
          background: #ffffff;
          border-radius: 22px;
          padding: 32px 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.08);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-form-title {
          font-size: 18px;
          font-weight: 700;
          color: #111;
          letter-spacing: -0.02em;
          margin: 0 0 4px;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-field-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #666;
        }

        .contact-input,
        .contact-textarea {
          background: #f8f8f8;
          border: 1px solid #e4e4e4;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          color: #111;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }

        .contact-input:focus,
        .contact-textarea:focus {
          border-color: var(--accent);
          background: #fff;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #999;
        }

        .contact-textarea {
          min-height: 100px;
          resize: vertical;
        }

        .contact-pricing-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .contact-pricing-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .contact-pricing-pill {
          border-radius: 12px;
          border: 1px solid #e4e4e4;
          background: #f8f8f8;
          padding: 10px 14px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 12px;
          font-weight: 500;
          text-align: center;
          color: #666;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .contact-pricing-pill.active {
          background: rgba(0, 229, 255, 0.1);
          border-color: var(--accent);
          color: #111;
        }

        .contact-pricing-pill:hover:not(.active) {
          background: #f0f0f0;
          color: #111;
        }

        .contact-divider {
          height: 1px;
          background: #e4e4e4;
        }

        .contact-submit {
          width: 100%;
          border-radius: 12px;
          border: none;
          background: #111;
          color: #fff;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: 14px 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          margin-top: 4px;
        }

        .contact-submit:hover {
          background: #222;
          transform: translateY(-1px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.2);
        }

        .contact-submit-arrow {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--accent);
          color: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          transition: transform 0.25s;
        }

        .contact-submit:hover .contact-submit-arrow {
          transform: rotate(45deg);
        }

        @media (max-width: 1024px) {
          .contact-section {
            padding: 80px 14px 96px;
          }
          .contact-shell {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .contact-left {
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 64px 12px 80px;
          }
          .contact-heading {
            font-size: clamp(32px, 6vw, 42px);
          }
        }

        @media (max-width: 640px) {
          .contact-section {
            padding: 56px 12px 72px;
          }
          .contact-cards {
            grid-template-columns: 1fr;
            margin-top: 24px;
          }
          .contact-form-row {
            grid-template-columns: 1fr;
          }
          .contact-pricing-options {
            grid-template-columns: 1fr;
          }
          .contact-left {
            padding: 28px 22px;
          }
          .contact-right {
            padding: 28px 22px;
          }
          .contact-heading {
            font-size: 30px;
          }
        }

        @media (max-width: 480px) {
          .contact-section {
            padding: 48px 10px 64px;
          }
          .contact-label {
            font-size: 10px;
            padding: 6px 12px;
          }
          .contact-heading {
            font-size: 26px;
          }
          .contact-left,
          .contact-right {
            padding: 22px 18px;
          }
          .contact-form-title {
            font-size: 16px;
          }
        }
      `

  return (
    <section id="contact" className="contact-section">
      <style dangerouslySetInnerHTML={{ __html: sectionStyles }} />

      <div className="contact-shell">

        {/* Left */}
        <div className="contact-left">
          <div className="contact-left-inner">
            <div>
              <div className="contact-label">
                <span className="label-slashes">//</span>
                <span>CONTACT</span>
                <span className="label-slashes">//</span>
              </div>
              <h2 className="contact-heading">
                Let&apos;s Talk<span className="period">.</span>
              </h2>
              <p className="contact-copy">
                Got questions or ready to start your design project? Let&apos;s bring your ideas to life with a tailored
                plan that fits your team and timeline.
              </p>
            </div>

            <div className="contact-cards">
              {contactMethods.map((method) => (
                <div key={method.id} className="contact-card" {...hover}>
                  <div className="contact-card-icon">
                    {method.id === 'email' ? '✉' : '☎'}
                  </div>
                  <div>
                    <div className="contact-card-label">{method.label}</div>
                    <div className="contact-card-value">{method.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <p className="contact-form-title">Send us a message</p>

            <div className="contact-form-row">
              <div className="contact-field">
                <label className="contact-field-label">Your name *</label>
                <input className="contact-input" placeholder="John Doe" name="name" autoComplete="name" />
              </div>
              <div className="contact-field">
                <label className="contact-field-label">E-mail *</label>
                <input className="contact-input" placeholder="you@email.com" type="email" name="email" autoComplete="email" />
              </div>
            </div>

            <div className="contact-field">
              <label className="contact-field-label">Website</label>
              <input className="contact-input" placeholder="https://yoursite.com" name="website" />
            </div>

            <div className="contact-pricing-row">
              <span className="contact-field-label">Pricing model</span>
              <div className="contact-pricing-options">
                <div className="contact-pricing-pill active">Design retainer</div>
                <div className="contact-pricing-pill">Single project</div>
              </div>
            </div>

            <div className="contact-field">
              <label className="contact-field-label">Message</label>
              <textarea className="contact-textarea" placeholder="Tell us about your project…" name="message" />
            </div>

            <div className="contact-divider" />

            <button type="submit" className="contact-submit" {...hover}>
              <span>Get in touch</span>
              <span className="contact-submit-arrow">↗</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
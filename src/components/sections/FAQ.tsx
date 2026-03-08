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

  const sectionStyles = `
        .faq-section {
          background: #ffffff;
          padding: 96px 16px 120px;
          display: flex;
          justify-content: center;
        }

        .faq-container {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
          gap: 64px;
          align-items: flex-start;
        }

        .faq-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          background: #f5f5f5;
          box-shadow: none;
          font-size: 12px;
          color: #555;
          margin-bottom: 18px;
        }

        .faq-pill-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #16a34a;
          box-shadow: 0 0 0 4px rgba(22,163,74,0.25);
        }

        .faq-pill-strong {
          font-weight: 600;
          color: #111;
        }

        .faq-section .work-label {
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
        .faq-section .work-label .label-slashes {
          color: var(--accent);
        }
        .faq-section .work-title {
          font-size: clamp(46px, 6vw, 62px);
          font-weight: 800;
          letter-spacing: -0.04em;
          margin: 0 0 18px;
          color: #111;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
        }
        .faq-section .work-title span.period {
          color: var(--accent);
        }

        .faq-body {
          max-width: 420px;
          font-size: 14px;
          line-height: 1.7;
          color: #6b6b6b;
          margin-bottom: 28px;
        }

        .faq-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .faq-btn-primary,
        .faq-btn-secondary {
          appearance: none;
          border: none;
          outline: none;
          cursor: pointer;
          border-radius: 999px;
          padding: 11px 20px;
          font-size: 14px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, color 0.15s ease;
        }

        .faq-btn-primary {
          background: #111;
          color: #fff;
          box-shadow: 0 16px 32px rgba(0,0,0,0.4);
        }

        .faq-btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .faq-btn-primary-icon {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          background: #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #0b1120;
        }

        .faq-btn-secondary {
          background: #ffffff;
          color: #111;
          border: 1px solid #e4e4e4;
          box-shadow: 0 12px 26px rgba(0,0,0,0.08);
        }

        .faq-btn-secondary:hover {
          transform: translateY(-1px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.12);
        }

        .faq-btn-secondary-icon {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: #0ea5e9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #fff;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          position: relative;
          background: #f5f5f5;
          border-radius: 14px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow 0.2s ease;
        }

        .faq-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #111;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }

        .faq-item:hover::before {
          transform: scaleY(1);
        }

        .faq-item-strip {
          position: absolute;
          top: 0;
          right: 0;
          width: 5px;
          height: 0;
          background: var(--accent);
          transition: height 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .faq-item:hover .faq-item-strip {
          height: 100%;
        }

        .faq-item-header {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 20px;
        }

        .faq-question {
          font-size: 15px;
          font-weight: 600;
          color: #111;
          text-align: left;
          flex: 1;
          transition: color 0.35s;
        }

        .faq-item:hover .faq-question {
          color: #ffffff;
        }

        .faq-toggle {
          position: relative;
          z-index: 1;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 300;
          color: #fff;
          background: #9ca3af;
          flex-shrink: 0;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .faq-item:hover .faq-toggle {
          background: rgba(255,255,255,0.25);
        }

        .faq-item.expanded .faq-toggle {
          background: var(--accent);
        }

        .faq-item.expanded:hover .faq-toggle {
          background: var(--accent);
        }

        .faq-answer-wrap {
          position: relative;
          z-index: 1;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-item.expanded .faq-answer-wrap {
          max-height: 400px;
        }

        .faq-answer {
          padding: 14px 20px 18px;
          border-top: 1px solid #e5e7eb;
        }

        .faq-item:hover .faq-answer {
          border-top-color: rgba(255,255,255,0.15);
        }

        .faq-answer p {
          font-size: 14px;
          line-height: 1.65;
          color: #555;
          margin: 0;
          transition: color 0.35s;
        }

        .faq-item:hover .faq-answer p {
          color: rgba(255,255,255,0.55);
        }

        @media (max-width: 1024px) {
          .faq-section {
            padding: 80px 14px 96px;
          }
          .faq-container {
            grid-template-columns: minmax(0, 1.1fr);
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 64px 12px 80px;
          }
          .faq-section .work-title {
            font-size: clamp(34px, 7vw, 44px);
          }
          .faq-body {
            margin-bottom: 24px;
          }
        }

        @media (max-width: 640px) {
          .faq-section {
            padding: 56px 12px 72px;
          }
          .faq-container {
            gap: 32px;
          }
          .faq-section .work-title {
            font-size: 30px;
          }
          .faq-question {
            font-size: 14px;
          }
          .faq-actions {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .faq-section {
            padding: 48px 10px 64px;
          }
          .faq-section .work-label {
            font-size: 10px;
            padding: 6px 12px;
          }
          .faq-section .work-title {
            font-size: 26px;
          }
          .faq-item-header {
            padding: 16px 18px;
          }
          .faq-answer {
            padding: 12px 18px 16px;
          }
        }
      `

  return (
    <section id="faq" className="faq-section">
      <style dangerouslySetInnerHTML={{ __html: sectionStyles }} />

      <div className="faq-container">
        <div>
          <div className="work-label">
            <span className="label-slashes">//</span>
            <span>FAQ</span>
            <span className="label-slashes">//</span>
          </div>
          <h2 className="work-title">
            Have a project in mind<span className="period">.</span>
            <br />
            Let&apos;s make it real.
          </h2>

          <p className="faq-body">
            I&apos;m currently available for new projects starting March 2025. Whether you need a full brand identity,
            a product redesign, or a strategic creative partner, let&apos;s talk.
          </p>

          <div className="faq-actions">
            <Link
              href="mailto:hello@pixelstudio.io?subject=Book%20a%20free%20call"
              className="faq-btn-primary"
              {...hover}
            >
              <span className="faq-btn-primary-icon">●</span>
              <span>Book a free call</span>
            </Link>

            <Link
              href="mailto:hello@pixelstudio.io"
              className="faq-btn-secondary"
              {...hover}
            >
              <span className="faq-btn-secondary-icon">✉</span>
              <span>Let&apos;s chat</span>
            </Link>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.question}
                className={`faq-item ${isOpen ? 'expanded' : ''}`}
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
              >
                <div className="faq-item-strip" aria-hidden />
                <div className="faq-item-header">
                  <div className="faq-question">{item.question}</div>
                  <div className="faq-toggle" aria-hidden>{isOpen ? '−' : '+'}</div>
                </div>
                <div className="faq-answer-wrap">
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

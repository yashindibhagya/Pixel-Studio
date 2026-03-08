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

// SVG curved arrows matching the screenshot
function ArrowLeft() {
  return (
    <svg
      width="80"
      height="48"
      viewBox="0 0 80 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 38 C 10 10, 50 4, 76 14"
        stroke="#111"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <path
        d="M68 8 L76 14 L66 18"
        stroke="#111"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="80"
      height="48"
      viewBox="0 0 80 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M76 10 C 70 38, 30 44, 4 34"
        stroke="#111"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <path
        d="M12 40 L4 34 L14 30"
        stroke="#111"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StepCard({
  step,
  index,
  isVisible,
}: {
  step: Step
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`step-card ${isVisible ? "visible" : ""}`}
      style={{
        transitionDelay: step.delay,
        marginTop: step.offsetTop ? "-60px" : "60px",
      }}
    >
      <div className="card-inner">
        <div className="step-strip" aria-hidden />
        <span className="step-number">{step.number}</span>
        <h3 className="step-title">{step.title}</h3>
        <div className="card-spacer" />
        <p className="step-description">{step.description}</p>
      </div>
    </div>
  );
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

  const sectionStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&display=swap');

        .hiw-section {
          font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #fff;
          padding: 100px 24px 120px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hiw-container {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
        }

        /* Header */
        .hiw-header {
          text-align: center;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .hiw-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hiw-label {
          display: inline-block;
          font-size: 13px;
          font-weight: 500;
          color: #111;
          background: #f0f0f0;
          border-radius: 999px;
          padding: 5px 14px;
          margin-bottom: 20px;
          letter-spacing: 0.01em;
        }

        .hiw-heading {
          font-size: clamp(40px, 6vw, 68px);
          font-weight: 800;
          color: #0a0a0a;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin: 0;
        }

        /* Cards layout */
        .hiw-cards-wrapper {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: start;
          gap: 40px;
          margin-top: 146px;
        }

        /* Arrow containers — positioned between cards */
        .arrow-between {
          position: absolute;
          top: 0;
          pointer-events: none;
          z-index: 2;
        }

        .arrow-between.arrow-1 {
          /* Between card 1 and card 2, sits near top of card 1 */
          left: calc(33.333% - 40px);
          top: 28px;
          opacity: 0;
          transition: opacity 0.6s ease 0.3s;
        }
        .arrow-between.arrow-2 {
          /* Between card 2 and card 3, points toward third box */
          left: calc(66.666% - 40px);
          /* top: 28px; */
          top: calc(100% - 200px);
          opacity: 0;
          transition: opacity 0.6s ease 0.5s;
        }
        .arrow-between.visible {
          opacity: 1;
        }

        /* Step card */
        .step-card {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .step-card.visible {
          opacity: 1;
          transform: translateY(0) !important; /* override inline marginTop with animation */
        }

        .card-inner {
          background: #f6f6f6;
          border-radius: 16px;
          padding: 28px 28px 28px;
          min-height: 340px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: background 0.35s ease;
        }

        .card-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #111;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }

        .card-inner:hover::before {
          transform: scaleY(1);
        }

        .step-strip {
          position: absolute;
          top: 0;
          right: 0;
          width: 5px;
          height: 0;
          background: var(--accent);
          transition: height 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .card-inner:hover .step-strip {
          height: 100%;
        }

        .step-number {
          position: relative;
          z-index: 1;
          font-size: 13px;
          font-weight: 500;
          color: #888;
          letter-spacing: 0.01em;
          display: block;
          margin-bottom: 10px;
          transition: color 0.35s;
        }

        .card-inner:hover .step-number {
          color: rgba(255,255,255,0.35);
        }

        .step-title {
          position: relative;
          z-index: 1;
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 700;
          color: #0a0a0a;
          line-height: 1.2;
          letter-spacing: -0.025em;
          margin: 0;
          max-width: 240px;
          transition: color 0.35s;
        }

        .card-inner:hover .step-title {
          color: #ffffff;
        }

        .card-spacer {
          flex: 1;
          min-height: 40px;
        }

        .step-description {
          position: relative;
          z-index: 1;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.6;
          color: #555;
          margin: 0;
          max-width: 280px;
          transition: color 0.35s;
        }

        .card-inner:hover .step-description {
          color: rgba(255,255,255,0.55);
        }
          

        /* Responsive */
        @media (max-width: 1024px) {
          .hiw-section {
            padding: 80px 20px 100px;
          }
          .hiw-cards-wrapper {
            gap: 32px;
            margin-top: 80px;
          }
        }

        @media (max-width: 768px) {
          .hiw-section {
            padding: 64px 18px 80px;
          }
          .hiw-header {
            margin-bottom: 40px;
          }
          .hiw-heading {
            font-size: clamp(34px, 7vw, 44px);
          }
          .hiw-cards-wrapper {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 48px;
          }
          .step-card {
            margin-top: 0 !important;
          }
          .arrow-between {
            display: none;
          }
          .card-inner {
            min-height: auto;
            padding: 24px;
          }
        }

        @media (max-width: 640px) {
          .hiw-section {
            padding: 56px 16px 72px;
          }
          .hiw-heading {
            font-size: 32px;
          }
          .step-title {
            font-size: clamp(18px, 4vw, 22px);
          }
        }

        @media (max-width: 480px) {
          .hiw-section {
            padding: 48px 14px 64px;
          }
          .hiw-heading {
            font-size: 28px;
          }
          .hiw-label {
            font-size: 12px;
            padding: 4px 12px;
          }
          .card-inner {
            padding: 20px 18px;
          }
          .step-description {
            font-size: 13px;
          }
        }
      `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: sectionStyles }} />

      <section id="process" className="hiw-section" ref={sectionRef}>
      <div className="benefits-container">
        <div className="benefits-header">
          <div>
            <div className="benefits-label">
              <span>// BENEFITS //</span>
            </div>
            <h2 className="benefits-title">
              How it works<span className="period">.</span>
            </h2>
          </div>
          <p className="benefits-intro">
            Get unlimited design work for a simple monthly rate. No hourly billing, no surprises — pause or cancel whenever you need.
          </p>
        </div>

          {/* Cards + Arrows */}
          <div className="hiw-cards-wrapper">

            {/* Arrow 1: top-center between card 1 and 2 */}
            <div className={`arrow-between arrow-1 ${isVisible ? "visible" : ""}`}>
              <ArrowLeft />
            </div>

            {/* Arrow 2: between card 2 and 3, points to third box */}
            <div className={`arrow-between arrow-2 ${isVisible ? "visible" : ""}`}>
              <ArrowLeft />
            </div>

            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
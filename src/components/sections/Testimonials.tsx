'use client'

import { useCursorHover } from '@/components/Cursor'

const testimonials = [
  {
    text: 'Devora Labs transformed our outdated platform into a revenue-generating machine. Conversion rates up 340% in the first quarter.',
    name: 'Sarah Chen',
    role: 'CEO, NovaPay',
    initial: 'S',
  },
  {
    text: "The team delivered a mobile app that our customers actually love. 4.9 stars on the App Store speaks for itself. Absolute professionals.",
    name: 'Marcus Wright',
    role: 'Founder, Flux',
    initial: 'M',
  },
  {
    text: "Best tech investment we've made. They understood our vision better than we did — and executed it flawlessly, on time, on budget.",
    name: 'Priya Patel',
    role: 'VP Product, Terrain',
    initial: 'P',
  },
]

export function Testimonials() {
  const hover = useCursorHover()

  return (
    <section className="testimonials-section">
      <div className="section-label reveal">Social Proof</div>
      <h2 className="section-title reveal reveal-delay-1">Client Stories</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`testimonial-card reveal reveal-delay-${i}`}
            {...hover}
          >
            <div className="quote-mark">&quot;</div>
            <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initial}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

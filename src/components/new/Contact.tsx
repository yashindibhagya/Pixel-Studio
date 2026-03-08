'use client'

import Link from 'next/link'
import { useCursorHover } from '@/components/Cursor'

export function Contact() {
  const hover = useCursorHover()

  return (
    <section id="contact" className="cta-section">
      <h2 className="cta-title">
        Ready to Build
        <br />
        Something Great?
      </h2>
      <p className="cta-sub">Let&apos;s talk about your project. We respond within 24 hours.</p>
      <Link
        href="mailto:hello@pixelstudio.io"
        className="btn-dark"
        {...hover}
      >
        hello@pixelstudio.io
      </Link>
    </section>
  )
}

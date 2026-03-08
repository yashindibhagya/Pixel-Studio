'use client'

import Link from 'next/link'
import { useCursorHover } from '@/components/Cursor'

export function Footer() {
  const hover = useCursorHover()

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">Pixel<span>.</span>Studio</div>
          <p className="footer-tagline">
            Building digital products that grow businesses. Est. 2017, operating globally.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Branding'].map((l) => (
              <li key={l}>
                <Link href="#services" {...hover}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            {['About Us', 'Work', 'Process', 'Careers'].map((l) => (
              <li key={l}>
                <Link href="#" {...hover}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Connect</div>
          <ul className="footer-links">
            {['Twitter / X', 'LinkedIn', 'Dribbble', 'GitHub'].map((l) => (
              <li key={l}>
                <Link href="#" {...hover}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2025 Pixel Studio. All rights reserved.</span>
        <span className="footer-copy">Privacy · Terms</span>
      </div>
    </footer>
  )
}

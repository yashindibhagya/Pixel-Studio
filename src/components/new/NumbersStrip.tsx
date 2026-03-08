'use client'

import { useEffect, useRef } from 'react'

const numbers = [
  { val: '120', unit: '+', label: 'Projects Shipped', desc: 'Across 14 industries worldwide' },
  { val: '98', unit: '%', label: 'Client Retention', desc: 'Most clients return for another project' },
  { val: '7', unit: 'yr', label: 'In Business', desc: 'Founded 2017, profitable from day one' },
  { val: '4.9', unit: '★', label: 'Avg App Rating', desc: 'Across all published mobile apps' },
]

export function NumbersStrip() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.12 }
    )
    el.querySelectorAll('.fade-in').forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="numbers-strip" ref={sectionRef}>
      {numbers.map((n, i) => (
        <div key={n.label} className={`number-item fade-in delay-${i}`}>
          <div className="number-val">{n.val}<span>{n.unit}</span></div>
          <div className="number-label">{n.label}</div>
          <div className="number-desc">{n.desc}</div>
        </div>
      ))}
    </div>
  )
}

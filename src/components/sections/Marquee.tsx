'use client'

const marqueeItems = [
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Brand Strategy',
  'Next.js',
  'React Native',
  'Product Design',
  'Digital Transformation',
]

export function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {[...Array(2)].map((_, i) =>
          marqueeItems.map((item, j) => (
            <span key={`${i}-${j}`} className="marquee-item">
              {item}
              <span className="dot" />
            </span>
          ))
        )}
      </div>
    </div>
  )
}

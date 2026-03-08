'use client'

const tickerItems = [
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Brand Strategy',
  'Next.js',
  'React Native',
  'TypeScript',
  'Product Design',
]

export function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {[...Array(3)].flatMap((_, i) =>
          tickerItems.map((item, j) => (
            <span key={`${i}-${j}`} className="ticker-item">
              {item}
            </span>
          ))
        )}
      </div>
    </div>
  )
}

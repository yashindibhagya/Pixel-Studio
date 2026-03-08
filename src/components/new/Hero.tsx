import Link from 'next/link'

const heroImages = [
  'https://images.pexels.com/photos/7319113/pexels-photo-7319113.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/7319111/pexels-photo-7319111.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/7319110/pexels-photo-7319110.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/7319103/pexels-photo-7319103.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/7319102/pexels-photo-7319102.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/7319101/pexels-photo-7319101.jpeg?auto=compress&cs=tinysrgb&w=1200',
]

export function Hero() {
  const heroStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&display=swap');

        .ai-hero {
          font-family: 'Geist', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          min-height: auto;
          background: #f4f4f4;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 96px 20px 0px;
          color: #111;
          border-bottom: 1px solid rgba(148,163,184,0.35);
        }

        .ai-hero-inner {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
          gap: 56px;
          align-items: stretch;
        }

        /* Left content */
        .ai-hero-label {
          display: inline-flex;
          align-items: center;
          padding: 8px 14px;
          border-radius: 999px;
          background:rgb(0, 0, 0);
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .ai-hero-heading {
          font-size: clamp(46px, 6vw, 72px);
          line-height: 1.02;
          letter-spacing: -0.05em;
          font-weight: 800;
          margin: 0 0 18px;
          color: #111111;
        }

        .ai-hero-heading span.block {
          display: block;
        }

        .ai-hero-heading-em {
          position: relative;
          display: inline-block;
          z-index: 1;
        }

        .ai-hero-heading-em::after {
          content: '';
          position: absolute;
          inset: 62% -4px -8px;
          background: linear-gradient(90deg, #06b6d4,rgb(87, 61, 255));
          border-radius: 999px;
          z-index: -1;
          opacity: 0.16;
        }

        .ai-hero-sub {
          max-width: 460px;
          font-size: 15px;
          line-height: 1.7;
          color:rgb(119, 119, 119);
          margin: 0 0 32px;
        }

        .ai-hero-left {
          margin-top: 140px;
        }

        /* Buttons */
        .ai-hero-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .ai-hero-btn-primary,
        .ai-hero-btn-ghost {
          appearance: none;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-transform: none;
          border-radius: 999px;
          padding: 12px 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          transition: transform 0.16s ease, box-shadow 0.16s ease, background 0.16s ease, color 0.16s ease;
        }

        .ai-hero-btn-primary {
          background: #111111;
          color: #ffffff;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.55);
          position: relative;
          overflow: hidden;
        }

        .ai-hero-btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 26px 50px rgb(155, 239, 254);
        }

        .ai-hero-btn-ghost {
          background: #ffffff;
          color: #111111;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 10px 26px rgba(0,0,0,0.07);
        }

        .ai-hero-btn-ghost:hover {
          background: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 20px 32px rgba(0,0,0,0.16);
        }

        .ai-hero-btn-icon {
          width: 26px;
          height: 26px;
          border-radius: 999px;
          background: linear-gradient(135deg, #06b6d4, rgb(87, 61, 255));
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 14px;
        }

        /* Social proof */
        .ai-hero-proof {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 10px 16px;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 18px 38px rgba(0,0,0,0.12);
        }

        .ai-hero-avatars {
          display: flex;
        }

        .ai-hero-avatar {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: 2px solid #ffffff;
          background: linear-gradient(135deg, #111, #333);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f5f5f5;
          font-size: 13px;
          font-weight: 500;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .ai-hero-avatar + .ai-hero-avatar {
          margin-left: -10px;
        }

        .ai-hero-proof-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .ai-hero-stars {
          color: #ff7a2f;
          font-size: 14px;
        }

        .ai-hero-proof-main {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #111;
        }

        .ai-hero-proof-sub {
          font-size: 11px;
          color: #777;
        }

        .ai-hero-bottom-rule {
          display: none;
        }

        /* Right gallery – two animated image columns */
        .ai-hero-gallery {
          display: flex;
          gap: 14px;
          height: 1020px;
          overflow: hidden;
          width: 100%;
          margin-top: -72px; /* lift images closer to header */
        }

        .ai-hero-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1 1 0;
        }

        .ai-hero-column--down {
          animation: aiHeroColumnDown 9s ease-in-out infinite alternate;
        }

        .ai-hero-column--up {
          animation: aiHeroColumnUp 9s ease-in-out infinite alternate;
        }

        .ai-hero-photo {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          box-shadow: 0 22px 45px rgba(0,0,0,0.45);
        }

        .ai-hero-photo--tall {
          height: 260px;
        }

        .ai-hero-photo--short {
          height: 200px;
        }

        .ai-hero-photo::after {
          content: 'Dummy image';
          position: absolute;
          right: 14px;
          bottom: 14px;
          padding: 4px 9px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(0,0,0,0.66);
          color: rgba(249,250,251,0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(148,163,184,0.55);
        }

        @keyframes aiHeroColumnDown {
          0% { transform: translateY(-28px); }
          100% { transform: translateY(28px); }
        }

        @keyframes aiHeroColumnUp {
          0% { transform: translateY(28px); }
          100% { transform: translateY(-28px); }
        }

        @media (max-width: 1024px) {
          .ai-hero {
            padding-top: 64px;
          }
          .ai-hero-inner {
            grid-template-columns: minmax(0, 1.1fr);
          }
          .ai-hero-gallery {
            margin-top: 40px;
          }
        }

        @media (max-width: 640px) {
          .ai-hero {
            padding: 48px 16px 64px;
          }

          .ai-hero-inner {
            gap: 40px;
          }

          .ai-hero-heading {
            font-size: 34px;
          }

          .ai-hero-gallery {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: 120px;
          }
        }
      `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: heroStyles }} />

      <section className="ai-hero">
        <div className="ai-hero-inner">
          {/* Left content */}
          <div className="ai-hero-left">
            <div className="ai-hero-label">
              <span>// AVAILABLE FOR PROJECTS //</span>
            </div>

            <h1 className="ai-hero-heading">
              <span className="block">World-Class</span>
              <span className="block">Design Partner</span>
              <span className="block">
                For <span className="ai-hero-heading-em">AI Startups</span>
              </span>
            </h1>

            <p className="ai-hero-sub">
              Design subscriptions for AI growing startup.
            </p>

            <div className="ai-hero-actions">
              <Link href="#pricing" className="ai-hero-btn-primary">
                <span>View Pricing</span>
                <span className="ai-hero-btn-icon">↗</span>
              </Link>

              <Link href="#contact" className="ai-hero-btn-ghost">
                <span>Get in touch</span>
                <span className="ai-hero-btn-icon">↗</span>
              </Link>
            </div>

            <div className="ai-hero-proof">
              <div className="ai-hero-avatars">
                <div className="ai-hero-avatar">A</div>
                <div className="ai-hero-avatar">B</div>
                <div className="ai-hero-avatar">C</div>
                <div className="ai-hero-avatar">D</div>
              </div>
              <div className="ai-hero-proof-text">
                <span className="ai-hero-stars">★★★★★</span>
                <span className="ai-hero-proof-main">Trusted by 100+ businesses</span>
                <span className="ai-hero-proof-sub">THEY HIT THEIR TARGETS — YOU'RE NEXT.</span>
              </div>
            </div>
          </div>

          {/* Right side gallery – animated image columns */}
          <div className="ai-hero-gallery">
            {(() => {
              const midpoint = Math.ceil(heroImages.length / 2)
              const firstColumn = heroImages.slice(0, midpoint)
              const secondColumn = heroImages.slice(midpoint)

              return (
                <>
                  <div className="ai-hero-column ai-hero-column--down">
                    {firstColumn.map((src, index) => (
                      <div
                        key={`col1-${index}`}
                        className={`ai-hero-photo ${
                          index % 2 === 0 ? 'ai-hero-photo--tall' : 'ai-hero-photo--short'
                        }`}
                        style={{ backgroundImage: `url(${src})` }}
                      />
                    ))}
                  </div>

                  <div className="ai-hero-column ai-hero-column--up">
                    {secondColumn.map((src, index) => (
                      <div
                        key={`col2-${index}`}
                        className={`ai-hero-photo ${
                          index % 2 === 0 ? 'ai-hero-photo--short' : 'ai-hero-photo--tall'
                        }`}
                        style={{ backgroundImage: `url(${src})` }}
                      />
                    ))}
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      </section>
    </>
  )
}

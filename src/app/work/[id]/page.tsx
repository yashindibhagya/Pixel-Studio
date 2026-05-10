import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

type Props = {
  params: { id: string }
}

const projectImages: Record<
  string,
  {
    src: string
    alt: string
  }
> = {
  mawprint: {
    src: '/mawprint.png',
    alt: 'MawPrint website homepage — Creative-Driven Sublimation Printing & Branding Solutions Company',
  },
  'mawprint-dashboard': {
    src: '/dashboard.png',
    alt: 'MawPrint operations dashboard interface',
  },
  terrain: {
    src: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Outdoor ecommerce storefront showcasing hiking gear',
  },
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return { title: 'Project not found | Devora Labs' }
  }

  return {
    title: `${project.title} – Case Study | Devora Labs`,
    description: project.summary,
  }
}

/* ─────────────────────────────────────────────
   Inline styles — paste the <style> block into
   your globals.css or a CSS module as preferred
───────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  :root {
    --ink:      #18130c;
    --paper:    #F8F6FC;
    --warm-mid: #c8b89a;
    --accent:   #0088A3;
    --muted:    #7a6f64;
    --serif:    'DM Serif Display', Georgia, serif;
    --sans:     'DM Sans', system-ui, sans-serif;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── page shell ── */
  .cp {
    min-height: 100vh;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--sans);
    -webkit-font-smoothing: antialiased;
  }

  .cp-inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
  }

  /* ── hero ── */
  .cp-hero {
    padding: clamp(4rem, 10vw, 9rem) 0 clamp(3rem, 6vw, 5rem);
    border-bottom: 1px solid rgba(200,184,154,.18);
    position: relative;
    overflow: hidden;
  }

  .cp-hero::before {
    content: attr(data-index);
    position: absolute;
    right: -0.05em;
    top: -0.15em;
    font-family: var(--serif);
    font-size: clamp(14rem, 28vw, 26rem);
    line-height: 1;
    color: rgba(200,184,154,.06);
    pointer-events: none;
    user-select: none;
  }

  .cp-kicker {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  .cp-kicker-num {
    font-family: var(--serif);
    font-size: 0.875rem;
    color: var(--accent);
    letter-spacing: 0.04em;
  }

  .cp-kicker-line {
    width: 2.5rem;
    height: 1px;
    background: var(--accent);
    flex-shrink: 0;
  }

  .cp-kicker-label {
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--warm-mid);
  }

  .cp-title {
    font-family: var(--serif);
    font-size: clamp(3rem, 7vw, 6.5rem);
    line-height: 1.02;
    letter-spacing: -0.02em;
    color: var(--ink);
    max-width: 16ch;
    margin-bottom: 1.75rem;
  }

  .cp-summary {
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 300;
    line-height: 1.65;
    color: var(--muted);
    max-width: 52ch;
    margin-bottom: 3rem;
  }

  .cp-hero-media {
    margin-top: 2.5rem;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(200,184,154,.3);
    box-shadow: 0 22px 60px rgba(15,23,42,0.25);
    max-height: 360px;
  }

  .cp-hero-media-img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  /* ── meta strip ── */
  .cp-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5px;
    border: 1px solid rgba(200,184,154,.14);
    border-radius: 2px;
    overflow: hidden;
    width: fit-content;
  }

  .cp-meta-item {
    padding: 1rem 1.75rem;
    background: rgba(200,184,154,.04);
    border-right: 1px solid rgba(200,184,154,.14);
  }

  .cp-meta-item:last-child { border-right: none; }

  .cp-meta-label {
    display: block;
    font-size: 0.65rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--muted);
    margin-bottom: 0.35rem;
  }

  .cp-meta-value {
    font-size: 0.875rem;
    color: var(--ink);
    font-weight: 400;
  }

  /* ── body ── */
  .cp-body {
    padding: clamp(3rem, 7vw, 6rem) 0;
  }

  /* overview block */
  .cp-overview {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
    padding-bottom: clamp(3rem, 6vw, 5rem);
    border-bottom: 1px solid rgba(200,184,154,.12);
    margin-bottom: clamp(3rem, 6vw, 5rem);
  }

  @media (max-width: 680px) {
    .cp-overview { grid-template-columns: 1fr; gap: 2rem; }
  }

  .cp-section-tag {
    font-size: 0.65rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent);
    margin-bottom: 1.25rem;
    display: block;
  }

  .cp-section-heading {
    font-family: var(--serif);
    font-size: clamp(2rem, 3.5vw, 3rem);
    line-height: 1.08;
    color: var(--ink);
  }

  .cp-overview-text {
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.75;
    color: var(--muted);
  }

  /* two-col work / results */
  .cp-dual {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    border: 1px solid rgba(200,184,154,.14);
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: clamp(3rem, 6vw, 5rem);
  }

  @media (max-width: 680px) {
    .cp-dual { grid-template-columns: 1fr; }
  }

  .cp-dual-col {
    padding: 2.5rem clamp(1.5rem, 3vw, 2.75rem);
    background: rgba(200,184,154,.03);
  }

  .cp-dual-col + .cp-dual-col {
    border-left: 1px solid rgba(200,184,154,.14);
    background: rgba(200,184,154,.06);
  }

  @media (max-width: 680px) {
    .cp-dual-col + .cp-dual-col {
      border-left: none;
      border-top: 1px solid rgba(200,184,154,.14);
    }
  }

  .cp-dual-col h3 {
    font-family: var(--serif);
    font-size: 1.35rem;
    color: var(--ink);
    margin-bottom: 1.5rem;
  }

  .cp-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .cp-list li {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.6;
    color: var(--muted);
    padding-left: 1.25rem;
    position: relative;
  }

  .cp-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
  }

  /* results list has bolder numbers */
  .cp-dual-col:last-child .cp-list li {
    color: var(--ink);
    font-weight: 400;
  }

  /* next steps */
  .cp-next {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    padding: 2.5rem clamp(1.5rem, 3vw, 2.75rem);
    background: rgba(201,79,44,.06);
    border: 1px solid rgba(201,79,44,.2);
    border-radius: 2px;
  }

  .cp-next-icon {
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.1rem;
  }

  .cp-next-icon svg {
    width: 14px;
    height: 14px;
    fill: var(--accent);
  }

  .cp-next-label {
    font-size: 0.65rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent);
    display: block;
    margin-bottom: 0.5rem;
  }

  .cp-next-text {
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.7;
    color: var(--warm-mid);
  }

  /* ── footer nav ── */
  .cp-footer {
    padding: clamp(2.5rem, 5vw, 4rem) 0 clamp(3rem, 6vw, 5rem);
    border-top: 1px solid rgba(200,184,154,.12);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .cp-back {
    font-size: 0.85rem;
    font-weight: 400;
    color: var(--muted);
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: color .2s;
  }

  .cp-back:hover { color: var(--paper); }

  .cp-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink);
    background: var(--paper);
    text-decoration: none;
    padding: 0.85rem 2rem;
    border-radius: 1px;
    transition: background .2s, color .2s;
  }

  .cp-cta:hover {
    background: var(--accent);
    color: var(--paper);
  }
`

/* ──────────────────────────────────────────── */

function renderCaseBody(id: string) {
  const cases: Record<
    string,
    {
      overview: string
      did: string[]
      results: string[]
      next: string
    }
  > = {
    mawprint: {
      overview:
        "The CEO of MawPrint came to us with a clear goal: build a brand-new website from the ground up that properly represented who they are and what they deliver. The existing online presence was outdated and failed to communicate the quality and range of their print services.",
      did: [
        "Kicked off with a direct briefing session with the CEO to capture vision, tone, and requirements",
        "Defined the brand direction, visual language, and site architecture",
        "Designed and built the full website from scratch, tailored to the print industry",
        "Created clear service pages that communicate MawPrint’s capabilities at a glance",
        "Delivered a fully responsive, fast, and production-ready site at mawprint.com",
      ],
      results: [
        "Live professional website at mawprint.com, delivered to spec",
        "Clean service structure that makes it easy for clients to understand offerings",
        "Modern visual identity that reflects the quality of MawPrint’s work",
      ],
      next:
        "Following the website launch, the MawPrint team came back to us to build an internal dashboard to manage their growing operations — see Project 02.",
    },
    "mawprint-dashboard": {
      overview:
        "With their new website live, MawPrint needed a way to manage their internal operations more efficiently. The CEO wanted a single dashboard where the team could track jobs, manage client work, and stay on top of their workload — without juggling spreadsheets.",
      did: [
        "Ran a requirements session with the MawPrint team to map their daily workflow",
        "Designed the full UX for job creation, status tracking, and client management",
        "Built and deployed the dashboard at formdesk-mawprint.vercel.app",
        "Structured the data model around how the MawPrint team actually works",
        "Iterated quickly based on direct feedback from the team during build",
      ],
      results: [
        "Operational dashboard live and in active daily use by the MawPrint team",
        "Centralised view of all active jobs, clients, and outstanding work",
        "Replaced manual tracking and reduced time spent on coordination",
      ],
      next:
        "We continue to support MawPrint with ongoing improvements to the dashboard as their team and operations grow.",
    },
    terrain: {
      overview:
        "Terrain is a multi-location outdoor retailer with a deep catalog and highly seasonal inventory. Their legacy storefront couldn’t surface the right products at the right time.",
      did: [
        "Replatformed the site to a modern, headless commerce stack",
        "Redesigned navigation around activities instead of product categories",
        "Crafted rich product storytelling templates for premium lines",
        "Optimised checkout for both desktop and on-the-go mobile shoppers",
      ],
      results: [
        "Higher average order value on curated collections",
        "Faster page loads across key landing pages",
        "More flexible merchandising options for the internal team",
      ],
      next:
        "We’re continuing to support Terrain with seasonal campaign pages and experimentation on their product detail layouts.",
    },
  }

  const c = cases[id] ?? {
    overview:
      "We partner with teams to clarify the product story, clean up critical flows, and ship the visual systems that make everything feel intentional.",
    did: [],
    results: [],
    next: "",
  }

  return (
    <div className="cp-body">
      {/* Overview */}
      <div className="cp-overview">
        <div>
          <span className="cp-section-tag">Overview</span>
          <h2 className="cp-section-heading">The challenge</h2>
        </div>
        <p className="cp-overview-text">{c.overview}</p>
      </div>

      {/* Work + Results */}
      {(c.did.length > 0 || c.results.length > 0) && (
        <div className="cp-dual">
          <div className="cp-dual-col">
            <h3>What we did</h3>
            <ul className="cp-list">
              {c.did.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="cp-dual-col">
            <h3>Results</h3>
            <ul className="cp-list">
              {c.results.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Next steps */}
      {c.next && (
        <div className="cp-next">
          <div className="cp-next-icon" aria-hidden="true">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0l1.8 5.5H16l-4.9 3.6 1.9 5.7L8 11.3l-5 3.5 1.9-5.7L0 5.5h6.2z" />
            </svg>
          </div>
          <div>
            <span className="cp-next-label">What's next</span>
            <p className="cp-next-text">{c.next}</p>
          </div>
        </div>
      )}
    </div>
  )
}

/* ──────────────────────────────────────────── */

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) notFound()

  const index = projects.findIndex((p) => p.id === project.id)
  const indexStr = index >= 0 ? String(index + 1).padStart(2, '0') : '01'
  const heroImage = projectImages[project.id]

  return (
    <>
      {/* inject styles — move to globals.css or a CSS module in production */}
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="cp">
        <div className="cp-inner">
          {/* ── Hero ── */}
          <header className="cp-hero" data-index={indexStr}>
            <div className="cp-kicker">
              <span className="cp-kicker-num">{indexStr}</span>
              <span className="cp-kicker-line" />
              <span className="cp-kicker-label">{project.label}</span>
            </div>

            <h1 className="cp-title">{project.title}</h1>
            <p className="cp-summary">{project.summary}</p>

            <div className="cp-meta">
              <div className="cp-meta-item">
                <span className="cp-meta-label">Engagement</span>
                <span className="cp-meta-value">Product design &amp; build</span>
              </div>
              <div className="cp-meta-item">
                <span className="cp-meta-label">Timeline</span>
                <span className="cp-meta-value">8–12 weeks</span>
              </div>
              <div className="cp-meta-item">
                <span className="cp-meta-label">Scope</span>
                <span className="cp-meta-value">Strategy · UX · UI</span>
              </div>
              {project.url && (
                <div className="cp-meta-item">
                  <span className="cp-meta-label">Live site</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 400, textDecoration: 'none' }}
                  >
                    {project.url.replace(/https?:\/\//, '')} ↗
                  </a>
                </div>
              )}
            </div>

            {heroImage && (
              <div className="cp-hero-media">
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="cp-hero-media-img"
                />
              </div>
            )}
          </header>

          {/* ── Body ── */}
          {renderCaseBody(project.id)}

          {/* ── Footer ── */}
          <footer className="cp-footer">
            <Link href="/#work" className="cp-back">
              ← Back to selected work
            </Link>
            <Link href="/#contact" className="cp-cta">
              Start a project ↗
            </Link>
          </footer>
        </div>
      </div>
    </>
  )
}
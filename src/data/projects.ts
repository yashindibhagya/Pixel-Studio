export type Project = {
  id: string
  label: string
  title: string
  summary: string
}

export const projects: Project[] = [
  {
    id: 'nova',
    label: 'Fintech · Web App',
    title: 'NovaPay Financial Platform',
    summary: 'Redesigned dashboard and flows that increased paid conversions by 37%.',
  },
  {
    id: 'flux',
    label: 'Health · Mobile',
    title: 'Flux Fitness Tracker',
    summary: 'A mobile experience that keeps users returning every day to close their rings.',
  },
  {
    id: 'terrain',
    label: 'E‑Commerce · Retail',
    title: 'Terrain Outdoor Storefront',
    summary: 'Modern, conversion‑focused storefront that boosted average order value.',
  },
]


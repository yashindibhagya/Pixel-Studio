export type Project = {
  id: string
  label: string
  title: string
  summary: string
  url?: string
}

export const projects: Project[] = [
  {
    id: 'mawprint',
    label: 'Print Industry · Brand & Web',
    title: 'MawPrint',
    summary: "A brand-new website built from scratch — directly shaped by the CEO's vision and requirements.",
    url: 'https://mawprint.com/',
  },
  {
    id: 'mawprint-dashboard',
    label: 'Print Industry · Web App',
    title: 'MawPrint Work Dashboard',
    summary: 'A custom operations dashboard for the MawPrint team to manage orders, jobs, and client work in one place.',
    url: 'https://formdesk-mawprint.vercel.app/',
  },
  {
    id: 'terrain',
    label: 'E‑Commerce · Retail',
    title: 'Terrain Outdoor Storefront',
    summary: 'Modern, conversion‑focused storefront that boosted average order value.',
  },
]

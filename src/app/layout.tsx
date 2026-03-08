import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/new/Header'
import { Cursor } from '@/components/Cursor'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Pixel.Studio | We Build Digital Products That Grow',
  description: 'Full-service digital agency specializing in web applications, mobile apps, and brand experiences that move markets.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('devolabs-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);else if(window.matchMedia('(prefers-color-scheme: light)').matches)document.documentElement.setAttribute('data-theme','light');})();`,
          }}
        />
      </head>
      <body className="antialiased min-h-screen">
        <ThemeProvider>
          <Cursor>
            <div className="page-shell">
              <Header />
              <main>{children}</main>
            </div>
          </Cursor>
        </ThemeProvider>
      </body>
    </html>
  )
}

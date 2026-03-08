import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/sections/Header'
import { Cursor } from '@/components/Cursor'
import { ThemeProvider } from '@/components/ThemeProvider'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

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
            __html: `document.documentElement.setAttribute('data-theme','light');`,
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

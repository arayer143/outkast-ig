import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'OutKast Industrial Group',
    template: '%s | OutKast Industrial Group',
  },
  description: 'Innovative industrial solutions for a changing world',
  metadataBase: new URL('https://outkastindustrial.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://outkastindustrial.com',
    siteName: 'OutKast Industrial Group',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


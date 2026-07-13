import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/lib/auth'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Developer Hub',
  description: 'AI-Powered Full-Stack Web Development Platform',
  keywords: 'developer, portfolio, projects, coding, AI, full-stack',
  authors: [{ name: 'AI Developer Hub' }],
  openGraph: {
    title: 'AI Developer Hub',
    description: 'Build your developer portfolio with AI power',
    url: 'https://aideveloperhub.com',
    siteName: 'AI Developer Hub',
    images: [
      {
        url: 'https://aideveloperhub.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Developer Hub',
    description: 'Build your developer portfolio with AI power',
    images: ['https://aideveloperhub.com/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container-custom py-8">
              {children}
            </main>
            <Footer />
            <Toaster position="top-right" />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/globals.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ossa.ai | Making influence accessible to everyone.',
  description: 'The leading platform for the creation of modern short-form content. Join the official ossa.ai discord server!',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased min-h-full',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}

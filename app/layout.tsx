import type { Metadata } from 'next'
import { Cinzel, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-cinzel',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Le Marteau et le Miroir — 33 frappes pour se transformer',
  description:
    "Tu tiens un maillet. Devant toi, un miroir. En trente-trois étapes, Richard Bélénus t'invite à regarder ce que tu évites, frapper ce qui t'enferme, devenir ce que tu es déjà.",
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}

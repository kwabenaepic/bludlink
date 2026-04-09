import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
})

export const metadata = {
  title: 'BludLink — Save Lives Across Ghana',
  description: 'BludLink connects hospitals with eligible blood donors within 50km in real time. When lives are on the line, every minute matters.',
  keywords: 'blood donor Ghana, blood bank Accra, emergency blood, BludLink',
  openGraph: {
    title: 'BludLink — Save Lives Across Ghana',
    description: 'Find blood donors instantly. Built for Ghana.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
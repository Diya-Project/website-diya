import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/templates/Header'
import Footer from '@/templates/Footer'
import Wave2 from '@/templates/Wave2'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diya Bootcamp',
  description: 'Diya Bootcamp',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth overflow-x-hidden'>
      <body className={inter.className}>
        <Header />
        {children}
        <Wave2/>
        <Footer />
      </body>
    </html>
  )
}

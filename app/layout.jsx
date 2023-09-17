"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/nav'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-light min-h-screen'>
        <Navbar />
        {children}
        </div>
      </body>
    </html>
  )
}

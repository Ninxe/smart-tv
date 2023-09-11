'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import { usePathname } from 'next/navigation'
import SplashScreen from './components/SplashScreen';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movies',
  description: 'A list of movies from API.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return
  }, [isLoading])

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <Navbar />
            {children}
          </>
        )}
      </body>
    </html>
  )
}

'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar'
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isLoading) return
  }, [isLoading])

  return (
    <html lang="en" className={inter.className}>
      <body className={isOpen ? "overflow-hidden" : ""}>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className={isOpen ? "opacity-10" : ""}>
              {children}
            </div>
          </>
        )}
      </body>
    </html>
  )
}

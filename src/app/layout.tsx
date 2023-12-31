'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SplashScreen from './components/SplashScreen';

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en" className={inter.className}>
      <title>Smart TV</title>
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
  );
}

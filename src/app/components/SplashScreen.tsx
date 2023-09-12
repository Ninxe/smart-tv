import { useEffect } from 'react'
import Image from 'next/image'

export default function SplashScreen({ finishLoading }: any) {

  useEffect(() => {
    const timeout = setTimeout(() => finishLoading())
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='flex h-screen items-center justify-center'>
      <Image
        id="splash-screen"
        src="/popcorn.png"
        alt='splash screen logo'
        width={300}
        height={300}
      />
    </div>
  )
}

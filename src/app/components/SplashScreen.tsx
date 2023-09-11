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
        id="logo"
        src={"https://upload.wikimedia.org/wikipedia/commons/0/04/Funny_movie_logo.png"}
        alt='splash screen logo'
        width={300}
        height={300}
      />
    </div>
  )
}

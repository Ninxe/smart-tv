import Image from 'next/image';
import { useEffect } from 'react';

type Props = {
  finishLoading: Function;
}

export default function SplashScreen({ finishLoading }: Props) {

  useEffect(() => {
    const timeout = setTimeout(() => finishLoading())
    return () => clearTimeout(timeout)
  }, []);

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

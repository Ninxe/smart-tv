
import Image from 'next/image';


export default function SplashScreen() {
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

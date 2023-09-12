import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex items-center justify-center'>
      <Image
        src="/popcorn.png"
        alt='popcorn logo'
        width={300}
        height={300}
      />
    </div>
  )
}

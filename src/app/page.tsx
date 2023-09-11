import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex items-center justify-center'>
      <Image
        id="logo"
        src={"https://upload.wikimedia.org/wikipedia/commons/0/04/Funny_movie_logo.png"}
        alt='splash screen logo'
        width={500}
        height={350}
      />
    </div>
  )
}

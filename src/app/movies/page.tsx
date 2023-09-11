import Image from 'next/image'

async function getData() {
  const res = await fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


export default async function Movies() {
  const movies = await getData()
  return (
    <main className='grid grid-cols-5 gap-4 items-stretch p-4 max-w-[1280px] m-auto'>
      {movies.map((movie: any) => (
        <Image
          className='rounded-lg hover:ring-pink-600 hover:ring-4'
          key={movie.Plot}
          src={movie.Poster.replace(/(^\w+:|^)\/\//, 'https://')}
          alt={movie.Title}
          title={movie.Title}
          width={190}
          height={270}
        />
      ))}
    </main>
  )
}

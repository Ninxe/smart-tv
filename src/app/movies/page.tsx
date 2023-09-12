'use client'
import Image from 'next/image'
import { getMoviesData } from './api';

export default async function Movies() {
  const movies = await getMoviesData()

  const handleKeyDown = (event: any) => {
    switch (event.keyCode) {
      case 8:
        return console.log('Back', event.keyCode);
      case 13:
        return console.log('Enter', event.keyCode);
      case 37:
        return console.log('Left', event.keyCode);
      case 38:
        return console.log('Up', event.keyCode);
      case 39:
        return console.log('Right', event.keyCode);
      case 40:
        return console.log('Down', event.keyCode);
    }
  };

  return (
    <main className='grid grid-cols-5 gap-4 items-stretch p-4 max-w-[1280px] m-auto'>
      {movies.map((movie: any, index: any) => (
        <Image
          key={movie.Plot}
          className='rounded-lg hover:ring-pink-600 hover:ring-4 shadow-md'
          src={movie.Poster.replace(/(^\w+:|^)\/\//, 'https://')}
          alt={movie.Title}
          title={movie.Title}
          height={270}
          width={190}
          tabIndex={index}
          onKeyDown={handleKeyDown}
          priority
        />
      ))}
    </main>
  )
}

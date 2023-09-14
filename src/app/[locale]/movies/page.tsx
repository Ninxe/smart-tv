'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import LoadingImage from './LoadingImage';

export default function Movies() {
  const [data, setData] = useState<Function[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, []);

  if (isLoading) return <LoadingImage />

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
    <main className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-4 items-stretch p-4 max-w-[1280px] m-auto'>
      {data.map((movie: any, index: number) => (
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

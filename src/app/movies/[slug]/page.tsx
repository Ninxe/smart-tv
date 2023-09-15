import getMovies from "../../../../lib/getMovies"
import Image from 'next/image';

export default async function MoviesPage({ params }: any) {
  const movies = await getMovies();
  const moviesFiltered = movies.filter((movie: any) => movie.imdbID.includes(params.slug))

  return (
    <div>
      {moviesFiltered.map((movie: any) => {
        return (
          <div className="grid xs:grid-cols-none md:grid-cols-2 max-w-[1280px] m-auto p-4">
            <Image
              className='rounded-lg shadow-md'
              src={movie.Poster.replace(/(^\w+:|^)\/\//, 'https://')}
              alt={movie.Title}
              title={movie.Title}
              height={270}
              width={500}
              priority
            />
            <div className="text-xl leading-8 md:px-4 bg-neutral-700 rounded-lg">
              <p>Title: {movie.Title}</p>
              <p>Year: {movie.Year}</p>
              <p>Rated: {movie.Rated}</p>
              <p>Released: {movie.Released}</p>
              <p>Runtime: {movie.Runtime}</p>
              <p>Genre: {movie.Genre}</p>
              <p>Director: {movie.Director}</p>
              <p>Writer: {movie.Writer}</p>
              <p>Actors: {movie.Actors}</p>
              <p>Plot: {movie.Plot}</p>
              <p>Language: {movie.Language}</p>
              <p>Awards: {movie.Awards}</p>
              <p>Metascore: {movie.Metascore}</p>
              <p>IMDB Rating: {movie.imdbRating}</p>
              <p>IMDB Votes: {movie.imdbVotes}</p>
              <p>IMDB ID: {movie.imdbID}</p>
              <p>Type: {movie.Type}</p>
              {/*<p>Response: {movie.Response}</p>*/}
            </div>
          </div>
        )
      })}
    </div>
  )
}
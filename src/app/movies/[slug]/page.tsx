import getMovies from "../../../../lib/getMovies"
import Image from 'next/image';

export default async function MoviesPage({ params }: any) {
  const movies = await getMovies();
  const moviesFiltered = movies.filter((movie: any) => movie.imdbID.includes(params.slug))

  return (
    <div>
      {moviesFiltered.map((movie: any) => {
        return (
          <div className="flex flex-col items-center">
            <Image
              className='rounded-lg shadow-md mb-4'
              src={movie.Poster.replace(/(^\w+:|^)\/\//, 'https://')}
              alt={movie.Title}
              title={movie.Title}
              height={270}
              width={190}
              priority
            />
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
            <p>Response: {movie.Response}</p>
          </div>
        )
      })}
    </div>
  )
}
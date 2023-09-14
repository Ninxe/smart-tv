export default async function getMovies() {
  const response = await fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON');

  if (!response.ok) {
    throw new Error('failed to fetch movies');
  }

  return await response.json();
}
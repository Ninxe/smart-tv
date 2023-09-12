const getMoviesData = async function getData() {
  const res = await fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export { getMoviesData };
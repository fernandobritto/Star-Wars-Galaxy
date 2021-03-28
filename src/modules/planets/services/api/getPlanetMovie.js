import fetch from 'node-fetch'
import qs from 'querystring'

async function getPlanetMovie(planetName) {
  const queryString = qs.stringify({ search: planetName })

  const request = await fetch(`https://swapi.dev/api/planets/?${queryString}`)

  const response = await request.json()

  if (!response.results[0]) {
    return undefined
  }

  return response.results[0].films.length
}

export default getPlanetMovie

import Planet from '../models/Planet'
import getPlanetMovie from './api/getPlanetMovie'

class ListAllPlanetService {
  async appendFilmCount(planet) {
    return {
      ...planet.toObject(),
      amountMovies: await getPlanetMovie(planet.name),
    }
  }

  async execute() {
    const planets = await Planet.find({}, 'name climate terrain')
    return Promise.all(planets.map(this.appendFilmCount))
  }
}

export default ListAllPlanetService

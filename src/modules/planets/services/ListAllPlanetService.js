import Planet from '../models/Planet'

class ListAllPlanetService {
  async execute() {
    const planets = await Planet.find()
    return planets
  }
}

export default ListAllPlanetService

import Planet from '../models/Planet'

class UpdatePlanetService {
  async execute({ id, name, climate, terrain }) {
    const planet = await Planet.findById(id)

    if (!planet) {
      console.log('O cadastro desta dívida não foi encontrado ')
    }

    planet.name = name
    planet.climate = climate
    planet.terrain = terrain

    await Planet.findOneAndUpdate(planet)

    return planet
  }
}

export default UpdatePlanetService

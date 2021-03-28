import Planet from '../models/Planet'

class UpdatePlanetService {
  async execute({ id, name, climate, terrain }) {
    const planetUp = await Planet.findById(id)

    if (!planetUp) {
      console.log('Os registros deste planeta não foram encontrados')
    }

    const planet = await Planet.findByIdAndUpdate({
      name,
      climate,
      terrain,
    })

    return planet
  }
}

export default UpdatePlanetService

import Planet from '../models/Planet'

class ListPlanetService {
  async execute({ id }) {
    const planet = await Planet.findById(id)

    if (!planet) {
      console.log('Planeta não encontrado')
    }

    return planet
  }
}

export default ListPlanetService

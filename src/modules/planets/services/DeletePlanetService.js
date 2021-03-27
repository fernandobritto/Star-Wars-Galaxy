import Planet from '../models/Planet'

class DeletePlanetService {
  async execute({ id }) {
    const planetDel = await Planet.findById(id)

    if (!planetDel) {
      console.log('Os registros deste planeta não foram encontrados')
    }

    await Planet.remove(planetDel)
  }
}

export default DeletePlanetService

import Planet from '../models/Planet'

class RegisterPlanetService {
  async execute({ name, climate, terrain }) {
    const planet = await Planet.create({
      name,
      climate,
      terrain,
    })

    return planet
  }
}

export default RegisterPlanetService

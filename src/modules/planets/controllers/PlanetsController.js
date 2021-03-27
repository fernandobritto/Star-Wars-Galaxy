import ListAllPlanetService from '../services/ListAllPlanetService'
import RegisterPlanetService from '../services/RegisterPlanetService'
import ListPlanetService from '../services/ListPlanetService'
import DeletePlanetService from '../services/DeletePlanetService'

class PlanetsController {
  async index(req, res) {
    const listPlanets = new ListAllPlanetService()
    const planets = await listPlanets.execute()
    return res.send({ planets })
  }

  async show(req, res) {
    const { id } = req.params
    const listPlanet = new ListPlanetService()
    const planet = await listPlanet.execute({ id })
    return res.send({ planet })
  }

  async store(req, res) {
    const { name, climate, terrain } = req.body
    const newPlanets = new RegisterPlanetService()

    const planet = await newPlanets.execute({
      name,
      climate,
      terrain,
    })

    return res.status(201).json({
      msg: 'Planeta cadastrado com sucesso',
      planet,
    })
  }

  async delete(req, res) {
    const { id } = req.params

    const deleteDebt = new DeletePlanetService()

    await deleteDebt.execute({ id })

    return res
      .status(200)
      .json({ msg: 'O registros do planeta foi apagado com sucesso' })
  }
}

export default PlanetsController

import ListAllPlanetService from '../services/ListAllPlanetService'
import RegisterPlanetService from '../services/RegisterPlanetService'
import ListPlanetService from '../services/ListPlanetService'
import DeletePlanetService from '../services/DeletePlanetService'

class PlanetsController {
  async index(req, res) {
    const listPlanets = new ListAllPlanetService()
    try {
      const planets = await listPlanets.execute()
      return res.send({ planets })
    } catch (error) {
      return res.json(null)
    }
  }

  async show(req, res) {
    const { id } = req.params
    const listPlanet = new ListPlanetService()
    try {
      const planet = await listPlanet.execute({ id })
      return res.send({ planet })
    } catch (error) {
      return res.json(null)
    }
  }

  async store(req, res) {
    const { name, climate, terrain } = req.body
    const newPlanets = new RegisterPlanetService()

    try {
      const planet = await newPlanets.execute({
        name,
        climate,
        terrain,
      })

      return res.status(201).json({
        msg: 'Planeta cadastrado com sucesso',
        planet,
      })
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      })
    }
  }

  async delete(req, res) {
    const { id } = req.params
    const deleteDebt = new DeletePlanetService()

    try {
      await deleteDebt.execute({ id })

      return res
        .status(200)
        .json({ msg: 'O registros do planeta foi apagado com sucesso' })
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message),
      })
    }
  }
}

export default PlanetsController

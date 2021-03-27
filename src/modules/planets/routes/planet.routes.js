import { Router } from 'express'
import PlanetsController from '../controllers/PlanetsController'

const planetsRoute = Router()
const planetsController = new PlanetsController()

planetsRoute.get('/', planetsController.index)
planetsRoute.get('/:id', planetsController.show)
planetsRoute.post('/', planetsController.store)
planetsRoute.delete('/:id', planetsController.delete)

export default planetsRoute

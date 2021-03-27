import { Router } from 'express'
import planetsRoute from '../modules/planets/routes/planet.routes'

const routes = Router()

routes.use('/v1/planet', planetsRoute)

export default routes

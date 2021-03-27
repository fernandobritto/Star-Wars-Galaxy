import { Schema, model } from 'mongoose'

const PlanetSchema = new Schema({
  name: {
    type: String,
    index: true,
  },
  climate: {
    type: String,
  },
  terrain: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Planet = model('Planet', PlanetSchema)

export default Planet

import dotenv from 'dotenv'
dotenv.config()
import database from 'mongoose'

const { DATABASE_HOST } = process.env
database.connect(DATABASE_HOST, {
  useNewUrlParser: true,
})
database.Promise = global.Promise

export default database

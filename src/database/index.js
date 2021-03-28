import dotenv from 'dotenv'
dotenv.config()
import database from 'mongoose'

const { DATABASE_HOST } = process.env
database.connect(DATABASE_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
database.Promise = global.Promise

export default database

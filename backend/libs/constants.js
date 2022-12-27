import 'dotenv/config'

const env = Object.freeze({
  db: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    eraseDatabaseOnSync: process.env.DATABASE_DELETE_SNYC
  }
})

export default env

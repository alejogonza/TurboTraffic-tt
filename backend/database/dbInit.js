import Sequelize from 'sequelize'
import env from '../libs/constants'

export const sequelize = new Sequelize(
  env.db.database,
  env.db.user,
  env.db.password,
  {
    host: env.db.host,
    dialect: 'postgres',
    logging: false,
    storage: 'database.postgres'
  }
)

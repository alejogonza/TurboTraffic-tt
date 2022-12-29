import { sequelize } from './database/dbInit'
import app from './app'
import env from './libs/constants'

async function main () {
  try {
    await sequelize.sync({ force: !env.db.eraseDatabaseOnSync === 'false' })

    app.set('port', env.PORT || 3001)

    app.listen(app.get('port'), () => {
      console.log(`Server on port ${app.get('port')}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()

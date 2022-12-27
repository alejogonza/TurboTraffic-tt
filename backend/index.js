import { sequelize } from './database/dbInit'
import app from './app'
import env from './libs/constants'
import models from './models'
import createDummyData from './services/dataDummy'

async function main () {
  try {
    await sequelize.sync({ force: env.db.eraseDatabaseOnSync }).then(async () => {
      if (env.db.eraseDatabaseOnSync) {
        await createDummyData(models)
      }
    })

    app.set('port', env.PORT || 3000)

    app.listen(app.get('port'), () => {
      console.log(`Server on port ${app.get('port')}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()

import mongoose from 'mongoose'
import constants from './constants'

mongoose.connect(constants.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err))

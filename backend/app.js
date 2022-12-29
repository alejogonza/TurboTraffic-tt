import express from 'express'
import HttpResponse from './libs/httpResponse'
import cors from 'cors'
import router from './routes'
import { modelPropagate } from './middlewares/model'

const app = express()
app.use(
  cors({
    origin: true,
    credentials: true
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', modelPropagate, router)

app.all('*', (_req, res) => {
  res
    .status(HttpResponse.BAD_REQUEST.STATUS)
    .send(HttpResponse.BAD_REQUEST.MESSAGE)
})

module.exports = app

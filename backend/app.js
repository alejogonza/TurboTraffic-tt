import express from 'express'
import HttpResponse from './libs/httpResponse'
import cors from 'cors'
//import router from './routes'


const app = express()
app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE']
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use('/api/v1', router)

app.all('*', (_req, res) => {
  res
    .status(HttpResponse.BAD_REQUEST.STATUS)
    .send(HttpResponse.BAD_REQUEST.MESSAGE)
})



module.exports = app

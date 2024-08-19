import express from 'express'
import { deporteRouter } from './deporte/deporte.routes.js'
import { horarioRouter } from './horarios/horario.routes.js'

const app = express()
app.use(express.json())

// middlewares para cada funcionalidad de la app

app.use('/api/deportes', deporteRouter)
app.use('/api/deportes/horarios', horarioRouter)

app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' })
})

app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000/')
})

// inicio el servidor y le digo que escuche en el puerto 3000 
import 'dotenv/config' // .env
import express from 'express'
import estudiantesRouter from './routers/estudiantes.router.js'

const app = express()

// Middlewares para activar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware de los routers
app.use('/estudiantes', estudiantesRouter)

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
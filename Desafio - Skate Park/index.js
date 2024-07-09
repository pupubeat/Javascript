import express from 'express'
import 'dotenv/config'
import viewsRouter from './routers/public.router.js'
import skatersRouter from './routers/participantes.router.js'

const app = express()

// Archivos estáticos públicos.
app.use(express.static('public'))

// Middlewares para activar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware para los views (público).
app.use('/', viewsRouter)

// Middleware para los routers de los skaters/participantes
app.use('/api/v1', skatersRouter)

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
import 'dotenv/config'
import express from 'express'
import cancionesRouter from './routers/canciones.router.js'

const app = express()

// Archivos estáticos públicos.
app.use(express.static('public'))

// Middlewares para activar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware para los router de canciones.
app.use('canciones', cancionesRouter)

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
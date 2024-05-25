import express from 'express'
import deportesRouter from './routers/deportes.routers.js'

const app = express()
const __dirname = import.meta.dirname

// Middleware para archivos estáticos
app.use(express.static(__dirname + '/public'))

// Middlewares para activar req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware para las rutas CRUD.
app.use('/deportes', deportesRouter)

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
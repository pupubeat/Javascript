import express from 'express'
import 'dotenv/config' // .env
import usuariosRouters from './routers/usuarios.router.js'
import transferenciasRouter from './routers/transferencias.router.js'

const app = express()
const __dirname = import.meta.dirname // Rutas absolutas.

// Middleware para activar req.body.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware para archivos estáticos.
app.use(express.static(__dirname + '/public'))

// Middleware para routers de usuarios.
app.use('/usuarios', usuariosRouters)

// Middleware para routers de transferencias.
app.use('/transferencias', transferenciasRouter)

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
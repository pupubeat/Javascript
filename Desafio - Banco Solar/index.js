import express from 'express'
import 'dotenv/config' // .env
import { fileURLToPath } from 'url';
import path from 'path'
import usuariosRouters from './routers/usuarios.router.js'
import transferenciasRouter from './routers/transferencias.router.js'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename) // Rutas absolutas.

// Middleware para activar req.body.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware para archivos estáticos.
app.use(express.static('public'))

// Ruta que devuelve la aplicación cliente disponible en el apoyo de la prueba.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

// Middleware para routers de usuarios.
app.use('/usuarios', usuariosRouters)

// Middleware para routers de transferencias.
app.use('/transferencias', transferenciasRouter)

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
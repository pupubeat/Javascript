import express from 'express'
import 'dotenv/config'
import roommateRouter from './routers/roommates.router.js'
import gastosRouter from './routers/gastos.router.js'
import { fileURLToPath } from 'url';
import path from 'path'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename) // Rutas absolutas.

// Middlewares para activar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware para archivos estáticos.
app.use(express.static('public'))

// PATH /GET: Debe devolver el documento HTML disponible en el apoyo.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

// Middleware Router de los roommates.
app.use('/roommate', roommateRouter)

// Middleware Router de los gastos.
app.use('/gastos', gastosRouter)

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
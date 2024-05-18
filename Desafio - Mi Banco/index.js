import express from 'express'
import 'dotenv/config'
import cuentasRouter from './routers/cuentas.router.js'
import transferenciasRouter from './routers/transferencias.router.js'

const app = express()

// Middlewares para activar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware de los routers
app.use('/api/v1/cuentas', cuentasRouter)
app.use('/api/v1/transferencias', transferenciasRouter)

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
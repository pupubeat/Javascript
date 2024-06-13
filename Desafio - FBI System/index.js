import 'dotenv/config'
import express from 'express'
import agentesRouter from './routers/agentes.router.js'

// Archivos estáticos públicos.
app.use(express.static('public'))

// Middlewares para activar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware para Router de los agantes.
app.use('/api/v1/users', agentesRouter)

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
import 'dotenv/config'
import express from 'express'

// Archivos estáticos públicos.
app.use(express.static('public'))

// Middlewares para activar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
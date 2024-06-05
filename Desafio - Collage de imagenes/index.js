import express from 'express'
import imgRouter from './routers/img.router.js'
import fileUploadConfig from './utils/fileUploadConfig.js'
import 'dotenv/config' // .env

const app = express()

// Archivos estáticos públicos.
app.use(express.static('public'))

// Middlewares para activar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware utils -> express-fileupload
app.use(fileUploadConfig)

// Middleware para Routers.
app.use('/', imgRouter)

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
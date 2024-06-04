import express from 'express'
import fileUpload from 'express-fileupload'
import path from 'path'
import { fileURLToPath } from 'url'
import imgRouter from './routers/img.router.js'

const app = express()
const __dirname = import.meta.dirname
const __filename = fileURLToPath(import.meta.url);

app.use(
    fileUpload({
        limits: { fileSize: 5000000 }, //10mb
        abortOnLimit: true,
        responseOnLimit: "No puedes exceder de 5mb.",
    })
);

// Archivos estáticos públicos.
app.use(express.static(__dirname + '/public'))

// Middlewares para activar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware para Routers.
app.use('/imagen', imgRouter)

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
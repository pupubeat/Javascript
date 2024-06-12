import express from 'express'
import pg from 'pg'
import { engine } from 'express-handlebars';
import 'dotenv/config'

// import path from 'path';
// import { fileURLToPath } from 'url';

const app = express()

// Engine de Handlebars.
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

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
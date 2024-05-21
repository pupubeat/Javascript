import 'dotenv/config' // .env
import express from 'express'
import postRouter from './post/post.router.js'

const app = express()
const __dirname = import.meta.dirname

// Middleware para activar urlencoded, posteriormente para usar req.body en formulario.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware archivos estáticos públicos.
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/home.html")
})

// Middleware rutas para PATH /posts
app.use('/posts', postRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
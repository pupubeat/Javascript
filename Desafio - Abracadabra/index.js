import express from 'express' // Express usando ES6
import { authMiddleware } from './middlewares/auth.middleware.js' // Middleware que autoriza los nombres del listado usuarios.

const app = express()
const __dirname = import.meta.dirname // Importar ruta absoluta en node.js ES6

// Listado de nombres/usuarios autorizados para acceder al juego.
const listado = {
    "usuarios": [
        "Astrid",
        "Brian",
        "Felipe",
        "Francisco",
        "Javier",
        "Jocelyn",
        "Juan",
        "Maria",
        "Ignacia"
    ]
}

// Middleware para ruta absoluta de la carpeta pública.
app.use(express.static(__dirname + '/public'))

// Ruta que busca al usuario del array.
app.get('/abracadabra/usuarios', (req, res) => {
    return res.json({ listado })
})

// Invocar al Middleware, para comprobar si usuario está autorizado para visitar sitio del juego.
app.get('/abracadabra/juego/:usuario', authMiddleware, (req, res) => {
    return res.sendFile(__dirname + '/public/index.html')
})

// Ruta del juego Abracadabra.
app.get('/abracadabra/conejo/:n', (req, res) => {
    const n = req.params.n

    // Función para generar un número aleatorio usando dos parámetros.
    function randomizador(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // Generar un número aleatorio entre el 1 y el 4 (incluyendo esos números en el intervalo).
    const numeroRandom = randomizador(1, 4);

    // Redirigir a img de Conejito
    if (+n === numeroRandom) {
        res.redirect('/assets/conejito.jpg')
    } else {
        res.redirect('/assets/voldemort.jpg') // Redirigir a img de Voldemort en caso contrario
    }

})

// Conectar al puerto 3000.
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
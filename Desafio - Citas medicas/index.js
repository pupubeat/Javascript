import axios from 'axios';
import chalk from 'chalk';
import express from 'express';
import { engine } from 'express-handlebars';
import moment from 'moment';
import { usuarios } from './data/usuarios.data.js';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import path from 'path'

const app = express()
const __dirname = import.meta.dirname

// Ruta absoluta de archivos estáticos.
app.use(express.static(__dirname + '/public'));
app.use('/assets/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')) // CSS
app.use('/assets/js', express.static(path.join(__dirname + '/node_modules/bootstrap/dist/js'))) // Javascript

// Engine de Handlebars.
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');

// Ruta principal con data de usuarios.
app.get('/', async (req, res) => {
    try {
        // Obtención de data API a través de Axios.
        const { data } = await axios.get('https://randomuser.me/api/')

        // Creación constante usuario con data captada de la rura API externa.
        const usuario = {
            nombre: data.results[0].name.first,
            apellido: data.results[0].name.last,
            genero: data.results[0].gender,
            id: uuidv4().slice(0, 6),
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
        }
        // Usar chalk para consultas en consola.
        console.log(chalk.blue.bgWhite(`Nombre: ${usuario.nombre} - Apellido: ${usuario.apellido} - ID: ${usuario.id} - Timestamp: ${usuario.timestamp}`))

        // Colocar la constante usuarios en Array vacío de usuarios.
        usuarios.push(usuario)

        // Separar constante usuario en 2 arrays, por género.
        const [mujeres, hombres] = _.partition(usuarios, { 'genero': 'female' })

        // Renderizar página.
        res.render('home', { mujeres, hombres })
    }
    catch (error) {
        // Capturar error en caso de que tenga problemas con extraer la data de la API externa. 
        console.log(error)
        return res.status(500).json({ msg: "error al capturar la data." })
    }
})

// Conectar al puerto 3000
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on http://localhost:${PORT}`)
})
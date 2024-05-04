import express from 'express';
import { engine } from 'express-handlebars';
import Jimp from 'jimp';
import { v4 as uuidv4 } from 'uuid';
import { writeFile } from 'fs/promises';
import path from 'path';

const app = express()
const __dirname = import.meta.dirname

// Engine de Handlebars.
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');

// Rutas absolutas para archivos estáticos.
app.use(express.static(__dirname + '/public'))
app.use('/assets/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))) // Bootstrap CSS
app.use('/assets/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js'))) // Bootstrap JS

// Ruta raíz que devuelve url de la imagen a tratar.
app.get('/', (req, res) => {
    return res.render('home', {})
})

// Ruta para devolver imagen modificada por Jimp.
app.get('/image', async (req, res) => {
    const { url } = req.query
    try {
        // Leer url usando Jimp.
        const image = await Jimp.read(url)

        // Modificar imagen con Jimp.
        const buffer = await image
            .resize(350, Jimp.AUTO)
            .grayscale()
            .getBufferAsync('image/jpeg')
        const pathFile = __dirname + `/public/images/${uuidv4().slice(0, 6)}.jpg` // Guardar imagen en carpeta pública de imgs.
        await writeFile(pathFile, buffer)
        // await image.writeAsync(pathFile) Propio de npm Jimp //
        res.header('Content-Type', 'image/jpeg')
        res.send(buffer)
    }
    // Capturar error en caso de tener problemas al leer el url de la imagen.
    catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'No se pudo leer el archivo.' })
    }
})

// Conectar al puerto 3000.
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})
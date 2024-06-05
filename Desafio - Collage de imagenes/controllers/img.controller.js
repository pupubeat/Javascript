import { promises as fs } from 'fs' // filesystem
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)

// Collage que obtiene la data del formulario.
const getForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/formulario.html'))
}

// Controller que obtiene la data del collage.
const getCollage = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/collage.html'))
}

// Controller que reciba y almacene una imagen en una carpeta pública del servidor.
const addImg = async (req, res) => {
    try {
        const { target_file } = req.files
        console.log(req.files)
        const { posicion } = req.body
        console.log(req.body)
        target_file.mv(path.join(__dirname, '../public/assets/img', `imagen-${posicion}.jpg`))
        return res.redirect('/collage')
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Controller que reciba como parámetro el nombre de una imagen y la elimine de la carpeta en donde están siendo alojadas las imágenes.
const removeImg = async (req, res) => {
    try {
        const { nombre } = req.params
        console.log(req.params)
        await fs.unlink(path.join(__dirname, '../public/assets/img', nombre))
        return res.sendFile(path.join(__dirname, '../public/collage.html'))

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const imgControllers = {
    getForm,
    getCollage,
    addImg,
    removeImg
}
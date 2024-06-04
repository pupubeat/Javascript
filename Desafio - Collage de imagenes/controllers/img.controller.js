import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Collage que obtiene la data del formulario.
const getForm = async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/formulario.html'))
}

// Controller que obtiene la data del collage.
const getCollage = async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/collage.html'))
}

// Controller que reciba y almacene una imagen en una carpeta pública del servidor.
const addImg = async (req, res) => {
    try {
        const { target_file } = req.files
        const { posicion } = req.body
        target_file.mv(path.join(__dirname, '../public/assets/img', `imagen-${posicion}.jpg`))
        res.redirect('/collage')
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ ok: false })
    }
}

// Controller que reciba como parámetro el nombre de una imagen y la elimine de la carpeta en donde están siendo alojadas las imágenes.
const removeImg = async (req, res) => {
    try {
        const { nombre } = req.params
        await unlink

    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false })
    }
}

export const imgControllers = {
    getForm,
    getCollage,
    addImg,
    removeImg
}
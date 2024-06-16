import { cancionesModels } from "../models/canciones.model.js"

// Controller que recibe los datos correspondientes a una canción y realice a través de una función asíncrona la inserción en la tabla canciones.
const addCancion = async (req, res) => {
    try {
        const { titulo, artista, tono } = req.body
        console.log(req.body)
        const cancion = await cancionesModels.register({ titulo, artista, tono })
        return res.status(201).json(cancion)
    } catch (error) {
        console.log(error) // Capturar error en consola
        res.status(500).json({ ok: false })
    }
}

// Controller que devuelve un JSON con los registros de la tabla canciones.
const getAllCanciones = async (req, res) => {
    try {
        const canciones = await cancionesModels.findAll()
        return res.json(canciones)

    } catch (error) {
        console.log(error) // Capturar error en consola
        res.status(500).json({ ok: false })
    }
}

// Controller que recibe los datos de una canción que se desea editar.
const updateCancion = async (req, res) => {
    try {
        const { id } = req.query
        console.log(req.query)
        const { titulo, artista, tono } = req.body
        console.log(req.body)
        const cancion = await cancionesModels.edit({ id, titulo, artista, tono })
        return res.json(cancion)

    } catch (error) {
        console.log(error) // Capturar error en consola
        res.status(500).json({ ok: false })
    }
}

// Controller que recibe por queryString el id de una canción y realiza una consulta SQL a través de una función asíncrona para eliminarla de la base de datos.
const removeCancion = async (req, res) => {
    try {
        const { id } = req.query
        const cancion = await cancionesModels.remove({ id })
        return res.json(cancion)

    } catch (error) {
        console.log(error) // Capturar error en consola
        res.status(500).json({ ok: false })
    }
}

// Exportar los controllers.
export const cancionesControllers = {
    addCancion,
    getAllCanciones,
    updateCancion,
    removeCancion
}
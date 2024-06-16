import { cancionesModels } from "../models/canciones.model.js"

const addCancion = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false })
    }
}

const getAllCanciones = async (req, res) => {
    try {
        const canciones = await cancionesModels.findAll()
        return res.json(canciones)
    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false })
    }
}

const updateCancion = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false })
    }
}

const removeCancion = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false })
    }
}

export const cancionesControllers = {
    addCancion,
    getAllCanciones,
    updateCancion,
    removeCancion
}
import { estudiantesModels } from "../models/estudiantes.models.js"

// Controller para registrar un nuevo estudiante.
// PATH /estudiantes
export const addEstudiante = async (req, res) => {
    try {
        const { } = req.body
        const estudiante = await estudiantesModels.register()
        return res.status(201).json(estudiante)
    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

// Crear una función asíncrona para obtener por consola todos los estudiantes registrados.
// PATH /estudiantes
export const getAllEstudiantes = async (req, res) => {
    try {
        const estudiantes = await estudiantesModels.findAll()
        return res.json(estudiantes)
    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

// Crear una función asíncrona para obtener por consola el registro de un estudiante por medio de su rut.
// PATH /estudiantes/:rut
export const getEstudianteByRut = async (req, res) => {
    try {
        const { rut } = req.params
        const estudiante = await estudiantesModels.findByRut({ rut })
        return res.json(estudiante)
    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

// Crear una función asíncrona para actualizar los datos de un estudiante en la base de datos.
// PATH /estudiantes/:rut
export const updateEstudiante = async (req, res) => {
    try {
        const { rut } = req.params
        const estudiante = await estudiantesModels.update({ rut })
        return res.json()
    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

// Crear una función asíncrona para eliminar el registro de un estudiante de la base de datos.
// // PATH /estudiantes/:rut
export const removeEstudiante = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

export const estudiantesControllers = {
    addEstudiante,
    getAllEstudiantes,
    getEstudianteByRut,
    updateEstudiante,
    removeEstudiante
} 
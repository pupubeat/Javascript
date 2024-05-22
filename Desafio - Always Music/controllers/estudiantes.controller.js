import { estudiantesModels } from "../models/estudiantes.models.js"

// Controller para agregar un nuevo estudiante.
export const addEstudiante = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

// Controller para consultar los estudiantes registrados.
export const getAllEstudiantes = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

// Controller para consultar estudiante por rut.
export const getEstudianteByRut = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

// Controller para actualizar la información de un estudiante.
export const updateEstudiante = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

// Controller para eliminar el registro de un estudiante.
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
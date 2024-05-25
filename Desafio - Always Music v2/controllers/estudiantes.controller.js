import { estudiantesModels } from "../models/estudiantes.models.js"

// Controller para registrar un nuevo estudiante.
// PATH /estudiantes
export const addEstudiante = async (req, res) => {
    try {
        const { nombre, rut, curso, nivel } = req.body
        console.log(req.body)  // Consultar si se capturan bien los valores en req.body
        const estudiante = await estudiantesModels.register({ nombre, rut, curso, nivel })
        return res.status(201).json(estudiante)
    }
    catch (error) {
        console.log(error) // Capturar error en consola
        return res.status(500).json({ ok: false })
    }
}

// Crear una función asíncrona para obtener por consola todos los estudiantes registrados.
// PATH /estudiantes
export const getAllEstudiantes = async (req, res) => {
    try {
        const estudiantes = await estudiantesModels.getAllEstudiantes()
        return res.json(estudiantes)
    } catch (error) {
        console.log(error) // Capturar error en consola
        return res.status(500).json({ ok: false })
    }
}

// Crear una función asíncrona para obtener por consola el registro de un estudiante por medio de su rut.
// PATH /estudiantes/:rut
export const getEstudianteByRut = async (req, res) => {
    try {
        const { rut } = req.params
        console.log(req.params) // Consultar si se capturan bien los valores en req.params
        const estudiante = await estudiantesModels.findByRut(rut)
        return res.json(estudiante)
    } catch (error) {
        console.log(error) // Capturar error en consola
        return res.status(500).json({ ok: false })
    }
}

// Crear una función asíncrona para actualizar los datos de un estudiante en la base de datos.
// PATH /estudiantes/:rut
export const updateEstudiante = async (req, res) => {
    try {
        const { rut } = req.params
        console.log(req.params) // Consultar si se capturan bien los valores en req.params
        const { nombre, curso, nivel } = req.body
        console.log(req.body) // Consultar si se capturan bien los valores en req.body
        const estudiante = await estudiantesModels.update({ nombre, rut, curso, nivel })
        return res.json(estudiante)
    } catch (error) {
        console.log(error) // Capturar error en consola
        return res.status(500).json({ ok: false })
    }
}

// Crear una función asíncrona para eliminar el registro de un estudiante de la base de datos.
// // PATH /estudiantes/:rut
export const removeEstudiante = async (req, res) => {
    try {
        const { rut } = req.params
        console.log(req.params) // Consultar si se capturan bien los valores en req.params
        const estudiante = await estudiantesModels.remove({ rut })
        return res.json(estudiante)
    } catch (error) {
        console.log(error) // Capturar error en consola
        return res.status(500).json({ ok: false })
    }
}

// Exportar los controllers
export const estudiantesControllers = {
    addEstudiante,
    getAllEstudiantes,
    getEstudianteByRut,
    updateEstudiante,
    removeEstudiante
}
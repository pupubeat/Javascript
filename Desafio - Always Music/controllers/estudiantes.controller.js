import { estudiantesModels } from "../models/estudiantes.models.js"

// Controller para registrar un nuevo estudiante.
// PATH /estudiantes
export const addEstudiante = async (req, res) => {
    try {
        const { nombre, rut, curso, nivel } = req.body
        console.log(req.body) // Consultar si se capturan bien los valores en req.body
        const estudiante = await estudiantesModels.register({ nombre, rut, curso, nivel })
        console.log(`Nuevo registro de estudiante '${nombre}', '${rut}', '${curso} ${nivel}' agregado con éxito.`) // resultado en consola
        return res.status(201).json(estudiante)
    } catch (error) {
        console.log(error) // Capturar error en consola
        return res.status(500).json({ ok: false })
    }
}

// Crear una función asíncrona para obtener por consola todos los estudiantes registrados.
// PATH /estudiantes
export const getAllEstudiantes = async (req, res) => {
    try {
        const estudiantes = await estudiantesModels.findAll()
        console.log(`Registro actual de estudiantes:`) // resultado en consola
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
        const estudiante = await estudiantesModels.findByRut({ rut })
        console.log(`rut - ${rut}`) // resultado en consola
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
        const { nombre, curso, nivel } = req.body
        console.log(req.params) // Consultar si se capturan bien los valores en req.params
        console.log(req.body) // Consultar si se capturan bien los valores en req.body
        const estudiante = await estudiantesModels.update({ nombre, rut, curso, nivel })
        console.log(`Editar '${nombre}', '${rut}', '${curso} ${nivel}'`) // resultado en consola
        console.log(`Estudiante ${nombre} editado con éxito`) // resultado en consola pt 2
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
        console.log(`Registro de estudiante con rut ${rut} eliminado`) // resultado en consola
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
import { Router } from "express";
import { estudiantesControllers } from '../controllers/estudiantes.controller.js'

const router = Router()

// Ruta para agregar un nuevo estudiante.
router.post('/', estudiantesControllers.addEstudiante)

// Ruta para consultar los estudiantes registrados.
router.get('/', estudiantesControllers.getAllEstudiantes)

// Ruta para consultar estudiante por rut.
router.get('/:rut', estudiantesControllers.getEstudianteByRut)

// Ruta para actualizar la información de un estudiante.
router.update('/:rut', estudiantesControllers.updateEstudiante)

// Ruta para eliminar el registro de un estudiante.
router.delete('/:rut', estudiantesControllers.removeEstudiante)

export default router
import { Router } from "express";
import { estudiantesControllers } from "../controllers/estudiantes.controller.js";

const router = Router()

// PATH /estudiantes (Agregar un nuevo estudiante.)
router.post('/', estudiantesControllers.addEstudiante)

// PATH /estudiantes (Consultar los estudiantes registrados.)
router.get('/', estudiantesControllers.getAllEstudiantes)

// PATH /estudiantes/:rut (Consultar estudiante por rut.)
router.get('/:rut', estudiantesControllers.getEstudianteByRut)

// PATH /estudiantes/:rut (Actualizar la información de un estudiante.)
router.put('/:rut', estudiantesControllers.updateEstudiante)

// PATH /estudiantes/:rut (Eliminar el registro de un estudiante.)
router.delete('/:rut', estudiantesControllers.removeEstudiante)


export default router

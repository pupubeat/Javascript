import { Router } from "express";
import { deportesController } from "../controllers/deportes.controller.js";

const router = Router()

// Crear una ruta que reciba el nombre y precio de un nuevo deporte, lo persista en un archivo JSON.
// PATH /deportes/agregar
router.post('/agregar', deportesController.agregar)

// Crear una ruta que al consultarse devuelva en formato JSON todos los deportes registrados.
// PATH /deportes
router.get('/', deportesController.getData)

// Crear una ruta que edite el precio de un deporte registrado utilizando los parámetros de la consulta y persista este cambio.
// PATH /deportes/editar
router.put('/editar', deportesController.edit)

// Crear una ruta que elimine un deporte solicitado desde el cliente y persista este cambio.
// PATH /deportes/eliminar
router.delete('/eliminar', deportesController.eliminar)

export default router
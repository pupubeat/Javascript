import { Router } from "express";
import { deportesController } from "../controllers/deportes.controller.js";

const router = Router()

// Crear una ruta que reciba el nombre y precio de un nuevo deporte, lo persista en un archivo JSON.
router.post('/agregar', deportesController)

// Crear una ruta que al consultarse devuelva en formato JSON todos los deportes registrados.
router.get('/', deportesController)

// Crear una ruta que edite el precio de un deporte registrado utilizando los parámetros de la consulta y persista este cambio.
router.put('/editar', deportesController)

// Crear una ruta que elimine un deporte solicitado desde el cliente y persista este cambio.
router.delete('/eliminar', deportesController)
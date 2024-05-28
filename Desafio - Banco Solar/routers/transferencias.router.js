import { Router } from "express";
import { transferenciasController } from "../controllers/transferencias.controller.js";

const router = Router()

// Ruta para recibir los datos para realizar una nueva transferencia. 
// Se debe ocupar una transacción SQL en la consulta a la base de datos.
// PATH /transferencias/transferencia
router.post('/transferencia', transferenciasController)

// Ruta para devolver todas las transferencias almacenadas en la base de datos en formato de arreglo.
// PATH /transferencias
router.get('/', transferenciasController)

export default router
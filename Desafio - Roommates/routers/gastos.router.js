import { Router } from "express";
import { gastosController } from "../controllers/gastos.controller.js";

const router = Router()

// PATH /gastos GET: Devuelve el historial con todos los gastos registrados.
router.get('/', gastosController.getAllGastos)

// PATH /gasto PUT: Edita los datos de un gasto.
router.put('/gasto', gastosController.editGasto)

// PATH /gasto DELETE: Elimina un gasto del historial.
router.delete('/gasto', gastosController.removeGasto)

export default router
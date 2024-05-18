import { Router } from "express";
import { transferenciaController } from "../controllers/transferencias.controller.js";

const router = Router()

// Ruta para obtener data transferencias mediante el ID, a través del Controller de Transferencias.
router.get('/:id', transferenciaController.getTransferenciasById)

// Ruta para crear una transferencia, a través del Controller de Transferencias.
router.post('/', transferenciaController.createTransferencia)


export default router
import { Router } from "express";
import { CuentaController } from "../controllers/cuentas.controller.js"; // Controller de cuenta.

const router = Router()

// Ruta para obtener una cuenta, desde el Controller.
router.get('/:id', CuentaController.getCuenta)

export default router
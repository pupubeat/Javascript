import { Router } from "express";
import { skatersControllers } from "../controllers/participantes.controller.js";

const router = Router()

// Ruta para registrar nuevos participantes.
router.post('/register', skatersControllers)

// Ruta para que los participantes puedan iniciar sesión con su correo y contraseña.
router.post('/login', skatersControllers)

// Ruta para modificar datos de los participantes, exceptuando el correo electrónico y sus fotos.
router.put('/skater', skatersControllers)

export default router
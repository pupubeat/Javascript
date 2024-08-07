import { Router } from "express";
import { skatersControllers } from "../controllers/participantes.controller.js";
import { verifyToken } from "../utils/jwt.token.js";

const router = Router()

// Login/Register

// Ruta para registrar nuevos participantes.
router.post('/register', skatersControllers.registerSkater)
// Ruta para que los participantes puedan iniciar sesión con su correo y contraseña.
router.post('/login', skatersControllers.loginSkater)

// CRUD

// Ruta para obtener a todos los participantes de la database.
router.get('/', skatersControllers.getAllSkaters)
// Ruta para obtener a un solo participante en específico de la database, a través de su email.
router.get('/:email', skatersControllers.getOneSkater)
// Ruta para modificar los datos de un participante.
router.put('/:email', skatersControllers.modifySkater)
// Ruta para eliminar los datos de un participante.
router.delete('/:email', skatersControllers.removeSkater)

// Perfiles de los skaters.
router.get('/perfil', verifyToken,)

// Administradores.

export default router
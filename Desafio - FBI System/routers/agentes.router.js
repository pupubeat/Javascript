import { Router } from "express";
import { agentesControllers } from "../controllers/agentes.controllers.js";

const router = Router()

// Crear una ruta que autentique a un agente basado en sus credenciales y genere un token con sus datos.
router.post('/login', agentesControllers.login)

// Crear una ruta restringida que devuelva un mensaje de Bienvenida con el correo del agente autorizado.
router.get('/validar-token', agentesControllers.validarToken)

export default router
import { Router } from "express";
import { usuariosController } from "../controllers/usuarios.controller.js";

const router = Router()

// Ruta para recibir los datos de un nuevo usuario y los almacena en PostgreSQL.
// PATH /usuarios/usuario
router.post('/usuario', usuariosController)

// Ruta para devolver todos los usuarios registrados con sus balances.
// PATH /usuarios
router.get('/', usuariosController)

// Ruta para recibir los datos modificados de un usuario registrado y los actualiza.
// PATH /usuarios/usuario
router.put('/usuario', usuariosController)

// Ruta para recibir el id de un usuario registrado y lo elimina.
// PATH /usuarios/usuario
router.delete('/usuario', usuariosController)

export default router
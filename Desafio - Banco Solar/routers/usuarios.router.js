import { Router } from "express";
import { usuariosController } from "../controllers/usuarios.controller.js";

const router = Router()

// Ruta para recibir los datos de un nuevo usuario y almacenarlos en PostgreSQL.
// PATH /usuarios/usuario
router.post('/usuario', usuariosController.addUsuario)

// Ruta para devolver todos los usuarios registrados con sus balances.
// PATH /usuarios
router.get('/', usuariosController.getAllUsuarios)

// Ruta para recibir los datos modificados de un usuario registrado y y actualizarlos.
// PATH /usuarios/usuario
router.put('/usuario', usuariosController.updateUsuario)

// Ruta para recibir el id de un usuario registrado y lo elimina.
// PATH /usuarios/usuario
router.delete('/usuario', usuariosController.deleteUsuario)

export default router
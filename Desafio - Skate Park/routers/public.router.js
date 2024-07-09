import { Router } from "express"
import path from 'path'

const router = Router()
const __dirname = import.meta.dirname
const publicURL = path.join(__dirname, '../public')

// Sitio para registrar un nuevo usuario.
router.get('/register', (req, res) => {
    res.sendFile(publicURL + '/register.html')
})

// Sitio para hacer login con una cuenta existente.
router.get('/login', (req, res) => {
    res.sendFile(publicURL + '/login.html')
})

// Sitio para acceder a una cuenta de administrador.
router.get('/admin', (req, res) => {
    res.sendFile(publicURL + '/login.html')
})

// Sitio para editar o eliminar un perfil ya existente.
router.get('/datos', (req, res) => {
    res.sendFile(publicURL + '/datos.html')
})

export default router
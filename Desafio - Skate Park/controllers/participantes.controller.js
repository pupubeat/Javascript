import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { skaterModels } from "../models/participantes.model.js"

// REGISTER/LOGIN //

// Controller para registar un Skater.
export const registerSkater = async (req, res) => {
    try {
        const { email, nombre, password, anos_experiencia, especialidad, foto, estado } = req.body
        console.log(req.body)
        const hashedPassword = await bcrypt.hash(password, 10)
        const nuevoSkater = await skaterModels.register({
            email,
            nombre,
            password: hashedPassword,
            anos_experiencia,
            especialidad,
            foto
        })
        res.status(201).json({ message: 'Usuario creado con éxito:', nuevoSkater })
    } catch (error) {
        console.log(error)
        res.status()
    }
}

// Controller para hacer login.
export const loginSkater = async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)
        const skater = await skaterModels.findOneByEmail(email)
        // Validación del usuario.
        if (!skater) {
            return res.status(401).json({ message: 'Credenciales incorrectas' })
        }
        // Comparar contraseñas.
        const validPassword = await bcrypt.compare(password, skater.password)
        // Validación contraseña.
        if (!validPassword) {
            res.status(401).json({ message: 'Credenciales incorrectas.' })
        }
        // Otorgar el token al momento de hacer login.
        const token = jwt.sign({ email: email.skater }, process.env.SECRET_KEY, {
            expiresIn: "1Hr"
        })
        res.json({ token })

    } catch (error) {
        console.log(error)
        res.status()
    }
}

// CRUD //

// Controller para obtener todos los skaters de la database.
export const getAllSkaters = async (req, res) => {
    try {
        const skaters = await skaterModels.findAll()
        res.json(skaters)
    } catch (error) {
        console.log(error)
    }
}

// Controller para buscar un skater en específico de la database, a través del email.
export const getOneSkater = async (req, res) => {
    try {
        const { email } = req.params
        console.log(req.params)
        const skater = await skaterModels.findOneByEmail(email)
        // Validación si el usuario existe.
        if (!skater) {
            res.status(404).json({ message: 'Usuario no encontrado.' })
        }
        res.json(skater)
    } catch (error) {
        console.log(error)
    }
}

// Controller para editar la data de un skater en específico de la database, a través del email.
export const modifySkater = async (req, res) => {
    try {
        const { email } = req.params
        console.log(req.params)
        const { nombre, password, anos_experiencia, especialidad, foto, estado } = req.body
        console.log(req.body)
        const newData = {
            nombre,
            anos_experiencia,
            especialidad,
            foto,
            estado
        }
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10)
            newData.password = hashedPassword
        }
        const skater = await skaterModels.updateByEmail(email, newData)
        if (!skater) {
            return res.status(404).json({ message: 'Usuario no encontrado.' })
        }
        res.json(skater)

    } catch (error) {
        console.log(error)
    }
}

// Controller para eliminar la data de un skater en específico de la database, a través del email.
export const removeSkater = async (req, res) => {
    try {
        const { email } = req.params
        console.log(req.params)
        const skater = await skaterModels.removeByEmail(email)
        if (!skater) {
            return res.status(404).json({ message: 'Usuario no encontrado.' })
        }
        res.json(skater)
    } catch (error) {
        console.log(error)
    }
}

// Perfiles de Skaters y Admins//

// Controller que devuelve el perfil de un Skater, a través de su email.
export const getProfileSkater = async (req, res) => {
    try {
        const { email } = req.user
        const skater = await skaterModels.findOneByEmail(email)
        if (!skater) {
            return res.status(404).json({ message: 'Usuario no encontrado.' })
        }
        res.json(skater)
    } catch (error) {
        console.log(error)
    }
}

// Controller que devuelve el perfil de un Administrador.
export const getAdminSkater = async (req, res) => {
    try {
        const skaters = await skaterModels.findAll()
        res.json(skaters)
    } catch (error) {
        console.log(error)
    }
}

// Controller que modifica el perfil de un Administrador.
export const putAdminSkater = async (req, res) => {
    try {
        const { email } = req.params
        const { } = req.body
    } catch (error) {
        console.log(error)
    }
}

// Exportar controllers.
export const skatersControllers = {
    registerSkater,
    loginSkater,
    getAllSkaters,
    getOneSkater,
    modifySkater,
    removeSkater,
    getProfileSkater,
    getAdminSkater,
}
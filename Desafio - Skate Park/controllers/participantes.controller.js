import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { skaterModels } from "../models/participantes.model.js"

// Controller para registar un Skater.
export const registerSkater = async (req, res) => {
    try {
        const { email, nombre, password, anos_experiencia, especialidad, foto } = req.body
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

export const skatersControllers = {
    registerSkater,
    loginSkater,
    getAllSkaters,
    getOneSkater,
    modifySkater,
    removeSkater
}
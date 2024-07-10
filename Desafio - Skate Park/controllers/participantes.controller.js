import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { skaterModels } from "../models/participantes.model.js"

export const register = async (req, res) => {
    try {
        const { email, nombre, anos_experiencia, especialidad, foto } = req.body
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
        res.status(201).json({ message: 'Usuario creado con éxito' })
    } catch (error) {
        console.log(error)
        res.status(500)
    }
}

export const skatersControllers = {
    register,
    login,
    getAllSkaters,
    getOneSkater,
    modifySkater,
    removeSkater
}
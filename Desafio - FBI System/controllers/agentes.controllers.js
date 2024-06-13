import { jwtUtils } from "../utils/jwt.utils.js"
import database from '../data/agentes.js'
import bcrypt from 'bcrypt'

export const login = async (req, res) => {
    try {
        const { email, password } = req.body // credenciales solicitadas en formulario.
        console.log(req.body)

        // Validar la existencia del email en campo requerido.
        if (!email) {
            return res.status(401).json({
                ok: false,
                error: 'Credenciales incorrectas.'
            });
        }

        // Encriptar la password usando bcrypt.
        const validPassword = await bcrypt.compare(password, database.password);

        // Validar la existencia la password en campo requerido.
        if (!validPassword) {
            return res.status(401).json({
                ok: false,
                error: 'Credenciales incorrectas.'
            });
        }

        // Generar el token una vez si los campos requeridos son aceptados.
        const token = await jwtUtils.generateToken()
        return res.json({ token })


    } catch (error) {
        console.log(error)  // Capturar error en consola en caso si hay fallas en el servidor.
        return res.status(500).json({
            ok: false,
            msg: 'Error en el servidor.'
        });
    }
}

// Validar el token otorgado con anterioridad.
export const validarToken = async (req, res) => {
    const { token } = req.query
    try {
        const decodedToken = await jwtUtils.verifyToken(token, process.env.JWT_SECRETKEY)
        return res.json({
            message: "Token válido. Usuario autenticado.",
            decodedData: decodedToken
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Error en el servidor.'
        });
    }
}

export const agentesControllers = {
    login,
    validarToken
}
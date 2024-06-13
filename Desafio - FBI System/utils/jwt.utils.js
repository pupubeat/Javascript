import jwt from "jsonwebtoken";

// Función para generar un token.
export const generateToken = jwt.sign({ email }, process.env.JWT_SECRETKEY, { expiresIn })

// Función para verificar el token.
export const verifyToken = (req, res, next) => {
    let token = req.headers.authorization
    // Comprobar si existe el token.
    if (!token) {
        return res.status(401).json({ error: "Token not provided." })
    }
    // Al mostrar en consola el token, muestra un 'Bearer ', cosa que por sgte hay que "limpiar".
    console.log(token)
    // Limpiar caracteres extra del token.
    token = token.split(" ")[1]

    try {
        const { email, password } = jwt.verify(token, process.env.JWT_SECRETKEY)

    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: "Invalid token." })
    }
}

// Exportar utils de jsonwebtoken.
export const jwtUtils = {
    generateToken,
    verifyToken
}
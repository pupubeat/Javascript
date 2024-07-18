import jwt from 'jsonwebtoken'

export const verifyToken = (req, next, res) => {
    let token = req.headers.authorization

    // Verificar si se entregó el Token al usuario.
    if (!token) {
        return res.status(401).json({ msg: "Error: Token no entregado." })
    }
    //Limpieza de carácteres innecesarios del Token entregado.
    token = token.split(" ")[1]

    // Capturar errores con try-catch:
    try {
        const decodedToken = jwt.verify(token, env.process.SECRET_KEY)
        req.user = decodedToken
        next()
    } catch (error) {
        return req.status(403).json({ msg: "Error: Token inválido." })
    }
}
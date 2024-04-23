// Listado de nombres/usuarios autorizados para acceder al juego.
const listado = {
    "usuarios": [
        "Astrid",
        "Brian",
        "Felipe",
        "Francisco",
        "Javier",
        "Jocelyn",
        "Juan",
        "Maria",
        "Ignacia"
    ]
}

// Middleware que busca y comprueba que el usuario escrito en el url es del listado.
export const authMiddleware = (req, res, next) => {
    const usuario = req.params.usuario
    const usuarioEncontrado = listado.usuarios.find(item => item === usuario)

    // Situación cuando el usuario no coincide y no es parte del listado.
    if (!usuarioEncontrado) {
        res.redirect('/assets/who.jpeg')
    }

    next()
}
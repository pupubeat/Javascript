import { funcionesJoyas } from "../utils/funciones.js"

// Controller que devuelve todas las joyas de la database.
export const getAllJoyas = (req, res) => {
    try {
        return res.send({ joyas: funcionesJoyas.joyasHATEOAS() })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Controller que devuelve las joyas a través de su ID.
export const getJoyaByID = (req, res) => {
    const id = req.params
    console.log(req.params)
    const joya = funcionesJoyas.joyaID(id)
    try {
        return res.send({ joya })
    } catch (error) {
        // Ruta que devuelva como payload un JSON con un mensaje de error cuando el usuario consulte el id de una joya que no exista.
        console.log(error)
        return res.status(404).json({ mensaje: 'Error 404: No existe una joya con ese ID.' })
    }
}

// Controller que devuelve todas las joyas, con filtro de categoría activado.
export const getAllJoyasByCategoria = (req, res) => {
    try {
        const { categoria } = req.params
        console.log(req.params)
        const filtroJoyas = funcionesJoyas.filtrarCategoria(categoria)
        return res.send({
            nombre: filtroJoyas,
            stock: filtroJoyas.length
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Exportar los controllers.
export const joyasControllers = {
    getAllJoyas,
    getJoyaByID,
    getAllJoyasByCategoria
}
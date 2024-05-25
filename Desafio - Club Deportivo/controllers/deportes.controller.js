// Función para agregar un nuevo deporte.
export const agregar = async (req, res) => {
    try {
        const { nombre, precio } = req.query
        console.log(req.query) // Comprobar los datos en req.query, pasarlos por consola.
        const nuevoDeporte = pass
        return res.status(201).json(nuevoDeporte)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Función para devolver en formato JSON todos los deportes.
export const getData = (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Función para editar el precio de un deporte en específico.
export const edit = (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Función para eliminar un deporte en específico.
export const eliminar = (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Exportar los controllers de Deportes.
export const deportesController = {
    agregar,
    getData,
    edit,
    eliminar
}
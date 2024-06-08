export const getAllGastos = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const editGasto = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const removeGasto = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Exportar los controllers para los gastos.
export const gastosController = {
    getAllGastos,
    editGasto,
    removeGasto
}
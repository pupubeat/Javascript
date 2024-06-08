import axios from "axios"

export const addRoommate = async (req, res) => {
    try {
        await nuevoRoommate(); // Hacer funcion en utils
        recalcularDeudas();
        res.send();
    } catch (e) {
        return res.status(500).json({ ok: false })
    }
}

export const getAllRoommates = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Exportar los controllers para Roommates.
export const roommateController = {
    addRoommate,
    getAllRoommates
}
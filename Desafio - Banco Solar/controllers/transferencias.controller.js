import { transferenciasModel } from "../models/transferencias.model.js"

// Controller para obtener todos los registros de las transferencias bancarias existentes.
export const getAllTranferencias = async (req, res) => {
    try {
        const transferencias = await transferenciasModel.getTransferData()
        return res.json(transferencias)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Controller para crear una transferencia bancaria desde un usuario a otro.
export const createTransferencia = async (req, res) => {
    try {
        const { emisor, receptor, monto } = req.body
        console.log(req.body)
        const transferencia = await transferenciasModel.transfer({ emisor, receptor, monto })
        return res.status(201).json(transferencia)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Exportar los controllers de las transferencias bancarias.
export const transferenciasController = {
    getAllTranferencias,
    createTransferencia
}
import { transferenciasModel } from "../models/transferencias.model.js"; // Importar el modelo para las transferencias.

const getTransferenciasById = async (req, res) => {
    try {
        const { id } = req.params
        const transferencia = await transferenciasModel.findCuentasbyId(id)
        return res.json(transferencia)
    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

const createTransferencia = async (req, res) => {
    try {
        const { cuenta_origen, cuenta_destino, monto } = req.body
        const transferencia = await transferenciasModel.createTransaccion(cuenta_origen, cuenta_destino, monto)
        return res.status(201).json(transferencia)
    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

// Exportar los controladores para Transferencias.
export const transferenciaController = {
    getTransferenciasById,
    createTransferencia
}
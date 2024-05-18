import { cuentasModel } from "../models/cuentas.model.js"; // Importar el modelo para cuentas.

// api/v1/cuentas/:id
const getCuenta = async (req, res) => {
    try {
        const { id } = req.params
        const cuenta = await cuentasModel.findeOneCuentaById(id)
        return res.json(cuenta)

    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

// Exportar los controladores para Cuentas.
export const CuentaController = {
    getCuenta
}
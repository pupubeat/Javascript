import { pool } from '../database/connection.js'
import { usuariosModel } from './usuarios.model.js'

export const transfer = async ({ emisor, receptor, monto }) => {
    try {
        await pool.query('BEGIN')
        await usuariosModel.updateSaldo(emisor, -monto)
        await usuariosModel.updateSaldo(receptor, +monto)
        const query = {
            text: `
        INSERT INTO TRANSFERENCIAS
        (emisor, receptor, monto)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
            values: [emisor, receptor, monto],
            rowMode: "array"
        }
        const { rows } = pool.query(query)
        await pool.query('COMMIT')
        return rows[0]
    } catch (error) {
        // Devolver un error con ROLLBACK, en caso que no se pueda efectuar la transaccion, cuenta de origen con saldo insuficiente.
        console.log(error)
        await pool.query('ROLLBACK')
        throw error
    }
}

export const getTransferData = async () => {
    const query = {
        text: `
        SELECT * FROM transferencias
        `,
        rowMode: "array"
    }
    const { rows } = pool.query(query)
    return rows
}

export const transferenciasModel = {
    transfer,
    getTransferData
}
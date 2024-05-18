import { pool } from '../database/connection.db.js'

const findeOneCuentaById = async (ID) => {
    const query = {
        text: `
            SELECT * FROM CUENTAS WHERE ID = $1
        `,
        values: [ID]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const updateSaldo = async (ID, SALDO) => {
    const query = {
        text: `
        UPDATE CUENTAS
        SET SALDO = SALDO + $2
        WHERE ID = $1
        RETURNING * 
        `,
        values: [ID, SALDO]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const cuentasModel = {
    findeOneCuentaById,
    updateSaldo
}
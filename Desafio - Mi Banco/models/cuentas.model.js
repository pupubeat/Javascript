import { pool } from '../database/connection.db.js'

// Obtener una sola cuenta via ID, desde la database de Banco.
const findeOneCuentaById = async (ID) => {
    // Texto y valores parametrizados.
    const query = {
        text: `
            SELECT * FROM CUENTAS WHERE ID = $1
        `,
        values: [ID]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

// Actualizar el saldo, desde la database de Banco.
const updateSaldo = async (ID, SALDO) => {
    // Texto y valores parametrizados.
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

// Exportar modelos de las Cuentas, para interactuar por sgte con el Controller del mismo.
export const cuentasModel = {
    findeOneCuentaById,
    updateSaldo
}
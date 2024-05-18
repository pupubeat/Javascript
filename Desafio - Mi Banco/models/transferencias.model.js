import { pool } from '../database/connection.db.js'
import { cuentasModel } from './cuentas.model.js'

// Realizar una función asíncrona que consulte la tabla de transferencias y retorne los últimos 10 registros de una cuenta en específico.
const findCuentasbyId = async (ID) => {
    const query = {
        text: `
            SELECT * FROM TRANSFERENCIAS 
            WHERE CUENTA_ORIGEN = $1
            OR CUENTA_DESTINO = $1
            LIMIT 10
            RETURNING *
            `,
        values: [ID]
    }
    const { rows } = pool.query(query)
    return rows
}

const createTransaccion = async (CUENTA_ORIGEN, CUENTA_DESTINO, MONTO) => {
    try {
        await pool.query('BEGIN')
        await cuentasModel.updateSaldo(CUENTA_ORIGEN, -MONTO)
        await cuentasModel.updateSaldo(CUENTA_DESTINO, +MONTO)

        const query = {
            text: `
            INSERT INTO TRANSFERENCIAS
            (MONTO, CUENTA_ORIGEN, CUENTA_DESTINO)
            VALUES ($1, $2, $3)
            RETURNING *
            `,
            values: [MONTO, CUENTA_ORIGEN, CUENTA_DESTINO]
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

export const transferenciasModel = {
    findCuentasbyId,
    createTransaccion
}
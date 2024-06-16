import { pool } from '../database/connection.db.js'

const findAll = async () => {
    const query = {
        text: `
        SELECT * FROM CANCIONES
        `,
        rowMode: "array"
    }
    const { rows } = await pool.query(query)
    return rows
}

const query = {
    text: `
    SELECT * FROM ESTUDIANTES
    `,
    rowMode: "array"
}
const { rows } = await pool.query(query)
return rows

export const cancionesModels = {
    findAll
}
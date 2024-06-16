import { pool } from '../database/connection.db.js'

// Model para registrar una canción en la Database.
const register = async ({ titulo, artista, tono }) => {
    const query = {
        text: `
        INSERT INTO CANCIONES
        (TITULO, ARTISTA, TONO)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
        values: [titulo, artista, tono],
        rowMode: "array"
    }
    const { rows } = await pool.query(query)
    return rows[0]
}
// Model para obtener la data de todas las canciones registradas en la Database.
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

// Model que edita la data de una canción desde la Database.
const edit = async ({ id, titulo, artista, tono }) => {
    const query = {
        text: `
            UPDATE CANCIONES
            SET TITULO = $2,
            ARTISTA = $3,
            TONO = $4
            WHERE ID = $1
        `,
        values: [id, titulo, artista, tono],
        rowMode: "array"
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

// Model que elimina una canción desde la Database.
const remove = async ({ id }) => {
    const query = {
        text: `
        DELETE FROM CANCIONES
        WHERE ID = $1
        RETURNING *
        `,
        values: [id],
        rowMode: "array"
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

// Exportar los models.
export const cancionesModels = {
    register,
    findAll,
    edit,
    remove
}
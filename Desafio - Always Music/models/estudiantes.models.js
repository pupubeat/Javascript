import { pool } from '../database/connection.js'

// Model para registrar un estudiante.
export const register = async ({ nombre, rut, curso, nivel }) => {
    const query = {
        text: `INSERT INTO ESTUDIANTES
        (nombre, rut, curso, nivel)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
        values: [nombre, rut, curso, nivel]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

// Model para obtener la data de todos los estudiantes registrados.
export const findAll = async () => {
    const query = {
        text: `SELECT * FROM ESTUDIANTES`
    }
    const { rows } = await pool.query(query)
    return rows
}

// Model para obtener la data de un solo estudiante mediante su RUT.
export const findByRut = async ({ rut }) => {
    const query = {
        text: `
        SELECT * FROM ESTUDIANTES 
        WHERE rut = $1
        `,
        values: [rut]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

// Model para actualizar la data de un solo estudiante mediante su RUT.
export const update = async ({ nombre, rut, curso, nivel }) => {
    const query = {
        text: `UPDATE ESTUDIANTES
        SET nombre = $1,
        curso = $3,
        nivel = $4
        WHERE rut = $2
        RETURNING *
        `,
        values: [nombre, rut, curso, nivel]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

// Model para eliminar la data de un solo estudiante mediante su RUT.
export const remove = async ({ rut }) => {
    const query = {
        text: `DELETE FROM ESTUDIANTES
        WHERE rut = $1
        RETURNING *
        `,
        values: [rut]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

// Exportar los models.
export const estudiantesModels = {
    register,
    findAll,
    findByRut,
    update,
    remove
}
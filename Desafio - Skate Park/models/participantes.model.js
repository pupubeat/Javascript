import { pool } from '../database/connection.db.js'

// Model para registar un Skater.
export const register = async ({ email, nombre, password, anos_experiencia, especialidad, foto, estado }) => {
    const query = {
        text:
            `
            INSERT INTO skaters
            (email, nombre, password, anos_experiencia, especialidad, foto, estado)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
            `,
        values: [email, nombre, password, anos_experiencia, especialidad, foto, estado]
    }
    const rows = await pool.query(query)
    return rows[0]
}

// Model para buscar un skater en específico de la database, a través del email.
export const findOneByEmail = async ({ email }) => {
    const query = {
        text:
            `
            SELECT * FROM skaters
            WHERE email = $1
            `,
        values: [email]
    }
    const rows = await pool.query(query)
    return rows[0]
}

// Model para obtener todos los skaters de la database.
export const findAll = async () => {
    const query = {
        text:
            `
            SELECT * FROM skaters
            `,
    }
    const rows = await pool.query(query)
    return rows
}

export const skaterModels = {
    register,
    findOneByEmail,
    findAll,
    updateByEmail,
    removeByEmail
}
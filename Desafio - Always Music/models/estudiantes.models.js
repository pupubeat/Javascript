import { pool } from '../database/connection.js'

// Model para registrar un estudiante.
export const register = async () => {
    const query = {
        text: ``,
        values: []
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

// Model para obtener la data de todos los estudiantes registrados.
export const findAll = async () => {
    const query = {
        text: `SELECT * FROM `
    }
    const { rows } = await pool.query(query)
    return rows
}

// Model para obtener la data de un solo estudiante mediante su RUT.
export const findByRut = async (rut) => {
    const query = {
        text: ``,
        values: []
    }
    const { rows } = await pool.query(query)
    return rows
}

// Model para actualizar la data de un solo estudiante mediante su RUT.
export const update = async (rut) => {
    const query = {
        text: ``,
        values: []
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

// Model para eliminar la data de un solo estudiante mediante su RUT.
export const remove = async (rut) => {
    const query = {
        text: ``,
        values: []
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
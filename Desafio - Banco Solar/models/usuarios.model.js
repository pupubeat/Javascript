import { pool } from '../database/connection.js'

export const register = async ({ nombre, balance }) => {
    const query = {
        text: `
        INSERT INTO usuarios
        (nombre, balance)
        VALUES ($1, $2)
        RETURNING *
        `,
        values: [nombre, balance],
        rowMode: "array"
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const findAll = async () => {
    const query = {
        text: `
        SELECT * FROM usuarios
        `,
        rowMode: "array"
    }
    const { rows } = await pool.query(query)
    return rows
}

export const edit = async ({ id, nombre, balance }) => {
    const query = {
        text: `
        UPDATE usuarios
        SET nombre = $2
        balance = $3
        WHERE id = $1
        RETURNING * 
        `,
        values: [id, nombre, balance],
        rowMode: "array"
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const remove = async ({ id }) => {
    const query = {
        text: `
        DELETE FROM usuarios
        WHERE id = $1
        `,
        values: [id],
        rowMode: "array"
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

// Actualizar el saldo, desde la database de Banco.
export const updateSaldo = async (id, balance) => {
    const query = {
        text: `
        UPDATE usuarios
        SET balance = balance + $2
        WHERE id = $1
        RETURNING *
        `,
        values: [id, balance]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const usuariosModel = {
    register,
    findAll,
    edit,
    remove,
    updateSaldo
}
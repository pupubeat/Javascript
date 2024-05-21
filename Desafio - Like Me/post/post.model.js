import { db } from "../config/db.config.js";

// Model para obtener todos los datos de la tabla POSTS.
export const findAll = async () => {
    const query = {
        text: `
        SELECT * FROM POSTS ORDER BY LIKES DESC
        `
    }
    const { rows } = await db.query(query)
    return rows[0]
}

// Model para crear valores de usuario, url y descripcion en tabla POSTS.
export const create = async ({ usuario, url, descripcion }) => {
    const query = {
        text: `
        INSERT INTO POSTS (usuario, url, descripcion)
        VALUES ($1, $2, $3)
        RETURNING * 
        `,
        values: [usuario, url, descripcion]
    }
    const { rows } = await db.query(query)
    return rows[0]
}

// Model para actualizar un dato/valor de la tabla POSTS, utilizando el ID de parámetro.
export const update = async ({ id }) => {
    const query = {
        text: `
        UPDATE POSTS
        SET likes = likes + 1
        WHERE id = #1
        RETURNING *
        `,
        values: [id]
    }
    const { rows } = await db.query(query)
    return rows[0]
}

// Exportar modelos de /posts
export const postModels = {
    findAll,
    create,
    update
}


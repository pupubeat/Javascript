import { usuariosModel } from "../models/usuarios.model.js"

// Controller para recibir los datos de un nuevo usuario y almacenarlos en PostgreSQL.
export const addUsuario = async (req, res) => {
    try {
        const { nombre, balance } = req.body
        console.log(req.body)
        const usuario = await usuariosModel.register({ nombre, balance })
        return res.status(201).json(usuario)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Controller para devolver todos los usuarios registrados con sus balances.
export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await usuariosModel.findAll()
        return res.json(usuarios)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Controller para recibir los datos modificados de un usuario registrado y actualizarlos.
export const updateUsuario = async (req, res) => {
    try {
        const { id } = req.query
        console.log(req.query)
        const { nombre, balance } = req.body
        console.log(req.body)
        const usuario = await usuariosModel.edit({ id, nombre, balance })
        return res.json(usuario)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Controller para recibir el id de un usuario registrado y lo elimina.
export const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.query
        console.log(req.query)
        const usuario = await usuariosModel.remove({ id })
        return res.json(usuario)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Exportar controllers de usuarios.
export const usuariosController = {
    addUsuario,
    getAllUsuarios,
    updateUsuario,
    deleteUsuario
}
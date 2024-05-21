import { postModels } from "./post.model.js" // Importar modelos de /posts

// PATH: /posts
const getPosts = async (req, res) => {
    try {
        const posts = await postModels.findAll()
        return res.json(posts)
    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

// PATH: /posts
const createPost = async (req, res) => {
    try {
        const { usuario, url, descripcion } = req.body
        const post = await postModels.create({ usuario, url, descripcion })
        return res.status(201).json(post)

    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

// PATH: /posts/:id
const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await postModels.update({ id })
        return res.json(post)
    } catch (error) {
        return res.status(500).json({ ok: false })
    }
}

// Exportar controllers de /posts
export const postController = {
    getPosts,
    createPost,
    updatePost
}
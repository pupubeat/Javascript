import { Router } from "express";
import { postController } from "./post.controller.js";

const router = Router()

// Creación de las rutas para el PATH /posts
router.get('/', postController.getPosts)
router.post('/', postController.createPost)
router.put('/:id', postController.updatePost)

export default router
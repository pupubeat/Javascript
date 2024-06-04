import { Router } from "express";
import { imgControllers } from "../controllers/img.controller.js";

const router = Router()

// Ruta que reciba y almacene una imagen en una carpeta pública del servidor.
// PATH /imagen
router.post('/', imgControllers.addImg)

// Ruta que reciba como parámetro el nombre de una imagen y la elimine de la carpeta en donde están siendo alojadas las imágenes.
// PATH /imagen/:nombre
router.delete('/:nombre', imgControllers.removeImg)

export default router
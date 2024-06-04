import { Router } from "express";
import { imgControllers } from "../controllers/img.controller.js";

const router = Router()

// Ruta para obtener data del formulario
router.get('/', imgControllers.getForm)

// Ruta para obtener data del collage de imagenes.
router.get('/collage', imgControllers.getCollage)

// Ruta que reciba y almacene una imagen en una carpeta pública del servidor.
router.post('/imagen', imgControllers.addImg)

// Ruta que reciba como parámetro el nombre de una imagen y la elimine de la carpeta en donde están siendo alojadas las imágenes.
router.delete('/imagen/:nombre', imgControllers.removeImg)

export default router
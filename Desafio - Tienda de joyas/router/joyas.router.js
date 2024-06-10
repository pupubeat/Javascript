import { Router } from "express";
import { joyasControllers } from "../controllers/joyas.controller.js";

const router = Router()

// Ruta que devuelve la estructura HATEOAS de todas las joyas almacenadas en la base de datos.
router.get('/', joyasControllers.getAllJoyas)

// Ruta que devuelve una joya a través del ID.
router.get('/:id', joyasControllers.getJoyaByID)

// Ruta que devuelve solo las joyas correspondientes a la categoría obtenida.
router.get('/categoria/:categoria', joyasControllers.getAllJoyasByCategoria)

// Crear una ruta GET /joyas que permita el filtrado por campos de las joyas.
// router.get('/joyas')

export default router
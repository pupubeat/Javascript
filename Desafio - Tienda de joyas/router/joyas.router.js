import { Router } from "express";

const router = Router()

// Crear una ruta GET /joyas que devuelva la estructura HATEOAS de todas las joyas almacenadas en la base de datos.
router.get('/joyas',)

// Crear una ruta GET /joyas/categoria/:categoria que devuelva solo las joyas correspondientes a la categoría obtenida.
router.get('/joyas/categoria/:categoria')

// Crear una ruta GET /joyas que permita el filtrado por campos de las joyas.
router.get('/joyas')

// Crear una ruta que devuelva como payload un JSON con un mensaje de error cuando el usuario consulte el id de una joya que no exista.

export default router
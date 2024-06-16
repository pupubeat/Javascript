import { Router } from "express";

const router = Router()

// Crear una ruta que reciba los datos correspondientes a una canción y realice a través de una función asíncrona la inserción en la tabla canciones.
router.post('/cancion',)

// Crear una ruta que devuelva un JSON con los registros de la tabla canciones.
router.get('',)

// Crear una ruta que reciba los datos de una canción que se desea editar
router.put('',)

// Crear una ruta que reciba por queryString el id de una canción y realiza una consulta SQL a través de una función asíncrona para eliminarla de la base de datos.
router.delete('/cancion',)

export default router
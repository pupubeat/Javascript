import joyasData from '../database/joyasData.js' // Database de las joyas

// Creación de una función HATEOAS para devolver todas las joyas de la database.
export const joyasHATEOAS = () => {
    return joyasData.map((joyas) => ({
        nombre: joyas.nombre,
        href: `http://localhost:3000/joyas/id/${joyas.id}` // database = el sitio web de la tienda de joyas.
    }));
}

// Creación de una función para obtener una joya específica a través de su ID respectivo.
export const joyaID = (id) => {
    return joyasData.find((joya) => joya.id === id) // usar método de array find
}

// Creación de una función para filtrar el array de joyas por categoría.
export const filtrarCategoria = (categoria) => {
    return joyasData.filter((joyas) => joyas.categoria === categoria) // usar método de array filter
}

// Exportar las funciones, para ser usadas en Controllers.
export const funcionesJoyas = {
    joyasHATEOAS,
    joyaID,
    filtrarCategoria
}

// Tengo algunas dudas aún con los HATEOAS... Estaba mirando la ver. de este trabajo que hizo el profe.
// HATEOAS v1 es lo mismo que la v2? Pero se usan para diferentes propositos?
// IIFE
const main = (() => {
    // Extraer elementos del DOM.
    const userData = document.querySelector("#user-data")

    // Función para extraer la data API externa.
    const dataFetch = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/photos/")
            const data = await response.json()

            // Pintar en el HTML
            data.forEach((item) => {
                if (item.id <= 20) {
                    userData.innerHTML += `
                    <ul>${item.title}</ul>
                    `
                }
            })
        }
        catch (error) {
            console.log(error.message)
        }
    }

    // Retornar la data de la API a través de una función pública.
    return {
        getData() {
            dataFetch()
        }
    }

})();

// Creación de función con promesa, que devuelva un mensaje a la consola.
const comment = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log("Información enviada con éxito."))
        }, 3000)
    })
}

// Función asincrónica que capture el mensaje de la promesa creada con anterioridad.
const processData = async () => {
    const consoleComment = await main.getData(comment())
    return consoleComment
}

// Invocar función, que muestre la data de la API + respuesta de la promesa en consola.
processData()

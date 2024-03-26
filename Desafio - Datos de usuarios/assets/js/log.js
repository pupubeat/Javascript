// Función IIFE
const main = (() => {
    // Extraer elementos del DOM.
    const resultsElement = document.querySelector("#results")

    // Función que devuelve data de la API externa
    const dataFetch = async () => {

        // Manejo de errores try-catch
        try {
            const response = await fetch("https://randomuser.me/api/?results=10")
            const { results } = await response.json()
            results.forEach((user) => {
                resultsElement.innerHTML += `
                <div class="card">
                    <img src="${user.picture.large}" class="card-img-top object-fit-cover" alt="...">
                    <div class="card-body">
                        <p class="card-text">${user.name.first} ${user.name.last}</p>
                        <p class="card-text">${user.email}</p>
                        <p class="card-text">${user.phone}</p>
                    </div>
                </div>
                `
            })

        }
        catch (error) {
            console.log(error.message)
        }
    }

    // Retornar la función de la data API con función pública.
    return {
        getData() {
            dataFetch()
        }
    }

})();

document.addEventListener(`DOMContentLoaded`, () => {
    // Invocar función.
    main.getData()
})
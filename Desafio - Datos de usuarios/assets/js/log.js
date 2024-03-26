// Función IIFE
const main = (() => {
    // Extraer elementos del DOM.
    const resultsElement = document.querySelector("#results")

    //
    const dataFetch = async () => {
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
            //
        }
        catch (error) {
            console.log(error.message)
        }
    }

    //
    return {
        getData() {
            dataFetch()
        }
    }

})();

document.addEventListener(`DOMContentLoaded`, () => {
    main.getData()
})
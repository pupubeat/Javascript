// Extraer elementos del DOM.
const postData = document.querySelector("#post-data")

// Obtener data de la AÍ a través de fetch
const getPosts = async () => {

    // Manejar los posibles errores con try-catch
    try {
        const apiResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
        const apiData = await apiResponse.json()
        apiData.forEach((item) => {
            postData.innerHTML += `
            <li>${item.title}</li>
            <p>${item.body}</p>
            `
        })
    }
    catch (error) {
        console.log(error.message)
    }
}
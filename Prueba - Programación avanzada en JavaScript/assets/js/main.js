import { Animal } from "./animal.js"
import { Leon } from "./leon.js"
import { Lobo } from "./lobo.js"
import { Oso } from "./oso.js"
import { Serpiente } from "./serpiente.js"
import { Aguila } from "./aguila.js"

// Extraer elementos del DOM.
const seccionAnimales = document.querySelector("#Animales")
const animal = document.querySelector("#animal")
const edad = document.querySelector("#edad")
const comentarios = document.querySelector("#comentarios")
const error = document.querySelector("#espacioError")
const vistaPrevia = document.querySelector("#preview")
const btnRegistrar = document.querySelector("#btnRegistrar")
const exampleModal = document.querySelector("#exampleModal")

// Obtener imágenes de los animales.
const objAnimal = async () => {
    const response = await fetch("animales.json")
    const data = await response.json()
    return data
}

// IIFE + función rpivada que devuelve una card con datos del animal.
const mainAnimal = (() => {

    const animalCard = (animal) => {
        return `
        <div class="card-animal">
            <img class="img-animal" src="./assets/imgs/${animal.getImg}" alt="${animal.getNombre}">
            <button class="btnAnimal">
                <img src="./assets/imgs/audio.svg" alt="sonido">
            </button>
            <audio src="./assets/sounds/${animal.getSonido}"></audio>
        </div>
        `
    }

    // Retornar función privada de las card.
    return {
        getAnimalCard: animalCard
    }
})();

// Registro de animales investigados.
btnRegistrar.addEventListener("click", async () => {
    const animalApi = await objAnimal()
    const { animales } = animalApi

    // Seleccionar nombre del animal //
    const opcionAnimal = animal.value
    const dataAnimal = animales.find((item) => item.name === opcionAnimal)
    console.log(dataAnimal)

    // Seleccionar edad del animal //
    const opcionEdad = edad.value

    // Ingresar comentario //

    // Reiniciar el texto de error.
    error.textContent = ""

    // Captar valor del id comentarios.
    const inputComentario = comentarios.value

    // Validación cuadro de texto vacío.
    if (!inputComentario.trim()) {
        error.textContent = "No puedes dejar el espacio sin comentar."
        error.style.color = "red"
        return
    }

    // Validación con Regex.
    const regexComentario = /^[a-zA-Z ]*$/
    if (!regexComentario.test(inputComentario)) {
        error.textContent = "Solo puedes ingresar comentarios con carácteres alfabéticos."
        error.style.color = "red"
        return
    }

    // Creación de objetos a partir de los datos ingresados por el usuario. 
    let animalSeleccionado;
    switch (opcionAnimal) {
        case "Leon":
            animalSeleccionado = new Leon(dataAnimal.name, opcionEdad, dataAnimal.imagen, inputComentario, dataAnimal.sonido)
            break;

        case "Lobo":
            animalSeleccionado = new Lobo(dataAnimal.name, opcionEdad, dataAnimal.imagen, inputComentario, dataAnimal.sonido)
            break;

        case "Oso":
            animalSeleccionado = new Oso(dataAnimal.name, opcionEdad, dataAnimal.imagen, inputComentario, dataAnimal.sonido)
            break;

        case "Serpiente":
            animalSeleccionado = new Serpiente(dataAnimal.name, opcionEdad, dataAnimal.imagen, inputComentario, dataAnimal.sonido)
            break;

        case "Aguila":
            animalSeleccionado = new Aguila(dataAnimal.name, opcionEdad, dataAnimal.imagen, inputComentario, dataAnimal.sonido)
    }

    // Insertar objeto creado en una card.
    seccionAnimales.innerHTML += mainAnimal.getAnimalCard(animalSeleccionado)
})


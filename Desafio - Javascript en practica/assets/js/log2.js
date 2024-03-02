// Datos del archivo HTML.
const rojo = document.querySelector("#btn-1")
const naranjo = document.querySelector("#btn-2")
const amarillo = document.querySelector("#btn-3")
const verde = document.querySelector("#btn-4")
const celeste = document.querySelector("#btn-5")
const morado = document.querySelector("#btn-6")
const caja = document.querySelector("#caja")

// Cambiar a color rojo.
rojo.addEventListener("click", () => {
    caja.style.backgroundColor = "#e53e3e"
})

// Cambiar a color naranja.
naranjo.addEventListener("click", () => {
    caja.style.backgroundColor = "#dd6b20"
})

// Cambiar a color amarillo.
amarillo.addEventListener("click", () => {
    caja.style.backgroundColor = "#faf089"
})

// Cambiar a color verde.
verde.addEventListener("click", () => {
    caja.style.backgroundColor = "#48bb78"
})

// Cambiar a color celeste.
celeste.addEventListener("click", () => {
    caja.style.backgroundColor = "#81e6d9"
})

// cambiar a color morado.
morado.addEventListener("click", () => {
    caja.style.backgroundColor = "#d53f8c"
})
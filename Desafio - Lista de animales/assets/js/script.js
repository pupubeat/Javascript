import { Propietario } from "./propietario.js"
import { Animal } from "./animal.js"
import { Mascota } from "./mascota.js"

// Extraer elementos del DOM
const propietario = document.querySelector("#propietario")
const telefono = document.querySelector("#telefono")
const direccion = document.querySelector("#direccion")
const nombreMascota = document.querySelector("#nombreMascota")
const tipo = document.querySelector("#tipo")
const enfermedad = document.querySelector("#enfermedad")
const formulario = document.querySelector("form")
const resultado = document.querySelector("#resultado")

formulario.addEventListener("submit", (event) => {
    // Detener comportamiento por defecto.
    event.preventDefault()

    // Input propietario //

    // Captar valor del id propietario.
    const inputPropietario = propietario.value

    // Validación error input vacío.
    if (!inputPropietario.trim()) {
        alert("No puedes dejar el campo vacío.")
        return
    }

    // Validación con Regex, con sólo carácteres alfabéticos.
    const regexPropietario = /^[a-zA-Z ]*$/
    if (!regexPropietario.test(inputPropietario)) {
        alert("El valor que ha ingresado no es válido. Intente otra vez.")
        return
    }

    // Input telefono //

    // Captar valor del id telefono
    const inputTelefono = telefono.value

    // Validación error input vacío
    if (!inputTelefono.trim()) {
        alert("No puedes dejar el campo vacío.")
        return
    }

    // Validación con regex, con sólo carácteres númericos.
    const regexTelefono = /^[0-9]+$/
    if (!regexTelefono.test(inputTelefono)) {
        alert("El valor que ha ingresado no es válido. Intente otra vez.")
        return
    }

    // Input direccion //

    // Captar valor del id direccion
    const inputDireccion = direccion.value

    // Validación error input vacío
    if (!inputDireccion.trim()) {
        alert("No puedes dejar el campo vacío.")
        return
    }

    // Input nombre mascota //

    // Captar valor del id telefono
    const inputNombreMascota = nombreMascota.value

    // Validación error input vacío
    if (!inputNombreMascota.trim()) {
        alert("No puedes dejar el campo vacío.")
        return
    }

    // Validación con Regex, con sólo carácteres alfabéticos.
    const regexNombreMascota = /^[a-zA-Z ]*$/
    if (!regexNombreMascota.test(inputNombreMascota)) {
        alert("El valor que ha ingresado no es válido. Intente otra vez.")
        return
    }

    // Select tipo //
    const selectTipo = tipo.value

    // Input enfermedad //

    // Captar valor del id enfermedad
    const inputEnfermedad = enfermedad.value

    // Validación error input vacío
    if (!inputEnfermedad.trim()) {
        alert("No puedes dejar el campo vacío.")
        return
    }

    // Validación con Regex, con sólo carácteres alfabéticos.
    const regexEnfermedad = /^[a-zA-Z ]*$/
    if (!regexEnfermedad.test(inputEnfermedad)) {
        alert("El valor que ha ingresado no es válido. Intente otra vez.")
        return
    }

    // Creación de objeto a partir de la instancia mascota, con los datos recolectados del formulario.
    const mascota = new Mascota(inputPropietario, inputDireccion, inputTelefono, selectTipo, inputNombreMascota, inputEnfermedad)

    // Resultado de datos captados del formulario.
    resultado.innerHTML = `
    <li>${mascota.datosPropietario()}</li>
    <li>${mascota.getTipo}, mientras que el nombre es: ${mascota.getNombre} y la enfermedad es: ${mascota.getEnfermedad}.</li>
    `
})

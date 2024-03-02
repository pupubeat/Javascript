// Datos del archivo HTML
const formulario = document.querySelector("#formulario")
const nombre = document.querySelector("#nombre")
const asunto = document.querySelector("#asunto")
const mensaje = document.querySelector("#mensaje")
const errorNombre = document.querySelector(".errorNombre")
const errorAsunto = document.querySelector(".errorAsunto")
const errorMensaje = document.querySelector(".errorMensaje")
const resultado = document.querySelector(".resultado")

// Función para el evento submit del formulario
formulario.addEventListener("submit", (event) => {
    // Detener comportamiento por defecto.
    event.preventDefault()

    // Label Nombre //

    // Reiniciar errores.
    errorNombre.textContent = ""

    // Capturar valor del imput Nombre.
    const textoNombre = nombre.value;

    // Error imput vacío
    if (!textoNombre.trim()) {
        errorNombre.textContent = "El nombre es requerido.";
        errorNombre.style.color = "red";
        errorNombre.style.fontStyle = "italic";
        return
    }

    //Validación con Regex para el label Nombre
    const regexNombre = /^[a-zA-Z ]*$/
    if (!regexNombre.test(textoNombre)) {
        alert("El nombre que ha ingresado no es válido.");
        return
    }

    // Label Asunto //

    // Reiniciar errores.
    errorAsunto.textContent = ""

    // Capturar valor del imput Asunto
    const textoAsunto = asunto.value;

    // Error imput vacío
    if (!textoAsunto.trim()) {
        errorAsunto.textContent = "El asunto es requerido.";
        errorAsunto.style.color = "red";
        errorAsunto.style.fontStyle = "italic";
        return
    }

    //Validación con Regex para el label Asunto
    const regexAsunto = /^[a-zA-Z ]*$/
    if (!regexAsunto.test(textoAsunto)) {
        alert("El asunto que ha ingresado no es válido");
        return
    }

    // Label Mensaje //

    // Reiniciar el texto de errorMensaje
    errorMensaje.textContent = ""

    // Capturar valor del imput Nombre
    const textoMensaje = mensaje.value;

    // Error imput vacío
    if (!textoMensaje.trim()) {
        errorMensaje.textContent = "El mensaje es requerido.";
        errorMensaje.style.color = "red";
        errorMensaje.style.fontStyle = "italic";
        return
    }

    //Validación con Regex para el label Mensaje
    const regexMensaje = /^[A-Za-z ]*$/
    if (!regexMensaje.test(textoMensaje)) {
        alert("El mensaje que ha ingresado no es válido")
        return
    }

    // Mensaje de éxito
    resultado.textContent = "Mensaje enviado con éxito !!!"
    resultado.style.color = "green"
    resultado.style.fontStyle = "italic"
})


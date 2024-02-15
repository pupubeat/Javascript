//Tooltip//
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Click y alert para botón "Enviar correo"
$("#enviarCorreo").on("click", function () {
    alert("El correo fue enviado correctamente...")
});

//Doble click en Ingredientes
$("#target1").on("dblclick", function () {
    $(this).css('color', '#dc3545');
});

//Doble click en Preparación
$("#target2").on("dblclick", function () {
    $(this).css('color', 'red');
});

//Ocultar contenido de las cards
let flip = 0;
$(".card-title").on("click", function () {
    $(".card-text").toggle(flip++ % 2 === 0);
});
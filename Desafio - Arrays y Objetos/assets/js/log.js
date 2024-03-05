/* 1. Crear la estructura de datos mediante arreglos y objetos. Debe crear 1 arreglo por cada
listado (Radiología, Traumatología y Dental) y 1 objeto por cada fila de información
que contengan los listados, considerando las propiedades establecidas en la
descripción */

// Extracción tablas de datos desde Excel, con el fin de transformarlos en Arrays de JS.

// Array para Radiología.
const radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' }
];

// Array para Traumatología.
const traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' }
];

// Array para Consulta Dental.
const dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' }
];

/* 2. Mostrar por pantalla la primera y última atención de cada listado, desplegando el
nombre del paciente junto con la previsión, separados por un guión (utilizar índices de
arreglos para esto)*/

// Recoger datos del DOM.
const radiologiaTexto = document.getElementById("radiologiaHtml")
const traumatologiaTexto = document.getElementById("traumatologiaHtml")
const dentalTexto = document.getElementById("dentalHtml")

// Primera y última atención de Radiología:
console.log(radiologia[0])
console.log(radiologia[radiologia.length - 1])

// Respuesta usando manipulación del DOM:
radiologiaTexto.textContent = `Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.`

// Primera y última atención de Traumatología:
console.log(traumatologia[0])
console.log(traumatologia[traumatologia.length - 1])

// Respuesta usando manipulación del DOM:
traumatologiaTexto.textContent = `Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.`

// Primera y última atención de la Consulta Dental:
console.log(dental[0])
console.log(dental[dental.length - 1])

// Respuesta usando manipulación del DOM:
dentalTexto.textContent = `Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.`


/* 3. Recorrer el arreglo y mostrar su contenido en una tabla. */

// Recoger datos del DOM.
const tablaRadiologia = document.getElementById("tablaRadiologia")
const tablaTraumatologia = document.getElementById("tablaTraumatologia")
const tablaDental = document.getElementById("tablaDental")


// For each para table de Radiología.
tablaRadiologia.innerHTML = ""
radiologia.forEach((item) => {
    console.log(item)
    tablaRadiologia.innerHTML += `
    <tr>
        <th scope="row">${item.hora}</th>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `
})

// For each para table de Traumatología.
tablaTraumatologia.innerHTML = ""
traumatologia.forEach((item) => {
    console.log(item)
    tablaTraumatologia.innerHTML += `
    <tr>
        <th scope="row">${item.hora}</th>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `
})

// // For each para table de Consulta Dental.
tablaDental.innerHTML = ""
dental.forEach((item) => {
    console.log(item)
    tablaDental.innerHTML += `
    <tr>
        <th scope="row">${item.hora}</th>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `
})






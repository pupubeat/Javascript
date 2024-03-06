// Array original de Radiología.
const radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

// Array original de Traumatología.
const traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

// Array original de la consulta Dental.
const dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];


/* 1. Agregar las siguientes horas al arreglo de Traumatología */

// Array de horas nuevas.
const nuevasHoras = [
    { hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' }
];

// Juntar ambos Arrays para crear uno nuevo.
const traumatologiaActualizada = traumatologia.concat(nuevasHoras);

// Impresión del Array actualizado en la consola.
console.log("El Array de Traumatología actualizado es el siguiente:");
console.log(traumatologiaActualizada);


/* 2. Eliminar el primer y último elemento del arreglo de Radiología */

// Clonar el array de Radiología, para no afectar al original.
const radiologiaActual = radiologia.slice(0)

// Eliminar el primer elemento del Array clonado.
radiologiaActual.shift()

//Eliminar el último elemento del Array clonado.
radiologiaActual.pop()

// Impresión del Array clonado actualizado en la consola.
console.log("Array Radiología sin el primer y último elemento:");
console.log(radiologiaActual);


/* 3. Imprimir en la página HTML, mediante document.write y/o las funciones que estime
conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo
separando por un guión cada dato desplegado y cada fila de información debe estar
separada por un párrafo */

// Extraer elemento del DOM.
const listaConsultaDental = document.getElementById("consultaDental")

// Hacer el listado con todos los pacientes de la consulta dental, recorriendo con For.
for (index = 0; index < dental.length; index++) {
    const item = dental[index];

    // Imprimir los objetos en la consola:
    console.log(item)

    // Anotar resultado en el HTML.
    listaConsultaDental.innerHTML += `<p>${dental[index].hora} - ${dental[index].paciente} - ${dental[index].rut} - ${dental[index].prevision}</p>`
}


/* 4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.
Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo */

const listadoTotal = document.getElementById("listadoTotal")

const listaCompleta = radiologia.concat(traumatologia, dental)
console.log("La lista completa de TODOS los pacientes atendidos en la consulta médica es la siguiente:")
console.log(listaCompleta)

// Anotar resultado en el HTML
for (index = 0; index < listaCompleta.length; index++) {
    listadoTotal.innerHTML += `<p>${listaCompleta[index].paciente}</p>`
}


/* 5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas
de Dental */

//  Utilizar método de filtro para los pacientes con Isapre.
const pacientesIsapre = dental.filter((paciente) => paciente.prevision == "ISAPRE");

// Impresión del Array actualizado en la consola.
console.log("Los pacientes de ISAPRE del listado de la Consulta Dental son los siguientes:");
console.log(pacientesIsapre);

// Extraer elemento del DOM.
const isapreHtml = document.getElementById("pacientesIsapre")

// Resultados en el archivo HTML.
isapreHtml.innerHTML = `
    <li>${pacientesIsapre[0].paciente} - ${pacientesIsapre[0].prevision}</li>
    <li>${pacientesIsapre[1].paciente} - ${pacientesIsapre[1].prevision}</li>
    <li>${pacientesIsapre[2].paciente} - ${pacientesIsapre[2].prevision}</li>
`


/* 6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas
de Traumatología */

//  Utilizar método de filtro para los pacientes con Fonasa.
const pacientesFonasa = traumatologia.filter((paciente) => paciente.prevision == "FONASA");

// Impresión del Array actualizado en la consola.
console.log("Los pacientes de FONASA del listado Traumatología son los siguientes:");
console.log(pacientesFonasa);

// Extraer elemento del DOM.
const fonasaHtml = document.getElementById("pacientesFonasa");

// Resultados en el archivo HTML.
fonasaHtml.innerHTML = `
<li>${pacientesFonasa[0].paciente} - ${pacientesFonasa[0].prevision}</li>
<li>${pacientesFonasa[1].paciente} - ${pacientesFonasa[1].prevision}</li>
`

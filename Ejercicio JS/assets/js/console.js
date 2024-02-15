//Manipulacón de variables

let htmlNota1 = document.getElementById("htmlNota1");
let htmlNota2 = document.getElementById("htmlNota2");
let htmlNota3 = document.getElementById("htmlNota3");
let htmlpromedio = document.getElementById("htmlpromedio");

let cssnota1 = document.getElementById("cssnota1");
let cssnota2 = document.getElementById("cssnota2");
let cssnota3 = document.getElementById("cssnota3");
let csspromedio = document.getElementById("csspromedio");

let jsnota1 = document.getElementById("jsnota1");
let jsnota2 = document.getElementById("jsnota2");
let jsnota3 = document.getElementById("jsnota3");
let jspromedio = document.getElementById("jspromedio");

//Variables HTML notas del usuario

let userhtmlNota1 = prompt("HTML - Nota1:");
let userhtmlNota2 = prompt("HTML - Nota2:");
let userhtmlNota3 = prompt("HTML - Nota3:");
let userhtmlpromedio = ((+userhtmlNota1) + parseFloat(userhtmlNota2) + Number(userhtmlNota3)) / 3

let usercssnota1 = prompt("CSS - Nota1:");
let usercssnota2 = prompt("CSS - Nota2:");
let usercssnota3 = prompt("CSS - Nota3:");
let usercsspromedio = (parseFloat(usercssnota1) + parseFloat(usercssnota2) + parseFloat(usercssnota3)) / 3

let userjsnota1 = prompt("JS - Nota1:");
let userjsnota2 = prompt("JS - Nota2:");
let userjsnota3 = prompt("JS - Nota3:");
let userjspromedio = (parseFloat(usercssnota1) + parseFloat(usercssnota2) + parseFloat(usercssnota3)) / 3


//Manipulacion del DOM
htmlNota1.textContent = userhtmlNota1
htmlNota2.textContent = userhtmlNota2
htmlNota3.textContent = userhtmlNota3
htmlpromedio.textContent = userhtmlpromedio.toFixed(2)

cssnota1.textContent = usercssnota1
cssnota2.textContent = usercssnota2
cssnota3.textContent = usercssnota3
csspromedio.textContent = usercsspromedio.toFixed(2)

jsnota1.textContent = userjsnota1
jsnota2.textContent = userjsnota2
jsnota3.textContent = userjsnota3
jspromedio.textContent = userjspromedio.toFixed(2)
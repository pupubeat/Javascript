// Creación de una función para el factorial:
let factorial = (a) => {
    let resultado = 1
    for (i = 1; i <= a; i++) {
        resultado *= i
    } return resultado
}

// Creación de una función, con motivo de solicitar al usuario un número entero entre 1 y 20.
let numUser = (num) => {
    let num = parseInt(prompt("Ingrese un número del 1 al 20."))

    // Validacióin si cumple con el rango indicado
    if (num >= 1 && num <= 20) {

        // Mostrar resultado de la obtención de las tablas de multiplicación.
        for (let i = 1; i <= num; i++) {
            console.log(`${i} x ${num} = ${i * num}`)
        }

        // Mostrar resultados del factorial.
        for (let i = 1; i <= num; i++) {
            console.log(`El factorial de ${i} es ${factorial(i).toLocaleString()}`)
        }
    } else {
        console.log("Número fuera del rango.")
    }
}

// Invocar la función para solicitar un número entero entre 1 y 20.
numUser()
/* Realizar operaciones con dos números. Pedir al usuario que ingrese dos números diferentes y mayores a cero.
Para ambos números, calcular lo siguiente:
● Suma
● Resta
● División
● Multiplicación
● Módulo */

// Los resultados de cada problema se verán en la consola del navegador.

// Solicitar 2 números al usuario, que sean diferentes y mayores a cero.
const n1 = parseInt(prompt("Ingrese el primer número"));
if (n1 <= 0) {
    alert("Por favor ingrese un número mayor a 0, vuelve a intentar")
}

const n2 = parseInt(prompt("Ingrese el segundo número"));
if (n2 <= 0) {
    alert("Por favor ingrese un número mayor a 0, vuelve a intentar")
}

// Suma de 2 números
const sumaNumeros = n1 + n2;
console.log(`La suma equivale a: ${sumaNumeros}`)

// Diferencia de 2 números
const restaNumeros = n1 - n2;
console.log(`La diferencia equivale a: ${restaNumeros}`)

// División entre 2 números
const divisionNumeros = n1 / n2;
console.log(`El cociente equivale a: ${divisionNumeros}`)

// Multiplicación entre 2 números
const productoNumeros = n1 * n2;
console.log(`El producto equivale a: ${productoNumeros}`)

// Módulo entre 2 números
const moduloNumeros = n1 % n2;
console.log(`El módulo equivale a: ${moduloNumeros}`)


/* Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que
la transforme a grados Kelvin y Fahrenheit. */

// Solicitar al usuario que ingrese la temperatura en grados Celsius.
const gradosC = prompt("Ingrese la temperatura en Celsius")

// Calcular la temperatura en Kelvin.
const gradosK = parseFloat(gradosC + 273.15)

// Resultado T°K a dos decimales
const kelvin = gradosK.toFixed(2)
console.log(`La temperatura en Kelvin corresponde a ${kelvin} °K`)

// Calcular la temperatura en Fahrenheit.
const gradosF = parseFloat(gradosC * 9 / 5) - 32

// Resultado T°F a dos decimales
const fahrenheit = gradosF.toFixed(2)
console.log(`La temperatura en Fahrenheit corresponde a ${fahrenheit} °F`)

/* Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día. */

// Solicitar al usuario una cantidad fija de días.
const dias = parseInt(prompt("Ingrese una cantidad de días"))

// Conversión de días a años.
const anos = Math.floor(dias / 365)

// Conversión de días a semanas.
const semanas = Math.floor((dias % 365) / 7)

// Cálculo días restantes.
const diasRestantes = Math.floor(dias % 7)

if (!isNaN(dias)) {
    console.log(`${dias} días corresponden a ${anos} años, ${semanas} semanas y ${diasRestantes} días.`)
} else {
    console.log("Por favor ingrese un número válido de días.")
}

/* Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden
a continuación. 

● La suma de todos los números.
● El promedio de los 5 números ingresados. */


// Solicitar 5 números diferentes al usuario.
const a1 = parseInt(prompt("Ingrese el primer número"));
const a2 = parseInt(prompt("Ingrese el segundo número"));
const a3 = parseInt(prompt("Ingrese el tercer número"));
const a4 = parseInt(prompt("Ingrese el cuarto número"));
const a5 = parseInt(prompt("Ingrese el quinto número"));

// Suma de todos los números solicitados.
const sumatoria = a1 + a2 + a3 + a4 + a5
console.log(`La suma de estos 5 números equivale a: ${sumatoria}`)

// Promedio de los 5 números ingresados.
const promedio = (sumatoria) / 5
console.log(`El promedio de estos 5 números equivale a: ${promedio}`)
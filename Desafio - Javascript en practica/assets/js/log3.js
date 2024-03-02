// Datos del archivo HTML.
const btnSuma = document.querySelector("#btn-sumar")
const btnResta = document.querySelector("#btn-restar")
const valor1 = document.querySelector("#valor1")
const valor2 = document.querySelector("#valor2")


// Función para hacer la suma.
btnSuma.addEventListener("click", () => {

    // Capturar valor para el primer número.
    const n1 = (valor1.value);

    // Validaciones: espacio en blanco y si no son números.
    if (!n1.trim()) {
        alert("Debe colocar un número.");
        return
    };

    if (n1 == NaN) {
        alert("Valor incorrecto.");
        return
    }

    // Capturar valor para el segundo número.
    const n2 = (valor2.value);

    if (!n2.trim()) {
        alert("Debe colocar un número.");
        return
    };

    if (n2 == NaN) {
        alert("Valor incorrecto.");
        return
    }

    // Resultado de la suma de ambos números.
    const resultadoSuma = parseInt(+n1 + +n2)
    console.log(`${resultadoSuma}`)
})

// Función para hacer la resta.
btnResta.addEventListener("click", () => {

    // Capturar valor para el primer número.
    const n1 = (valor1.value);

    // Validaciones: espacio en blanco y si no son números.
    if (!n1.trim()) {
        alert("Debe colocar un número.");
        return
    };

    if (n1 == NaN) {
        alert("Valor incorrecto.");
        return
    }

    // Capturar valor para el segundo número.
    const n2 = (valor2.value);

    if (!n2.trim()) {
        alert("Debe colocar un número.");
        return
    };

    if (n2 == NaN) {
        alert("Valor incorrecto.");
        return
    }

    // Resultado de la diferencia de ambos números.
    const resultadoResta = parseInt(+n1 - +n2)

    // Condición requerida: si la resta es negativa, hacer que el resultado sea cero.
    if (+n1 < +n2) {
        const resultadoCero = 0;
        console.log(`${resultadoCero}`)
    } else {
        console.log(`${resultadoResta}`)
    }

})
/* Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es
decir, cuántas veces deberá jugar contra la computadora. Por cada juego, se debe
mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta
dependiendo de las veces que haya indicado el usuario que desea jugar */

function cachipun(intentos) {
    let jugadaUsuario;

    // Solicitar al usuario que ingrese su elección.
    for (i = 0; i < intentos; i++) {
        jugadaUsuario = prompt("¿Piedra, papel o tijera?").toLowerCase();

        // Validar la jugada del usuario.
        if (jugadaUsuario === "piedra" || jugadaUsuario === "papel" || jugadaUsuario === "tijera") {

            // Jugada de la máquina.
            let numeroRandom = Math.floor(Math.random() * 3);
            switch (numeroRandom) {
                case 0:
                    jugadaMaquina = "piedra";
                    break;
                case 1:
                    jugadaMaquina = "papel";
                    break;
                case 2:
                    jugadaMaquina = "tijera";
                    break;
            }

            // Determinar al ganador del juego.
            determinarGanador(jugadaUsuario, jugadaMaquina)

            //Imprimir resultado en la consola.
            console.log(`Elegiste ${jugadaUsuario}.`)
            console.log(`La máquina eligió ${jugadaMaquina}.`)
        } else {
            // Condición si el usuario escoge una opción errónea.
            alert("Opción incorrecta. Por favor elija piedra, papel o tijera.");
            i--; // En caso de equivocarse, el i-- hace que no se pierda la jugada.
        }
    }
}

function determinarGanador(jugadaUsuario, jugadaMaquina) {
    // Si el usuario empata con la máquina.
    if (jugadaUsuario === jugadaMaquina) {
        return console.log("¡Empate!")
        // Si el usuario pierde contra la máquina.
    } else if (
        (jugadaUsuario === "piedra" && jugadaMaquina === "papel") ||
        (jugadaUsuario === "papel" && jugadaMaquina === "tijera") ||
        (jugadaUsuario === "tijera" && jugadaMaquina === "piedra")
    ) {
        return console.log("Lo sentimos, has perdido contra la máquina.")
        // Si el usuario gana la partida.
    } else
        return console.log("¡Felicitaciones, has ganado!")
}

// Preguntar al usuario cuántas veces quiere jugar.
let veces = parseInt(prompt("¿Cuántas veces quieres jugar?"));

// Invocar la función del juego Cachipún.
cachipun(veces);

import { Propietario } from "./propietario.js"

// Creación de clase Animal.
export class Animal extends Propietario {
    // Propiedades privadas.
    #tipo

    // Creación de la función constructora.
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono)
        this.#tipo = tipo
    }

    // Getter de #tipo
    get getTipo() {
        return `El tipo de animal es un ${this.#tipo}`
    }
}
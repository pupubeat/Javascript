import { Animal } from "./animal.js"

// Creación de clase Mascota.
export class Mascota extends Animal {
    // Propiedades privadas.
    #nombreMascota
    #enfermedad

    // Creación de la función constructora.
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this.#nombreMascota = nombreMascota
        this.#enfermedad = enfermedad
    }

    // Getter de #nombre
    get getNombreMascota() {
        return this.#nombreMascota
    }

    // Setter de #nombre
    set nombre(nuevoNombreMascota) {
        this.#nombreMascota = nuevoNombreMascota
    }

    // Getter de #enfermedad
    get getEnfermedad() {
        return this.#enfermedad
    }

    // Setter de #enfermedad
    set enfermedad(nuevaEnfermedad) {
        this.#enfermedad = nuevaEnfermedad
    }
}
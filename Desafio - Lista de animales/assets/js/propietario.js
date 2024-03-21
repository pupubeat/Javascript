// Creación de clase Propietario.
export class Propietario {
    // Propiedades privadas.
    #nombre
    #direccion
    #telefono

    // Creación de la función constructora.
    constructor(nombre, direccion, telefono) {
        this.#nombre = nombre
        this.#direccion = direccion
        this.#telefono = telefono
    }

    // Getter de #nombre
    get getNombre() {
        return this.#nombre
    }

    // Setter de #nombre
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }

    // Getter de #direccion
    get getDireccion() {
        return this.#direccion
    }

    // Getter de #telefono
    get getTelefono() {
        return this.#telefono
    }

    // Método que devuelve todos los datos del propietario.
    datosPropietario() {
        return `El nombre del dueño es ${this.getNombre}. El domicilio es ${this.getDireccion}, y el número de teléfono es ${this.getTelefono}.`
    }
}
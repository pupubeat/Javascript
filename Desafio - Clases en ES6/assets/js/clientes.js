export class Cliente {
    // Propiedades privadas.
    #nombre
    #impuesto

    // Función constructora.
    constructor(nombre, impuesto) {
        this.#nombre = nombre
        this.#impuesto = impuesto
    }

    // Getter de #nombre.
    get getNombre() {
        return this.#nombre
    }

    // Setter de #nombre.
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }

    // Método para calcular el impuesto anual del cliente.
    calculoImpuesto() {
        const impuestoAnual = (+this.#impuesto.getMontoBrutoAnual - +this.#impuesto.getDeducciones) * 0.21
        console.log(impuestoAnual)
        return impuestoAnual
    }
}
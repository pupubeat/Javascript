export class Impuestos {
    // Propiedades privadas
    #montoBrutoAnual
    #deducciones

    // Función constructora
    constructor(montoBrutoAnual, deducciones) {
        this.#montoBrutoAnual = montoBrutoAnual
        this.#deducciones = deducciones
    }

    // Getter de #montoBrutoAnual    
    get getMontoBrutoAnual() {
        return this.#montoBrutoAnual
    }

    // Setter de #montoBrutoAnual
    set montoBrutoAnual(nuevoMontoBrutoAnual) {
        this.#montoBrutoAnual = nuevoMontoBrutoAnual
    }

    // Getter de #deducciones
    get getDeducciones() {
        return this.#deducciones
    }

    // Setter de #deducciones
    set deducciones(nuevasdeduciones) {
        this.#deducciones = nuevasdeduciones
    }
}
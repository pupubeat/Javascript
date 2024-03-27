export class Animal {
    // Propiedades privadas.
    #nombre
    #edad
    #img
    #comentarios
    #sonido

    // Función constructora.
    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre
        this.#edad = edad
        this.#img = img
        this.#comentarios = comentarios
        this.#sonido = sonido
    }

    // Getter de #nombre
    get getNombre() {
        return this.#nombre
    }

    // Getter de #edad
    get getEdad() {
        return this.#edad
    }

    // Getter de #img
    get getImg() {
        return this.#img
    }

    // Setter de #comentarios
    set comentarios(nuevoComentario) {
        this.#comentarios = nuevoComentario
    }

    // Getter de #sonido
    get getSonido() {
        return this.#sonido
    }

}
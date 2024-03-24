import { Multimedia } from "./multimedia.js";
import { mediaDOM } from "./script.js";

// Creación instancia Reproductor, que herede de la clase Multimedia.
export class Reproductor extends Multimedia {
    // Propiedades privadas.
    #id

    // Función constructora.
    constructor(url, id) {
        super(url)
        this.#id = id
    }

    // Getter de #id
    get getId() {
        return this.#id
    }

    // Método para devolver la función pública creada en script.js
    playMultimedia() {
        mediaDOM.funcionPublica(this.getUrl, this.getId);
    }

    // Método para colocar tiempo customizable para que el video se active.
    setInicio(tiempo) {
        const iframeId = this.getId
        const url = iframeId.getAttribute('src');
        const urlConTiempo = `${url}?start=${tiempo}`;
        mediaDOM.funcionPublica(urlConTiempo, iframeId);
        return console.log(`Este método es para realizar un cambio en la URL del video.`)
    }
}
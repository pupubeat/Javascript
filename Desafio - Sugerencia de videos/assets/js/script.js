import { Multimedia } from "./multimedia.js";
import { Reproductor } from "./reproductor.js";

// Extraer elementos del DOM.
const srcMusica = document.querySelector("#srcMusica")
const srcPelicula = document.querySelector("#srcPelicula")
const srcSerie = document.querySelector("#srcSerie")

// Función IIFE.
export const mediaDOM = (() => {
    const funcionPrivada = (valor, atributo, elemento) => {
        elemento.src = valor
    }

    return {
        funcionPublica(valor, elemento) {
            funcionPrivada(valor, "src", elemento)
        }
    }

})();

// Creación de objetos a través de la instancia Reproductor
const musica = new Reproductor("https://www.youtube.com/embed/CByOHSkCyx4", srcMusica)
const pelicula = new Reproductor("https://www.youtube.com/embed/J_zFj7sRz-o", srcPelicula)
const serie = new Reproductor("https://www.youtube.com/embed/gNdka5qQRnc", srcSerie)

// Invocar método playMultimedia() para los objetos creados. 
musica.playMultimedia()
pelicula.playMultimedia()
serie.playMultimedia()

// Invocar método setInicio() para los objetos creados. 
musica.setInicio(5)
pelicula.setInicio(5)
serie.setInicio(5)


// Controller que reciba y almacene una imagen en una carpeta pública del servidor.
const addImg = async (req, res) => {
    try {
        const { } = req.files;
        const { } = req.body;
        const name = `${nombre} - ${artista} (${album})`;
    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false })
    }
}

// Controller que reciba como parámetro el nombre de una imagen y la elimine de la carpeta en donde están siendo alojadas las imágenes.
const removeImg = async (req, res) => {
    try {
        const { nombre } = req.params

    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false })
    }
}

export const imgControllers = {
    addImg,
    removeImg
}
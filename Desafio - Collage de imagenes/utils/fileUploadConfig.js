import fileUpload from 'express-fileupload'

// Definir que el límite para la carga de imágenes es de 5MB.
// Responder con un mensaje indicando que se sobrepasó el límite especificado. 

const fileUploadConfig = fileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,
    responseOnLimit: "La imagen no puede exceder los 5mb.",
})

export default fileUploadConfig
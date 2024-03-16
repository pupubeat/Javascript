// Extraer elementos del DOM 
const listado = document.getElementById("listaPacientes")

// Funciones o plantillas para Consultorio y Paciente.

class Consultorio {
    // Propiedades privadas.
    #nombre;
    #paciente;

    // Función constructora de la clase Consultorio.
    constructor(nombre) {
        this.#nombre = nombre;
        this.#paciente = []
    }

    get getPaciente() {
        return this.#paciente
    }

    // Registrar pacientes en consultorio.
    registrarUsuarios(nuevoPaciente) {
        this.#paciente.push(nuevoPaciente)
        console.log(this.#paciente)
    }

    // Buscar los datos de los usuarios por nombre.
    buscarUsuarios(nombrePaciente) {
        const pacienteEncontrado = this.#paciente.find((usuario) => usuario.getNombre === nombrePaciente)
        console.log(pacienteEncontrado)
    }

    // Mostrar todos los datos de los usuarios registrados.
    mostrarUsuarios() {
        this.#paciente.forEach((item) => {
            listado.innerHTML += `
            <li>${item.getNombre} - ${item.getEdad} - ${item.getRut} - ${item.getDiagnostico}</li>
            `
        })
    }
}

class Paciente {
    // Propiedades privadas.
    #nombre;
    #edad;
    #rut;
    #diagnostico;

    // Función constructora de la clase Paciente.
    constructor(nombre, edad, rut, diagnostico) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#rut = rut;
        this.#diagnostico = diagnostico
    }

    // Getter de #nombre
    get getNombre() {
        return this.#nombre
    }

    // Getter de #edad
    get getEdad() {
        return this.#edad
    }

    // Getter de #rut
    get getRut() {
        return this.#rut
    }

    // Getter de #diagnostico
    get getDiagnostico() {
        return this.#diagnostico
    }
}

// Crear objetos (pacientes).
const paciente1 = new Paciente("José Godoy", "50 años", "12345678-9", "Diabetes")
const paciente2 = new Paciente("Margarita Castro", "82 años", "7654678-1", "Demencia senil")
const paciente3 = new Paciente("Yolanda Cortés", "44 años", "12654876-3", "Infección urinaria")

// Crear objetos (consultorio).
const consultorio1 = new Consultorio("San Joaquín")

// Registrar pacientes.
consultorio1.registrarUsuarios(paciente1)
consultorio1.registrarUsuarios(paciente2)
consultorio1.registrarUsuarios(paciente3)

// Buscar pacientes registrados por nombre.
consultorio1.buscarUsuarios("José Godoy")
consultorio1.buscarUsuarios("Margarita Castro")
consultorio1.buscarUsuarios("Yolanda Cortés")

// Colocar en listado todos los pacientes registrados.
consultorio1.mostrarUsuarios()
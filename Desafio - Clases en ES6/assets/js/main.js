import { Cliente } from "./clientes.js";
import { Impuestos } from "./impuestos.js";

// Creación de objetos a partir de la instancia Impuestos.
const impuestos1 = new Impuestos(4229990, 126900)
const impuestos2 = new Impuestos(3416530, 102540)
const impuestos3 = new Impuestos(2277690, 85440)

// Creación de objetos a partir de la instancia Cliente.
const cliente1 = new Cliente("José Godoy", impuestos1)
const cliente2 = new Cliente("Margarita Castro", impuestos2)
const cliente3 = new Cliente("Yolanda Cortés", impuestos3)

// Cálculo de impuestos anuales para cada cliente creado.
cliente1.calculoImpuesto(impuestos1)
cliente2.calculoImpuesto(impuestos2)
cliente3.calculoImpuesto(impuestos3)
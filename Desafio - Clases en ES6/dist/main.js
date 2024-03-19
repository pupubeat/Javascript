"use strict";

var _clientes = require("./clientes.js");
var _impuestos = require("./impuestos.js");
// Creación de objetos a partir de la instancia Impuestos.
var impuestos1 = new _impuestos.Impuestos(4229990, 126900);
var impuestos2 = new _impuestos.Impuestos(3416530, 102540);
var impuestos3 = new _impuestos.Impuestos(2277690, 85440);

// Creación de objetos a partir de la instancia Cliente.
var cliente1 = new _clientes.Cliente("José Godoy", impuestos1);
var cliente2 = new _clientes.Cliente("Margarita Castro", impuestos2);
var cliente3 = new _clientes.Cliente("Yolanda Cortés", impuestos3);

// Cálculo de impuestos anuales para cada cliente creado.
cliente1.calculoImpuesto(impuestos1);
cliente2.calculoImpuesto(impuestos2);
cliente3.calculoImpuesto(impuestos3);
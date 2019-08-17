"use strict";
exports.__esModule = true;
var base_escola_1 = require("./base-escola");
/* let ronqui = new Alu("Rafael Ronqui")
ronqui.exibir() */
var pessoa = new base_escola_1.Pess(68, 1.74);
var imc = pessoa.imc();
pessoa.classificar(imc);

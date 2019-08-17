import { Alu } from "./base-escola";
import { Pess } from "./base-escola";

/* let ronqui = new Alu("Rafael Ronqui")
ronqui.exibir() */

let pessoa = new Pess(68, 1.74)
let imc :number = pessoa.imc()

pessoa.classificar(imc)

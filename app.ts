import { Alu } from "./base-escola";
import { Pess } from "./base-escola";
import { Viag } from "./base-escola";

/* let ronqui = new Alu("Rafael Ronqui")
ronqui.exibir() */

/* let pessoa = new Pess(68, 1.74)
pessoa.classificar() */

let veiculo = new Viag(2,100,10)

console.log(`${veiculo.obterDistancia()} KM`)
console.log(`${veiculo.obterConsumo()} L`)

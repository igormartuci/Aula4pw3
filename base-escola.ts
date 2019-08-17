class Aluno {

    constructor(public nome:string){}

    exibir(){
        console.log("Nome: " + this.nome)
    }

}

class Pessoa {
    constructor(public peso:number, public altura:number) {}

    imc(){
        return this.peso / (this.altura * this.altura)
    }

   /* classificar(imc:number){
        if (imc < 18.5) {
            console.log("IMC: " + imc + " // Situação: Abaixo do Peso")
        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log("IMC: " + imc + " // Situação: Peso Normal")
        } else if (imc >= 25 && imc <= 29.9) {
            console.log("IMC: " + imc + " // Situação: Pré-Obesidade")
        } else if (imc >= 30 && imc <= 34.9) {
            console.log("IMC: " + imc + " // Situação: Obesidade Grau I")
        } else if (imc >= 35 && imc <= 39.9) {
            console.log("IMC: " + imc + " // Situação: Obesidade Grau II")
        } else {
            console.log("IMC: " + imc + " // Situação: Obesidade Grau III")
        }
    } */

    classificar(){
        if (this.imc() < 18.5) {
            console.log(`IMC: ${this.imc().toFixed(2)} // Situação: Abaixo do Peso`)
        } else if (this.imc() >= 18.5 && this.imc() <= 24.9) {
            console.log(`IMC: ${this.imc().toFixed(2)} // Situação: Peso Normal`)
        } else if (this.imc() >= 25 && this.imc() <= 29.9) {
            console.log(`IMC: ${this.imc().toFixed(2)} // Situação: Pré-Obesidade`)
        } else if (this.imc() >= 30 && this.imc() <= 34.9) {
            console.log(`IMC: ${this.imc().toFixed(2)} // Situação: Obesidade Grau I`)
        } else if (this.imc() >= 35 && this.imc() <= 39.9) {
            console.log(`IMC: ${this.imc().toFixed(2)} // Situação: Obesidade Grau II`)
        } else {
            console.log(`IMC: ${this.imc().toFixed(2)} // Situação: Obesidade Grau III`)
        }
    } 
}

export {Aluno as Alu, Pessoa as Pess}
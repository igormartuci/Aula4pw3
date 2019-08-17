"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
    }
    Aluno.prototype.exibir = function () {
        console.log("Nome: " + this.nome);
    };
    return Aluno;
}());
exports.Alu = Aluno;
var Pessoa = /** @class */ (function () {
    function Pessoa(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }
    Pessoa.prototype.imc = function () {
        return this.peso / (this.altura * this.altura);
    };
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
    Pessoa.prototype.classificar = function () {
        if (this.imc() < 18.5) {
            console.log("IMC: " + this.imc() + " // Situa\u00E7\u00E3o: Abaixo do Peso");
        }
        else if (this.imc() >= 18.5 && this.imc() <= 24.9) {
            console.log("IMC: " + this.imc() + " // Situa\u00E7\u00E3o: Peso Normal");
        }
        else if (this.imc() >= 25 && this.imc() <= 29.9) {
            console.log("IMC: " + this.imc() + " // Situa\u00E7\u00E3o: Pr\u00E9-Obesidade");
        }
        else if (this.imc() >= 30 && this.imc() <= 34.9) {
            console.log("IMC: " + this.imc() + " // Situa\u00E7\u00E3o: Obesidade Grau I");
        }
        else if (this.imc() >= 35 && this.imc() <= 39.9) {
            console.log("IMC: " + this.imc() + " // Situa\u00E7\u00E3o: Obesidade Grau II");
        }
        else {
            console.log("IMC: " + this.imc() + " // Situa\u00E7\u00E3o: Obesidade Grau III");
        }
    };
    return Pessoa;
}());
exports.Pess = Pessoa;

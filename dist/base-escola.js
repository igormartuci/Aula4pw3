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
    Pessoa.prototype.classificar = function (imc) {
        if (imc < 18.5) {
            console.log("IMC: " + imc + " // Situação: Abaixo do Peso");
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            console.log("IMC: " + imc + " // Situação: Peso Normal");
        }
        else if (imc >= 25 && imc <= 29.9) {
            console.log("IMC: " + imc + " // Situação: Pré-Obesidade");
        }
        else if (imc >= 30 && imc <= 34.9) {
            console.log("IMC: " + imc + " // Situação: Obesidade Grau I");
        }
        else if (imc >= 35 && imc <= 39.9) {
            console.log("IMC: " + imc + " // Situação: Obesidade Grau II");
        }
        else {
            console.log("IMC: " + imc + " // Situação: Obesidade Grau III");
        }
    };
    return Pessoa;
}());
exports.Pess = Pessoa;

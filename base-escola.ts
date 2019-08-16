class Aluno {

    constructor(public nome:string){}

    exibir(){
        console.log("Nome: " + this.nome)
    }

}

export {Aluno as Alu}
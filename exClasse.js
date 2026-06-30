// Exemplo DEPOIS de aprender classes - Aproveitamento de Código!

class Estudante {
    constructor(nome, matricula, curso) {
        this.nome = nome
        this.matricula = matricula
        this.curso = curso
    }

    exibirDadosAluno() {
        console.log(`Estudante ${this.nome}, de matrícula ${this.matricula}, matriculado no curso ${this.curso}`);
    }
}

//Instanciando a Classe
const estudante = new Estudante("José da Silva", "2026000", "Javascript Backend");
const estudante1 = new Estudante("João Silva", "2026001", "Python Backend");
const estudante2 = new Estudante("Maria Souza", "2026002", "Java Backend");

//Usando a Classe
estudante.exibirDadosAluno();
estudante1.exibirDadosAluno();
estudante2.exibirDadosAluno();
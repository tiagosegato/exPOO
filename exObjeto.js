// Exemplo ANTES de aprender classes - Código repetitivo!

const estudante = {
    nome: "José da Silva",
    matricula: "2026000",
    curso: "Javascript Backend",

    exibirDadosAluno: function () {
        console.log(`Estudante ${this.nome}, de matrícula ${this.matricula}, matriculado no curso ${this.curso}`);
    }
};

const estudante1 = {
    nome: "João Silva",
    matricula: "2026001",
    curso: "Python Backend",

    exibirDadosAluno: function () {
        console.log(`Estudante ${this.nome}, de matrícula ${this.matricula}, matriculado no curso ${this.curso}`);
    }
};

const estudante2 = {
    nome: "Maria Souza",
    matricula: "2026002",
    curso: "Java Backend",

    exibirDadosAluno: function () {
        console.log(`Estudante ${this.nome}, de matrícula ${this.matricula}, matriculado no curso ${this.curso}`);
    }
};

estudante.exibirDadosAluno();
estudante1.exibirDadosAluno();
estudante2.exibirDadosAluno();

// Problema: Como criar 100 estudantes sem repetir código?
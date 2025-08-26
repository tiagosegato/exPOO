//COMPOSIÇÃO (Junto com Nota)
/*
 A classe 'Parte' (Nota), não deve ser instanciada diretamente pelo "mundo exterior".
 Sua existência está atrelada à classe 'Matricula'.

A classe 'Todo' (Matrícula), gerencia o ciclo de vida de suas 'Partes' (Notas).
*/

//import { Estudante } from "./Estudante.js";
//import { Disciplina } from "./Disciplina.js";
import { Nota } from "./Nota.js"

// Classes de apoio já existentes (Não vou importar pois contém elementos desnecessários, como nota[])
class Estudante {
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
    }
}

class Disciplina {
    constructor(nome, codigo) {
        this.nome = nome;
        this.codigo = codigo;
    }
}

class Matricula {
    constructor(estudante, disciplina) {
        this.estudante = estudante;
        this.disciplina = disciplina;
        this.dataMatricula = new Date();
        this.notas = []; // O array que conterá as partes (objetos Nota)
    }

    // Este é o método chave da composição. A Matrícula cria suas próprias notas.
    // O mundo exterior não cria uma Nota e a passa para cá. Ele pede para a Matrícula criar.
    adicionarNota(valor, descricao) {
        const novaNota = new Nota(valor, descricao); // A 'Parte' é criada aqui dentro
        this.notas.push(novaNota);
        console.log(`Nota "${descricao}" (${valor}) adicionada para ${this.estudante.nome} 
            em ${this.disciplina.nome}.`);
    }

    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }
        const somaDasNotas = this.notas.reduce((acc, nota) => acc + nota.valor, 0);
        return (somaDasNotas / this.notas.length).toFixed(2);
    }
}

/*
// Criar as entidades independentes
const estudanteJoao = new Estudante("João Silva", "2023001");
const disciplinaPOO = new Disciplina("Programação Orientada a Objetos", "POO101");

// Criar o objeto 'Todo', que conecta as entidades independentes
const matriculaJoaoEmPOO = new Matricula(estudanteJoao, disciplinaPOO);

// O objeto 'Todo' (Matricula) cria e gerencia suas 'Partes' (Notas)
matriculaJoaoEmPOO.adicionarNota(8.5, "Prova 1");
matriculaJoaoEmPOO.adicionarNota(9.0, "Trabalho Final");

// Se o objeto 'matriculaJoaoEmPOO' for excluído, as notas que ele contém
// são perdidas junto, pois não há outra referência a elas. Elas são "parte de".

console.log("\n--- Detalhes da Matrícula ---");
console.log(matriculaJoaoEmPOO);
console.log(`Média final de ${estudanteJoao.nome}: ${matriculaJoaoEmPOO.calcularMedia()}`);
*/
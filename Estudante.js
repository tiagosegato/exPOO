import { Disciplina } from "./Disciplina";
import { Nota } from "./Nota";

// A "planta" para todos os estudantes
export class Estudante {
    // O construtor é o primeiro método a ser executado
    constructor(nome, matricula, dataNascimento) {
        // 'this' se refere à instância atual do objeto que está sendo criado
        this.nome = nome;
        this.matricula = matricula;
        this.dataNascimento = dataNascimento;
        this.notas = []; // Um estudante começa sem notas
    }

    // Um método é uma função associada à classe
    adicionarNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
            console.log(`Nota ${nota} adicionada para ${this.nome}.`);
        } else {
            console.log("Nota inválida. Deve ser entre 0 e 10.");
        }
    }

    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return (soma / this.notas.length).toFixed(2);
    }
}

/*
// Criando instâncias (objetos) a partir da classe
const joao = new Estudante("João Silva", "2023001", "2005-03-15");
const maria = new Estudante("Maria Souza", "2023002", "2006-07-20");

console.log(joao.nome);
console.log(maria.matricula);

joao.adicionarNota(8);
joao.adicionarNota(9.5);
maria.adicionarNota(10);
maria.adicionarNota(7);

console.log(`Notas do João: ${joao.notas}`);
console.log(`Média da Maria: ${maria.calcularMedia()}`);
console.log(`Média do João: ${joao.calcularMedia()}`);
*/

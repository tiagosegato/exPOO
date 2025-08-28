// TRATAMENTO DE ERROS E EXCEÇÕES

// - throw:
// Lança uma exceção. Interrompe imediatamente a execução do código naquele ponto 
// e pula para o bloco catch mais próximo(caso exista). 
// Permite tratar o erro, mostrar mensagens específicas, evitar comportamentos inesperados 
// e ter um fluxo de controle adequado.

// E o console.log ?
// Só exibe uma mensagem no console. Não para a execução do código, nem sinaliza para quem 
// está usando a função que aconteceu um erro(o código continua rodando normalmente).

// TypeError indica um erro relacionado ao tipo de dado incorreto 
// (por exemplo, passar um objeto em vez de uma instância esperada), 
// enquanto Error é a classe genérica para exceções em JavaScript, 
// utilizada para indicar erros em geral sem uma categoria específica.


// EXEMPLO
class Estudante {
    constructor(nome, dataNascimento, matricula, codigoEstudante) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.matricula = matricula;
        this.codigoEstudante = codigoEstudante;
    }
}

class Disciplina {
    #nome;
    #estudantesMatriculados;

    constructor(nome) {
        this.#nome = nome;
        this.#estudantesMatriculados = [];
    }

    matricularEstudante(estudante) {
        if (!(estudante instanceof Estudante)) {
            // Lançando um erro em vez de só logar no console
            throw new TypeError("Parâmetro inválido. Esperado uma instância de Estudante.");
        }
        if (this.#estudantesMatriculados.length >= 50) {
            throw new Error(`Matrícula não permitida. Turma de ${this.#nome} está lotada.`);
        }
        this.#estudantesMatriculados.push(estudante);
        console.log(`Estudante ${estudante.nome} matriculado com sucesso.`);
    }
}

// --- Usando o código ---
const poo = new Disciplina("Programação Orientada a Objetos");
const joana = new Estudante("Joana", "2005-05-05", "555", "E2023005");

try { // Bloco onde você coloca o código que pode gerar exceções
    poo.matricularEstudante(joana); //Aqui dá certo!!!
    poo.matricularEstudante({ nome: "Objeto qualquer" }); // Isso vai falhar
    console.log("Este log não será exibido.");
} catch (error) { // Bloco que captura e trata o erro caso algo dê errado dentro do try
    console.error("--- OCORREU UM ERRO ---");
    console.error(`Tipo do Erro: ${error.name}`);
    console.error(`Mensagem: ${error.message}`);
    // Poderíamos tomar uma ação, como notificar o usuário.
} finally { // bloco que sempre é executado após o try/catch, independentemente se ocorreu erro ou não; geralmente usado para limpeza ou encerramento
    console.log("--- Bloco de matrícula finalizado. ---");
}

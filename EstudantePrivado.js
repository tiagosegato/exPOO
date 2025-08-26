//Encapsulamento: Protegendo seus Dados
//Agrupar dados (atributos) e os métodos que operam nesses dados dentro de um único objeto.
//Esconder os detalhes internos de implementação e proteger a integridade dos dados.
//Exemplo: Não queremos que alguém possa atribuir uma nota negativa a um aluno 
// (joao.notas.push(-5)). O acesso deve ser controlado.

//Campos Privados: sintaxe #nomeDoAtributo. Introduzido no ES2022.
//Um atributo declarado com # só pode ser acessado ou modificado por métodos da própria classe.

//Getters e Setters:
//Métodos públicos que permitem ler (get) e escrever (set) em atributos privados de forma controlada.
//Permitem adicionar validações ou lógica de negócio ao acessar um atributo.

class EstudantePrivado {
    // Declaração de campos privados no topo da classe
    #nome;
    #matricula;
    #notas;

    constructor(nome, matricula) {
        // Agora usamos o '#' para nos referirmos aos campos privados
        this.#nome = nome;
        this.#matricula = matricula;
        this.#notas = [];
    }

    //Getters permitem apenas a leitura
    get nome() {
        return this.#nome
    }

    get matricula() {
        return this.#matricula
    }

    get notas() {
        return [...this.#notas]
        // Retorna uma cópia do array usando a Sintaxe de Espalhamento (...)
        //"pega" todos os elementos de um array (ou propriedades de um objeto) e "espalha" em um novo local.
    }

    // Setter para o nome (permite a alteração direta do valor)
    set nome(novoNome) {
        // Este setter simplesmente atribui o novo valor ao atributo privado.
        this.#nome = novoNome;
    }

    // Métodos públicos que manipulam o array privado
    adicionarNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this.#notas.push(nota);
        } else {
            console.log(`Erro: Nota ${nota} é inválida.`);
        }
    }

    calcularMedia() {
        if (this.#notas.length === 0) return 0;
        const soma = this.#notas.reduce((acc, n) => acc + n, 0);
        return (soma / this.#notas.length).toFixed(2);
    }
}

/*
const joao = new EstudantePrivado("João Encapsulado da Silva", "E2023001");

// Acesso direto agora causa um erro!
// console.log(joao.#nome); // SyntaxError: Private field '#nome' must be declared in an enclosing class
// joao.#notas.push(20); // Erro!

// Acesso controlado via getters e métodos públicos
console.log(joao.nome); // Usa o getter 'get nome()'
joao.adicionarNota(9);
joao.adicionarNota(8);
//joao.adicionarNota(-3); // Mostra o erro

console.log(joao.notas); // Usa o getter 'get notas()', obtendo uma cópia segura
console.log("Média do João:", joao.calcularMedia());

console.log("\n--- Testando o Setter de Nome ---");
console.log(`Nome atual: ${joao.nome}`);

// A sintaxe é como se estivéssemos atribuindo a uma propriedade normal, mas o JS chama o 'set nome()'
joao.nome = "João da Silva Sauro";
console.log(`Nome novo: ${joao.nome}`); // O nome foi alterado com sucesso
*/
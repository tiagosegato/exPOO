/*
EXERCÍCIO
Crie uma nova classe Funcionario que herda de Pessoa.
A classe Funcionario deve ter, além dos atributos de Pessoa (nome, dataNascimento, cpf), 
um cargo e um salario. 
O salário deve ser um atributo privado.
Crie um getter para o salário.
Crie um método promover(novoCargo, novoSalario) que atualiza o cargo e o salário 
(o setter implícito).
*/

class Pessoa {
    #cpf; // Atributo privado

    constructor(nome, dataNascimento, cpf) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }
}

class Funcionario extends Pessoa {
    #salario; // Salário como atributo privado

    constructor(nome, dataNascimento, cpf, cargo, salario) {
        // Chama o construtor da classe pai (Pessoa) para inicializar nome, dataNascimento e cpf
        super(nome, dataNascimento, cpf);

        // Adiciona os atributos específicos de Funcionario
        this.cargo = cargo;
        this.#salario = salario;
    }


    //Getter para o salário.
    get salario() {
        return this.#salario;
    }

    //promover(novoCargo, novoSalario) que atualiza o cargo e o salário.
    promover(novoCargo, novoSalario) {
        // Este método atua como um "setter implícito", pois permite a alteração
        // controlada dos atributos cargo e #salario.        
        this.cargo = novoCargo;
        this.#salario = novoSalario;
        console.log(`${this.nome}, ${this.cpf} foi promovido(a) para ${this.cargo} com sucesso!`);
    }
}

/*
const ana = new Funcionario("Ana Pereira", "1990-05-20", "123.456.789-00", "Analista Jr.", 4000.00);

console.log(`Cargo atual: ${ana.cargo}`);

// Acessando o salário através do getter
console.log(`Salário inicial: R$ ${ana.salario}`);

// Tentativa de acesso direto ao atributo privado (irá gerar um erro se descomentado)
//console.log(ana.#salario); // SyntaxError: Private field '#salario' must be declared in an enclosing class

console.log("\n--- Promovendo a funcionária ---");
// Usando o método promover para atualizar cargo e salário
ana.promover("Analista Pleno", 5500.00);

console.log(`Novo cargo: ${ana.cargo}`);
console.log(`Novo salário: R$ ${ana.salario}`); // Usando o getter novamente para ver o valor atualizado
*/
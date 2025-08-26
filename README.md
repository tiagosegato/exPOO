Exemplos Práticos de POO utilizando Javascript.

Dica, para usar as classes criadas como módulos uma das outras (import e export) é necessário configurar o projeto como um module.
Para isso crie um arquivo de configurações package.json dentro da pasta do projeto por meio do comando: npm init -y.
Em seguida adicione a seguinte informação depois do item main (linha 4 ou 5): "type": "module",.
Outra opção é salvar todos os arquivos (módulos) com a extensão .mjs.

A ordem sugerida dos exmplos é:

1 - Estudante.js
- Conceitos básicos de criação de uma Classe em Javascript
- Entender a sintaxe class do ES6.
- Diferenciar classe (planta) de objeto (instância).
- Aprender a definir atributos (propriedades) e métodos.
- Compreender o papel do constructor e da palavra-chave this.

2 - Professor.js
- Exercício prático para aplicação dos conceitos de criação de Classes em JS

3 - Estatico.js
- Exemplos básicos da criação e utilização de atributos e métodos estáticos

4 - Disciplina.js
- Exemplo de Agregação em Javascript
- Entender como objetos podem se relacionar.
- Uma relação "tem um" onde os objetos têm ciclos de vida independentes.
- Exemplo: Uma Disciplina tem um Professor. Se a disciplina for extinta, o professor continua existindo na escola.
- Implementação: Um objeto guarda a referência a outro objeto em um de seus atributos.
- Cria a classe Disciplina e faz ela se relacionar com Professor e Estudante.

5 - Turma.js
- Exercício prático para aplicação dos conceitos de Agregação em JS

6 - Nota.js
- Exemplo de Composição em Javascript
- Classe auxiliar para o exemplo de Agregação entre Matrícula e Nota
  
7 - Matricula.js
- Exemplo de Composição em Javascript
- Uma relação "parte-de" mais forte, onde o ciclo de vida do objeto "parte" depende do objeto "todo".
- Podemos modelar Nota como uma composição de Matrícula. Se a matrícula é cancelada, as notas daquela matrícula perdem o sentido. A Nota não pode existir sem a Matrícula. Esta é a essência da Composição.
- A diferença é mais conceitual do que de implementação em JS, mas importante para o design.

8 - EstudantePrivado.js
- Exemplo de Encapsulamento em Javascript
- Aprender a usar campos privados (#) no JavaScript.
- Implementar Getters e Setters para controlar o acesso aos atributos.

9 - PessoaEstudanteProfessor.js
- Exemplo de Herança com Polimorfismo em Javascript
- Criar hierarquias de classes usando extends.
- Compreender e utilizar a função super() para chamar o construtor da classe pai.
- Reaproveitar e sobrescrever métodos da classe pai (Polimorfismo).

10 - PessoaFuncionario.js
- Exercício prático para aplicação dos conceitos de Herança e Polimorfismo em JS

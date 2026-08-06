Exemplos Práticos de POO utilizando Javascript.

Dica, para usar as classes criadas como módulos uma das outras (import e export) é necessário configurar o projeto como um module.
Para isso crie um arquivo de configurações package.json dentro da pasta do projeto por meio do comando: npm init -y.
Em seguida adicione a seguinte informação depois do item main (linha 4 ou 5): "type": "module",.
Outra opção é salvar todos os arquivos (módulos) com a extensão .mjs.

A ordem sugerida dos exemplos é:

1 - exObjeto.js

- Exemplo ANTES de aprender classes: mesma estrutura de dados repetida em vários objetos literais.
- Evidencia o problema que a Orientação a Objetos resolve (código repetitivo).

2 - exClasse.js

- Exemplo DEPOIS de aprender classes: a mesma situação resolvida com a sintaxe class do ES6.
- Mostra o ganho de reaproveitamento de código antes de aprofundar o conceito.

3 - Estudante.js

- Conceitos básicos de criação de uma Classe em Javascript
- Entender a sintaxe class do ES6.
- Diferenciar classe (planta) de objeto (instância).
- Aprender a definir atributos (propriedades) e métodos.
- Compreender o papel do constructor e da palavra-chave this.

4 - Professor.js

- Exercício prático para aplicação dos conceitos de criação de Classes em JS

5 - Estaticos.js

- Exemplos básicos da criação e utilização de atributos e métodos estáticos

6 - Disciplina.js

- Exemplo de Agregação em Javascript
- Entender como objetos podem se relacionar.
- Uma relação "tem um" onde os objetos têm ciclos de vida independentes.
- Exemplo: Uma Disciplina tem um Professor. Se a disciplina for extinta, o professor continua existindo na escola.
- Implementação: Um objeto guarda a referência a outro objeto em um de seus atributos.
- Cria a classe Disciplina e faz ela se relacionar com Professor e Estudante.

7 - Turma.js

- Exercício prático para aplicação dos conceitos de Agregação em JS

8 - Nota.js

- Exemplo de Composição em Javascript
- Classe auxiliar para o exemplo de Agregação entre Matrícula e Nota

9 - Matricula.js

- Exemplo de Composição em Javascript
- Uma relação "parte-de" mais forte, onde o ciclo de vida do objeto "parte" depende do objeto "todo".
- Podemos modelar Nota como uma composição de Matrícula. Se a matrícula é cancelada, as notas daquela matrícula perdem o sentido. A Nota não pode existir sem a Matrícula. Esta é a essência da Composição.
- A diferença é mais conceitual do que de implementação em JS, mas importante para o design.

10 - Avaliacao.js

- Classe auxiliar simples (valor e peso), utilizada como parte de uma Composição.

11 - Boletim.js

- Exercício prático de Composição em Javascript
- Aplica Avaliacao.js dentro de um Boletim, calculando a média ponderada das avaliações lançadas.

12 - EstudantePrivado.js

- Exemplo de Encapsulamento em Javascript
- Aprender a usar campos privados (#) no JavaScript.
- Implementar Getters e Setters para controlar o acesso aos atributos.

13 - ContaBancaria.js

- Exercício prático de Encapsulamento em Javascript
- Atributos privados (#titular, #saldo) com getters/setters e métodos depositar/sacar validando as regras de negócio.

14 - PessoaEstudanteProfessor.js

- Exemplo de Herança com Polimorfismo em Javascript
- Criar hierarquias de classes usando extends.
- Compreender e utilizar a função super() para chamar o construtor da classe pai.
- Reaproveitar e sobrescrever métodos da classe pai (Polimorfismo).

15 - PessoaFuncionario.js

- Exercício prático para aplicação dos conceitos de Herança e Polimorfismo em JS

16 - Abstratas.js

- Exemplo de Classes abstratas
- Criar uma classe modelo que não pode ser instanciada com um método abstrato
- E criação da classe que implementa essa abstração

17 - tratamentoErros.js

- Tratamento de Erros e Exceções em Javascript
- Uso de throw, try/catch/finally e diferenciação entre TypeError e Error genérico.
- Exemplo prático de lançamento de erros customizados dentro de métodos de validação.
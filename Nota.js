//COMPOSIÇÃO
/*
- Composição (Relação "Parte-de" forte): Uma Matrícula é composta por Notas. 
Uma Nota de valor "8.5" não existe no vácuo; ela só faz sentido como parte de uma matrícula. 
Se a Matrícula de um aluno for cancelada (por exemplo, ele trancou a disciplina), 
todas as Notas associadas a aquela matrícula perdem o sentido e devem ser eliminadas junto com ela. 
O ciclo de vida da Nota é dependente do ciclo de vida da Matrícula.
- A Nota não pode existir sem a Matrícula. Esta é a essência da Composição.
Exemplo em Código:
Para implementar isso, a classe "todo" (Matricula) é responsável por criar e gerenciar suas "partes" (Nota). 
As notas não são criadas fora e depois "adicionadas"; elas são criadas pela própria matrícula.
*/

export class Nota {
    constructor(valor, descricao) {
        this.valor = valor
        this.descricao = descricao
    }
}
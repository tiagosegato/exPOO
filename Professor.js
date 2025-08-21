/* 
EXERCÍCIO
Criar a classe Professor.Ela deve ter um constructor que aceite nome e idFuncional.
A classe Professor também deve ter um atributo disciplinas, inicializado como um array vazio.
Adicionar um método atribuirDisciplina(nomeDisciplina) que adiciona uma string ao array disciplinas.
Instanciar dois professores e atribuir duas disciplinas a eles.
*/

export class Professor {
    constructor(nome, idFuncional) {
        this.nome = nome
        this.idFuncional = idFuncional
        this.disciplinas = []
    }

    atribuirDisciplinas(nomeDisciplina) {
        this.disciplinas.push(nomeDisciplina)
        console.log(`Disciplina ${nomeDisciplina} adicionada ao professor(a) ${this.nome}`)
    }
}

/*
const profTiago = new Professor('Tiago', '1234567')
const profSegato = new Professor('Segato', '0987654')

console.log(profTiago)
console.log(profSegato)

//console.log(`O professor ${profTiago.nome}, possui ID Fucional: ${profTiago.idFuncional}`)

profSegato.atribuirDisciplinas('JS POO')
profSegato.atribuirDisciplinas('Node JS')

console.log(profSegato)
*/





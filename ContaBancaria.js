class ContaBancaria {
    #titular
    #saldo

    constructor(titular) {
        this.#titular = titular
        this.#saldo = 0
    }

    get titular() {
        return this.#titular
    }

    set titular(NovoTitular) {
        this.#titular = NovoTitular
    }

    get saldo() {
        return this.#saldo
    }

    //Ao invés do set saldo(), podemos ter algo mais explícito
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor
        }
    }
}

/*
const jose = new ContaBancaria("José dos Santos")

console.log(jose) //Não é possível acessar diretamente - atributos privados

//Chamando os gets - com o # daria erro
console.log(jose.titular)
console.log(jose.saldo)

// Alterando as informações com os sets
console.log("-- Alterando as informações --")
jose.depositar(2500)
console.log(jose.saldo)
jose.sacar(500)
console.log(jose.saldo)
*/
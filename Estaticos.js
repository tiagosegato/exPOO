// ESTÁTICOS
// Não existe "static class" nativa em JavaScript como em outras linguagens, 
// mas é comum criar uma classe só com métodos estáticos.
// Atributos e métodos estáticos pertencem à classe, não às instâncias.
// Classe estática: Todos os seus métodos e propriedades são estáticos, ou seja, 
// pertencem à própria classe, não a instâncias; não permite ser instanciada 
// ou herdada (diferença com classes Abstratas).

// Quando usar: 
// Para funcionalidades que fazem sentido para a classe como um todo, 
// não para instâncias específicas.

//CLASSE ESTÁTICA
class Matematica {
    // não precisa do construtor
    static PI = 3.14159;  // Atributo estático

    static calcularAreaCirculo(raio) { // Método estático
        return Matematica.PI * raio * raio;
    }
}
// Não precisa criar instância para usar!
console.log(Matematica.PI); //3.14159
console.log(Matematica.calcularAreaCirculo(10)) //314.159

//MÉTODO ESTÁTICO
class Utilitarios {
    //não precisa de atributo
    static gerarIdAleatorio() {
        return Math.floor(Math.random() * 1000);
    }
}

const id = Utilitarios.gerarIdAleatorio();
console.log(id); // Número aleatório entre 0 e 999

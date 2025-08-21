//Atributos e métodos estáticos pertencem à classe, não às instâncias:

//Quando usar: 
//Para funcionalidades que fazem sentido para a classe como um todo, não para instâncias específicas.

//ATRIBUTO ESTÁTICO
class Matematica {
    // não precisa do construtor
    static PI = 3.14159;  // Atributo estático

    static calcularAreaCirculo(raio) {
        return Matematica.PI * raio * raio;
    }
}
// Não precisa criar instância para usar!
console.log(Matematica.PI); // 3.14159

//MÉTODO ESTÁTICO
class Utilitarios {
    //não precisa de atributo
    static gerarIdAleatorio() {
        return Math.floor(Math.random() * 1000);
    }
}

const id = Utilitarios.gerarIdAleatorio();
console.log(id); // Número aleatório entre 0 e 999

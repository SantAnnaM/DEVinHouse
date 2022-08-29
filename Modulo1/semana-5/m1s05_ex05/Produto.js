// primeiro tem que existir a classe, depois poder estanciar. Diferente de função onde posso colocar
// a declaração das variáveis antes de declarar a função (hoisting).
// posso criar de 3 formas de representação de um objeto: função, classes, ou objeto literal.

class Produto {
    nome;
    preco;
    emEstoque;
    quantidade;

    constructor(nome, preco, emEstoque, quantidade) {  //Método constructor//
        this.nome = nome;  // declarando as propriedades
        this.preco = preco;  // "this" guarda o espaço que vai servir 
        // de referência quando este objeto concreto for criado, ele
        // não existe ainda.
        this.emEstoque = emEstoque;
        this.quantidade = quantidade
    }
}

export {Produto};
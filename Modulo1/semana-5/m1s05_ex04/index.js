/*  Crie uma classe Pedido, com as propriedades numeroPedido, dataPedido, estaPago, listaProdutos e nomeCliente.

Utilize o método construtor para que, a cada instancia dessa classe, um número do pedido e o nome do cliente seja informado, a dataPedido seja a data atual ( new Date( ).toLocaleDateString( ) ), o estaPago seja falso e a listaProdutos seja um array vazio.
*/

// primeiro tem que existir a classe, depois poder estanciar. Diferente de função onde posso colocar
// a declaração das variáveis antes de declarar a função (hoisting).
// posso criar de 3 formas de representação de um objeto: função, classes, ou objeto literal.

class Pedido {
    numeroPedido;
    dataPedido;
    estaPago;
    listaProdutos;
    nomeCliente;

    constructor(numeroPedido, nomeCliente) {  //Método constructor//
        this.numeroPedido = numeroPedido;  // declarando as propriedades
        this.dataPedido = new Date( ).toLocaleDateString( );  // "this" guarda o espaço que vai servir 
        // de referência quando este objeto concreto for criado, ele
        // não existe ainda.
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente = nomeCliente;
    }
}

// Criando efetivamente o objeto. considera-se que o que foi 
// declarado anteriormente (class produto), era só a planta do objeto.
// é a instância da classe

let p1 = new Pedido(1964, 'Mauro');
console.log(p1);
// primeiro tem que existir a classe, depois poder estanciar. Diferente de função onde posso colocar
// a declaração das variáveis antes de declarar a função (hoisting).
// posso criar de 3 formas de representação de um objeto: função, classes, ou objeto literal.

class Produto {
    constructor(nome, preco, emEstoque, quantidade) {  //Método constructor//
        this.nome = nome;  // declarando as propriedades
        this.preco = preco;  // "this" guarda o espaço que vai servir 
        // de referência quando este objeto concreto for criado, ele
        // não existe ainda.
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
    verDescricao() {
        console.log(`Classe Produto - Nome: ${this.nome} - preço ${this.preco} - ${this.emEstoque}`);
    };
};

let produtox = new Produto("morango", 10, true, 5);

console.log(produtox)
produtox.verDescricao();


let produto1 = new Produto("melão", 99, true, 500);
produto1.verDescricao();

console.log(produto1)

class Pedido {
    constructor(numeroPedido, nomeCliente) {  //Método constructor//
        this.numeroPedido = numeroPedido;  // declarando as propriedades
        this.dataPedido = new Date( ).toLocaleDateString( );  // "this" guarda o espaço que vai servir 
        // de referência quando este objeto concreto for criado, ele
        // não existe ainda.
        this.estaPago = true;
        this.nomeCliente = nomeCliente;
        this.listaProdutos = [];
    }
    
     adicionarProdutoPedido(produto){

        const ehProduto = produtox instanceof Produto;

        if(!ehProduto) {
            console.log('2- ehproduto = ' + ehProduto + " " + produtox);
            return produtox;
        }

        if (!produtox.emEstoque) {
            return this.listaProdutos;
        };

        let incluiProduto = this.listaProdutos.push(produtox);
        return incluiProduto;
        
    }
/* Método reduce, usado muito em array de soma ou concatenação de objeto, recebe uma callback como argumento. O segundo valor, inicializado com zero, é o inicializador do acumulador (se não passar ele fica como undefined). O acumulador(valor anterior) é o primeiro argumento recebido na callback. O segundo valor é o valor atual, o valor da lista(array).
A cada iteração do array, recebe no acumulador o valor anterior.
Ex.: [1, 3, 5, 7, 9]. Na primeira iteração o valor é 1 e o acumulador undefined. Na segunda iteração, o valor é 3 e o acumulador é 1. Na terceira o valor é 5 e o acumulador é 3.....
Então, posso usar uma expressão matemática no return que soma o valor + acumulador.
*/
/* Orientação: Dentro da classe Pedido, crie outro método, chamado calcularTotal, que deve iterar sobre a listaProdutos e retornar o valor total do pedido. */

     calcularTotal() {

        let total = this.listaProdutos.reduce((ant, atu) => {

            console.log('ant = ' + ant + " preco = " + atu.preco + " qtd = " + atu.quantidade);

            return (ant + (atu.preco * atu.quantitdade));    
        }, 0);

        return total;
      }
 /*   get calcularTotal() {
        let total = 0;
        this.listaProdutos.forEach(numero => {
           total = total + numero 
        });

        console.log("Total Produto = " + total + " | " + ant + " | " + atu);

    } */
};

let pedido = new Pedido(10, "mauro");
/* passa argumentos de produto e quantidade  */
/* pedido.adicionarProdutoPedido('melão'); */

pedido.adicionarProdutoPedido('banana');
pedido.adicionarProdutoPedido('morango');

pedido.calcularTotal();
/* pedido.calcularTotal(5, produto);
console.log('aki');
*/


/* Dentro da classe Pedido, crie outro método, chamado calcularTotal, que deve iterar sobre a listaProdutos e retornar o valor total do pedido. */

/* p1.calcularTotal(10); */
// calcularTotal(10, 10);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9

/*adicionarProduto("caixa");
calcularTotal()
*/
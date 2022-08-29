import { Produto } from "./Produto";

export class Pedido {
    constructor(numeroPedido, nomeCliente) {  //Método constructor//
        this.numeroPedido = numeroPedido;  // declarando as propriedades
        this.dataPedido = new Date( ).toLocaleDateString( );  // "this" guarda o espaço que vai servir 
        // de referência quando este objeto concreto for criado, ele
        // não existe ainda.
        this.estaPago = false;
       
        this.nomeCliente = nomeCliente;
        this.listaProdutos = [];
    }
    adicionarProduto(produto){
        const isProduto = produto instanceof Produto;
        if(isProduto) {
            this.listaProdutos.push(produto);
        }
    }
};

let 

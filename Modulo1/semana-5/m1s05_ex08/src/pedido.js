import { Produto } from "./Produto.js";

export class Pedido {
  constructor(numPedido, nomeCliente) {
    this.numPedido = numPedido;
    this.nomeCliente = nomeCliente;
    this.dataPedido = new Date().toLocaleString();
    this.pago = false;
    this.listaProdutos = [];
    this.listaValorProdutos = []; 
    this.qtdPedida = [];
    this.valorUn = [];
  }

  adicionarProdutoNoPedido(produto) {
    if (produto instanceof Produto) {
      this.listaProdutos.push(produto.nome);
      let valorTotal = produto.precox * produto.quantidade;
      this.listaValorProdutos.push(valorTotal);
      this.qtdPedida.push(produto.quantidade);
      this.valorUn.push(produto.precox);
    }
  };

  calcularTotal() {
    
    let total = 0;

    for (let j = 0; j < this.listaValorProdutos.length; j++) {
      total = total + this.listaValorProdutos[j];
    }
    return total;
  }
}
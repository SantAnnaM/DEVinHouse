export class Produto {
  nome;
  precox;
  emEstoque;
  quantidade;

  constructor(nome, precox, emEstoque, quantidade) {
    this.nome = nome;
    this.precox = precox;
    this.emEstoque = emEstoque;
    this.quantidade = quantidade;
  }
}
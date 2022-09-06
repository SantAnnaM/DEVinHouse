
function adicionarProduto(produto) {
  if (produto instanceof Produto) {
    this.listaProdutos.push(produto);
  }
}
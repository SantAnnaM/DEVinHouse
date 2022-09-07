/* 
Crie 5 instâncias de produtos, com as características que desejar.

Crie 2 instâncias de pedidos. O primeiro pedido deve ter o número '20220001' 
e o nome do cliente à sua escolha. O segundo pedido deve ser o '20220002'.

Utilizando o método adicionarProduto, adicione 3 dos 5 produtos ao pedido
 '20220001' e, o restante, ao pedido '20220002'.
*/

import { Pedido } from "./src/Pedido.js";
import { Produto } from "./src/Produto.js";

// Instanciando objeto produtos
const prod1 = new Produto('JavaScript', 40, true, 1);
const prod2 = new Produto('Reactive+JavaScript', 40, true, 10);
const prod3 = new Produto('Cobol', 6, true, 20);
const prod4 = new Produto('Progress', 20, true, 10);
const prod5 = new Produto('Oracle', 35, true, 5);

// Instanciando objeto pedidos 

const pd1  =  new Pedido('20220001', "SESI");
    pd1.adicionarProdutoNoPedido(prod1);
    pd1.adicionarProdutoNoPedido(prod2);
    pd1.calcularTotal();

const pd2  =  new Pedido('20220002', "SENAI");
    pd2.adicionarProdutoNoPedido(prod3);
    pd2.adicionarProdutoNoPedido(prod4);
    pd2.adicionarProdutoNoPedido(prod5); 
    pd2.calcularTotal();

    const criaDiv = document.querySelector("#mostraPedido"); 
    
    let listaCdPedidos = [pd1, pd2];

    for (let i = 0; i < listaCdPedidos.length; i++) {

            let {numPedido:nrPedido, 
                nomeCliente:cliente, 
                dataPedido:dtPed, 
                pago, 
                listaProdutos, 
                qtdPedida, 
                valorUn} = listaCdPedidos[i];

             imprimePedido (nrPedido, 
                            cliente, 
                            dtPed, 
                            pago, 
                            listaProdutos, 
                            qtdPedida, 
                            valorUn);
    };

   

/*    let {numPedido:nrPedido, nomeCliente:cliente, dataPedido:dtPed, pago, listaProdutos, qtdPedida, valorUn} = pd2;

    imprimePedido();
*/
    function imprimePedido (nrPedido, 
                            cliente, 
                            dtPed, 
                            pago, 
                            listaProdutos, 
                            qtdPedida, 
                            valorUn) {

        let vFieldset = document.createElement("fieldset");
        let vDiv = document.createElement("div");
        let v0 = "Pedido n. " 
        let vStrong = document.createElement("strong"); // cria strong
        
        vStrong.append(nrPedido); // insere numPedido no <strong>
        let vData = document.createElement("span");
        vData.append(dtPed);  
        vData.className = "dataPedido";
        vDiv.append(v0, vStrong, vData); // insere texto Pedido n. + nro 

        let vParagrafo = document.createElement("p");
        vParagrafo.className = "paragrafoNomeCliente";
        vStrong = document.createElement("strong"); // cria strong
        vStrong.innerText = "Cliente: ";
        vParagrafo.append(vStrong, cliente);
        vDiv.append(vParagrafo);
        vFieldset.append(vDiv); // insere div no fieldset
        criaDiv.append(vFieldset); // apresenta div

        vParagrafo = document.createElement("p");
        vParagrafo.className = "paragrafoValorTotal";
        
        let vSpan = document.createElement("span"); // cria strong
        vSpan.innerText = "Valor Total: 900";

        vParagrafo.append(vSpan);

 /*       let vSpan = document.createElement("span");
        vSpan.innerText = ;
        vParagrafo.append(vSpan);
*/
        vDiv.append(vParagrafo);
        vFieldset.append(vDiv); // insere div no fieldset
        criaDiv.append(vFieldset); // apresenta div

        vParagrafo = document.createElement("p");
        vParagrafo.className = "paragrafoPago";

        vStrong = document.createElement("strong"); // cria strong
        vStrong.innerText = "Está pago? ";

        let vPago = "";
        if (pago == true) {
            vPago = "Sim"
        } else vPago = "Não";

        vParagrafo.append(vStrong);
        vSpan = document.createElement("span");
        vSpan.innerText = vPago;
        vParagrafo.append(vSpan);
        vDiv.append(vParagrafo);
        vFieldset.append(vDiv); // insere div no fieldset
        criaDiv.append(vFieldset); // apresenta div

        vParagrafo = document.createElement("p");
        vParagrafo.className = "paragrafoProduto";
        vParagrafo.innerText = "Produtos";
        vStrong = document.createElement("strong"); // cria strong
        vStrong.append(vParagrafo);

        vDiv.append(vStrong);
        vFieldset.append(vDiv); // insere div no fieldset
        criaDiv.append(vFieldset); // apresenta div

        vParagrafo = document.createElement("ul");
        vParagrafo.className = "paragrafoListaProdutos";
        vDiv.append(vParagrafo);
        vFieldset.append(vDiv); // insere div no fieldset
        criaDiv.append(vFieldset); // apresenta div


        for (let j = 0; j < listaProdutos.length; j++){

            vParagrafo = document.createElement("li");
            vParagrafo.className = "li";
            vParagrafo.append(`${listaProdutos[j]} - Quantidade ${qtdPedida[j]} - Valor un. R$ ${valorUn[j].toFixed(2)}`);
            
            vDiv.append(vParagrafo);
            vFieldset.append(vDiv); // insere div no fieldset
            criaDiv.append(vFieldset); // apresenta div
        };
    }
    
   // document.getElementsByClassName('mostraPedido') += parent.append(child, 
   //     `Número Pedido= ${pd1.numPedido}   /   
   //      Nome Cliente= ${pd1.nomeCliente}`); 
    

    /* document.getElementById("mostraPedido").innerHTML  += 
                                    `Número Pedido= ${pd1.numPedido}   /   
                                     Nome Cliente= ${pd1.nomeCliente}  </br>`;
    let html = '<ul>';
    for (let i in pd1.listaProdutos) {
        html += '<li>' + (pd1.listaProdutos[i].nome) + '</li>';
       
    }
    html += '</ul>';

    document.getElementById("mostraPedido").innerHTML  += html;

    document.getElementById("mostraPedido").innerHTML  += 
                                    `</br> Número Pedido= ${pd2.numPedido}   /   
                                     Nome Cliente= ${pd2.nomeCliente}  </br>`;

    html = '<ul>';
    for (let i in pd2.listaProdutos) {
        html += '<li>' + (pd2.listaProdutos[i].nome) + '</li>';
    }
    html += '</ul>';
    document.getElementById("mostraPedido").innerHTML  += html;*/

// FIM DO EXERCÍCIO 7.

// OS COMENTÁRIOS ABAIXO SÃO CÓPIA DO EXERCÍCIO ANTERIOR.


/* Estas classes criadas durante os exercícios estão prontas para serem utilizadas em uma aplicação real. Por exemplo: podemos criar um sistema de pedidos, e, através da propriedade listaProdutos, podemos realizar uma iteração nos produtos de determinado pedido e imprimir cada um deles em tela.
*/

/*
Podemos chamar o método calcularTotal para exibir em tela o valor total de um determinado pedido.

Crie uma página HTML para exibir os nossos produtos. 

Exemplo Página de Pedidos

A página deve exibir cada pedido e, em cada pedido, exibir cada produto. Você pode criar cada card de pedido dentro de uma div ou pode criar uma função que receba como argumento o pedido e monte toda a estrutura HTML. Depois, utilizando appendChild, você poderá adicionar esse card de pedido em qualquer lugar da página que você desejar.

Sugestões

Inicie com uma página HTML estática, colocando dados fictícios simulando um pedido e uma lista de produtos
Depois que a página estiver pronta, crie um módulo JavaScript que reunirá todas as funções de montagem da tela.
Cada classe pode ficar em seu próprio módulo JavaScript e todos os módulos podem ser importados em um único módulo index.js, que será importado no HTML posteriormente.
Bônus!!!!
Dica: você pode utilizar o toLocaleString em um número para formata-lo como moeda. Dê uma olhadinha neste link...
*/

// primeiro tem que existir a classe, depois poder estanciar. Diferente de função onde posso colocar
// a declaração das variáveis antes de declarar a função (hoisting).
// posso criar de 3 formas de representação de um objeto: função, classes, ou objeto literal.

/*
/* class Produto {
    constructor(nome, precox, emEstoque, quantidade) {  //Método constructor//
        this.nome = nome;  // declarando as propriedades
        this.precox = precox;  // "this" guarda o espaço que vai servir 
        // de referência quando este objeto concreto for criado, ele
        // não existe ainda.
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
    verDescricao() {
        console.log(`Classe Produto - Nome: ${this.nome} - preço ${this.precox} - ${this.emEstoque}`);
    };
};
*/
/* let produtox = new Produto("morango", 10, true, 5);

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

/*     calcularTotal() {

        let total = this.listaProdutos.reduce((ant, atu) => {

            console.log('ant = ' + ant + " precox = " + atu.precox + " qtd = " + atu.quantidade);

            return (ant + (atu.precox * atu.quantidade));    
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
/* };
*/
// let pedido = new Pedido(10, "mauro");
/* passa argumentos de produto e quantidade  */
/* pedido.adicionarProdutoPedido('melão'); */

/* pedido.adicionarProdutoPedido('banana');
pedido.adicionarProdutoPedido('morango');

pedido.calcularTotal();
/* pedido.calcularTotal(5, produto);
console.log('aki');
*/

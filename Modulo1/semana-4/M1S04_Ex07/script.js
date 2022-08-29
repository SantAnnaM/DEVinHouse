
/*
No arquivo index.js declare como variável em seu código o array de contas de clientes abaixo (fique a vontade para mudar os valores):

Crie uma função para adicionar as opções do select de contas com os itens do array.
*/

let contasClientes = [
    {
    id: 1,
    nome: 'Cliente 01',
    saldo: 500,
    senha: '1234',
    },
    {
    id: 2,
    nome: 'Cliente 02',
    saldo: 3000,
    senha: '4567',
    },
    {
    id: 3,
    nome: 'Cliente 03',
    saldo: 5000,
    senha: '010101',
    },
    ];
/*   ------------------------------------------------------------------------ */
//    ==>> Função para criar <option> na conta. Recebe o valor e texto.
/*   ------------------------------------------------------------------------ */
        const selectConta = document.getElementById('conta');
        const strongMensagem = document.getElementById('mensagem');
        const form = document.getElementById('form');
        const body = document.body;

        const adicionaOpcao = (value, text) => {
          const option = document.createElement('option');
          option.value = value; 
          option.textContent = text;

          selectConta.appendChild(option);
        };

        const populaSelect = () => {

          selectConta.innerHTML = ' ';

          adicionaOpcao('0', '(Selecione)');

          contasClientes.forEach((conta) => {
            adicionaOpcao(conta.id, conta.nome);
          });
        }
        
        body.onload = populaSelect;

        const exibirMensagem = (mensagem, type = 'error') => {

          strongMensagem.textContent = mensagem;
          strongMensagem.className = type === 'error' ? 'error' : 'success';
        };

//-----------------------------------------------------------------------------------------------
// função que recebe o valor do saldo calculado de sacar e depositar para atualizar contaClientes
// ----------------------------------------------------------------------------------------------
          const atualizaSaldo = (contaAtual, saldo) => {
// faz um filtro de todas as contas eliminando a conta atual que foi selecionada para sacar.
          const contasSemContaAtual = contasClientes.filter((cAtual) => cAtual.id !== contaAtual.id);
           console.log('contasSemContaAtual: ', contasSemContaAtual);
// inclui a conta atual selecionada, restabelecendo o objeto contasClientes
          const contasAtualizadas = [...contasSemContaAtual, { ...contaAtual, saldo}];
          contasClientes = contasAtualizadas;
          console.log('contas Atualizadas: ', contasClientes);
          }
// ----------------------------------------------------------------------------------------------
/*-----------Função que valida valor digitado (sacar e depositar) -----------------------------*/
// ----------------------------------------------------------------------------------------------
        const validarValor = (valor) => {
          if (isNaN(valor) || valor <= 0) {
            exibirMensagem('Valor inválido.');
            return false;
          }
          return true;
        }
// ----------------------------------------------------------------------------------------------
/*-----------Função que calcula novo saldo a partir do valor digitado-------------------------*/
// ----------------------------------------------------------------------------------------------
        const sacar = (contaAtual, valor) => {
            if (!validarValor(valor)) {
              return;
            }
            
            if (valor > contaAtual.saldo) {
              exibirMensagem(`Saldo Insuficiente. Saldo atual: ${contaAtual.saldo}`);
              return;
            }

            const novoSaldo = contaAtual.saldo - valor;
            /*------------------------------------------------------------------------------*/
            /*------------------------------------------------------------------------------*/
            atualizaSaldo (contaAtual, novoSaldo) ;
            /* -----------------------------------------------------------------------------*/
            /*------------------------------------------------------------------------------*/
            exibirMensagem(`Saque efetuado com sucesso! Saldo atual: ${novoSaldo}`, 'success')
        };
/*---------------------------------------------------------------------------------------------*/

        const depositar = (contaAtual, valor) => {
            if (!validarValor(valor)) {
              return;
            }

            const novoSaldo = contaAtual.saldo + valor;

            /*------------------------------------------------------------------------------*/
            /*------------------------------------------------------------------------------*/
              atualizaSaldo (contaAtual, novoSaldo) ;
            /* -----------------------------------------------------------------------------*/
            /*------------------------------------------------------------------------------*/

          exibirMensagem(`Depósito efetuado com sucesso! Saldo atual: ${novoSaldo}`, 'success')
        };

        // Implementação do exercício 6
          
        const operacao = (event) => {
          event.preventDefault();

          const contaId = parseInt(event.target.conta.value); 
          const valor = parseFloat(event.target.valor.value); 
          const operacao = parseInt(event.target.operacao.value); 
          const senha = event.target.senha.value; 

          if (!validarValor(contaId)) {
            exibirMensagem(`Selecionar Cliente.`);
            return;
          }
          if (!validarValor(valor)) {
            exibirMensagem(`Valor Inválido.`);
            return;
          }
          if (!validarValor(operacao)) {
            exibirMensagem(`Selecionar Sacar/Depositar.`);
            return;
          }
          if (!senha) {
            exibirMensagem(`Digitar sua senha.`);
            return;
          }

          const contaAtual = contasClientes.find((conta)=> conta.id === contaId);
          if (!contaAtual) {
            exibirMensagem('Conta Inválida');
            return;
          }

          if (contaAtual.senha !== senha)  {
            exibirMensagem('Senha Inválida');
            return;
          }

          switch (operacao) {
            case 1:
              sacar(contaAtual, valor)
              break;
              case 2:
              depositar(contaAtual, valor)
              break;
            default:
              exibirMensagem('Operação Inválida')
              break;
          }
        };
        
        form.onsubmit = operacao;
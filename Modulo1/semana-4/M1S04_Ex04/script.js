
/*
No arquivo index.js declare como variável em seu código o array de contas de clientes abaixo (fique a vontade para mudar os valores):

Crie uma função para adicionar as opções do select de contas com os itens do array.
*/

let contasClientes = [
    {
    id: 1,
    nome: 'Cliente 01',
    saldo: 500,
    },
    {
    id: 2,
    nome: 'Cliente 02',
    saldo: 3000,
    },
    {
    id: 3,
    nome: 'Cliente 03',
    saldo: 5000,
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

        const sacar = (contaAtual, valor) => {

            if (isNaN(valor) || valor <= 0) {
              exibirMensagem('Valor inválido.');
              return;
            }


            if (valor > contaAtual.saldo) {
              exibirMensagem(`Saldo Insuficiente. Saldo atual: ${contaAtual.saldo}`);
              return;
            }

            const novoSaldo = contaAtual.saldo - valor;

            const contasSemContaAtual = contasClientes.filter((c) => c.id !== contaAtual.id);

            console.log('contasSemContaAtual: ', contasSemContaAtual);

            const contasAtualizadas = [...contasSemContaAtual, { ...contaAtual, saldo: novoSaldo}];

            
            contasClientes = contasAtualizadas;
            console.log('contas Atualizadas: ', contasClientes);

            exibirMensagem(`Saque efetuado com sucesso! Saldo atual: ${novoSaldo}`, 'success')
        };

        const operacao = (event) => {
          event.preventDefault();

          sacar(contasClientes[0], 200);

        };
        
        form.onsubmit = operacao;
/*
No arquivo index.js declare como variável em seu código o array de contas de clientes abaixo (fique a vontade para mudar os valores):

Crie uma função para adicionar as opções do select de contas com os itens do array.
*/

const contasClientes = [
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

    const accountSelect = document.querySelector("#account");

    const addAccountsToSelect = () => {
      contasClientes.forEach((conta) => {
        accountSelect.innerHTML += `<option>${conta.nome} - ${conta.id}</option>`;
      });
    }; 

// Fim programa
// Obtem os elementos do html

const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];
const main = document.getElementsByTagName('main')[0];
const h3 = document.getElementsByTagName('h3');

// Função responsável por verificar se o número é par ou ímpar
const verificarParImpar = () => {
  // Obtem o valor digitado no input
  const numero = parseInt(input.value);

  // Valida se não é um número válido
  if (isNaN(numero)) {
    // Chama a funcão para exibir a mensagem ao usuário
    exibeResultado('Número inválido!');
    // Sai da função, assim não executa nada mais, evitando assim a utilização do else
    return;
  }

  // Verifica se o número é par ou ímpar
  const resultado = numero % 2 === 0 ? 'par' : 'ímpar';
  // Chama a função para exibir o resultado
  exibeResultado(`O número ${numero} é ${resultado}.`);
};

// Função responsável por exibir a mensagem ao usuário
const exibeResultado = (mensagem) => {
  // Valida se o h2 exista, por exemplo após validar um número
  if (h3[0]) {
    // Remove h3 para evitar que fique duplicando itens.
    h3[0].remove();
  }

  // Cria um elemento h3 para exibir o resultado
  const elemento = document.createElement('h3');
  // Adiciona a mensagem recebida por parâmetro na função no elemento h2 criado
  elemento.innerText = mensagem;

  // Adiciona o h2 criado, como filho do elemento main
  main.appendChild(elemento);
};

// Vincula ao evento de click do botão a função verificarParImpar
button.onclick = verificarParImpar;
// Obtem os elementos do html

const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];
const main = document.getElementsByTagName('main')[0];
const h3 = document.getElementsByTagName('h3');
const imgIdade = document.getElementById('imgIdade');

/* Função responsável por classificar. A função definida diferente do ex08.
No ex08 foi chamado assim:
const verificarParImpar = () => {
  // Obtem o valor digitado no input
  const numero = parseInt(input.value);
Depois foi feito a mesma tratativa de testar se é um número válido
*/

const changeIdade = ({texto, url})=> {
  // "idade" é o que está no h2
  input.innerText = texto;
  imgIdade.src = url;
  return;
}

function classificar() {

  const idade = parseInt(input.value);

  // Valida se não é um número válido ou é um número negativo.
  if (isNaN(idade) || idade < 0) {

    // Chama a funcão para exibir a mensagem ao usuário
    exibeResultado('Idade inválida!');

    return;
};

// Valida se a idade informada é menor ou igual a 15
if (idade <= 15) {
  // Chama a funcão para exibir a mensagem ao usuário
  exibeResultado(`Com ${idade} anos a pessoa é jovem.`);
  changeIdade({ texto: 'Pessoa Jovem', url: './assets/OIP.png'});
  return;
};
// Valida se a idade informada é maior ou igual a 65
if (idade >= 65) {
  // Chama a funcão para exibir a mensagem ao usuário
  changeIdade({ texto: 'Pessoa Idosa', url: './assets/R.png'});
  exibeResultado(`Com ${idade} anos a pessoa é idosa.`);
  return;
};

// caso contrário, pessoa é adulta
exibeResultado(`Com ${idade} anos a pessoa é adulta.`);
};

  /* Verifica se o número é par ou ímpar
  const resultado = numero % 2 === 0 ? 'par' : 'ímpar';
  // Chama a função para exibir o resultado
  exibeResultado(`O número ${numero} é ${resultado}.`);
};
*/

// Função responsável por exibir a mensagem ao usuário
const exibeResultado = (mensagem) => {
  // Valida se o h3 exista
  if (h3[0]) {
    // Remove h3 para evitar que fique duplicando itens.
    h3[0].remove();
   };

  // Cria um elemento h3 para exibir o resultado
  const elemento = document.createElement('h3');
  // Adiciona a mensagem recebida por parâmetro na função no elemento h2 criado
   elemento.innerText = mensagem;

  // Adiciona o h2 criado, como filho do elemento main
   main.appendChild(elemento);
};

// Vincula ao evento de click do botão a função verificarParImpar
button.onclick = classificar;

// Fim programa

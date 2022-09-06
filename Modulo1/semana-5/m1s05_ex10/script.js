/* Utilizando o setInterval, crie uma função que mostre o horário atual e atualize automaticamente a cada 2 segundos.

O horário deve ser mostrado no console, no formato HH:MM:SS.

Atividade
*/
function showTime() {
  const date = new Date();
  const time = new Intl.DateTimeFormat('pt-BR', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(date);

  console.log(time);
}

const timeInterval = setInterval(showTime, 2000);

setTimeout(() => clearInterval(timeInterval), 10000);
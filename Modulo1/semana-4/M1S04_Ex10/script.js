


const inputDt = document.getElementById('inputDt');
const estacao = document.getElementById('estacao');
const imgEstacao = document.getElementById('imgEstacao');

const changeEstacao = ({texto, url})=> {
  // "estacao" é o que está no h2
  estacao.innerText = texto;
  imgEstacao.src = url;
  return;
}


const estacaoSelecionada = (event) => {
  const inputDtFormata = new Date(`${event.target.value} 00:00`); /* dica da profi é colocar 00:00 para que traga a data atual, caso contrário traz a data do dia anterior, isto por causa do utc!!?!! */
  const diaDoMes = inputDtFormata.getDate() ; /* retorna o dia do mês */
  const month = inputDtFormata.getMonth() + 1; /* o mês começa no zero, por isto soma mais 1.
  console.log(inputDtFormata);*/


// -- 22/03 a 21/06 - Outono

if ((diaDoMes >= 22 && month === 3) || 
    month === 4 ||  
    month === 5 || 
    (diaDoMes <= 21 && month === 6 )) {

      changeEstacao({ texto: 'Outono', url: './assets/outono.png'});
      return;
}
// -- 22/03 a 21/06 - Outono

if ((diaDoMes >= 22 && month === 6) || 
    month === 7 ||  
    month === 8 || 
    (diaDoMes <= 21 && month === 9 )) {

      changeEstacao({texto: 'Inverno', url: './assets/inverno.png'});
      return;
}
if ((diaDoMes >= 22 && month === 9) || 
    month === 10 ||  
    month === 11 || 
    (diaDoMes <= 21 && month === 12 )) {

      changeEstacao({texto: 'Primavera', url: './assets/primavera.png'});
      return;
}
changeEstacao({texto: 'Verão', url: './assets/verao.png'});

};

inputDt.onchange = estacaoSelecionada;
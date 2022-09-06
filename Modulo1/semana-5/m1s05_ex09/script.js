/* Crie uma função chamada sleep, que recebe como argumento um valor qualquer.

Quando chamada, essa função precisa retornar, após 3 segundos (setTimeout), uma Promise resolvida com o valor que foi passado como argumento.

Ex.:

function sleep ( valor ) {
  return new Promise ( (res, rej) => { 
     setTimeout( ... )
  })
}
Chame esta função e confirme o funcionamento dela (lembre-se que o valor do tempo de espera é aproximado!)

Atividade
*/

const sleep = ( val ) => {
  return new Promise (function ( res, rej ) {
    console.log('Dormindo');
    setTimeout(function(){
        res(val);
    }, 3000);
  });
};

// usando Promise
console.log('código antes');

let vSleep = sleep('Argumento');

console.log('código durante');

vSleep
    .then(function(resultado) {
    console.log('Resultado = ', resultado);
})
    .catch(function(erro) {
    console.log('Erro = ', erro)
});
console.log('código depois');
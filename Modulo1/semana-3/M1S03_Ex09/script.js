/*
[M1S03] Ex 9 - Projeto: desafio final
Agora que já temos o código praticamente todo implementado, adicione em cada uma das iterações forEach do exercício uma verificação para saber se `openBar` do convidado é `true`. Caso seja true, imprima, junto ao seu nome, um emoji 🍹!
```jsx
// exemplo de implementação:
listaDeObjetos.forEach((objeto) => {
  if (objeto.propriedadeBooleana) {
    elemento.innerHTML +=
      "<li> Deu verdadeiro! 😀</li>";
  } else {
    elemento.innerHTML +=
      "<li> Deu falso... 😪</li>";
  }
});
```
Dica: o Emoji é um caractere de texto. Você pode copiar e colar dentro da sua string como se fosse uma letra! [https://emojipedia.org/](https://emojipedia.org/)
*/


// código do exercício anterior

const convidado1 =  {
    Nome: "Huguinho",
    sobrenome: "Laranjeira",
    setor: "camarote",
    idade: 09,
};
const convidado2 =  {
    Nome: "Zezinho",
    sobrenome: "Bergamoteira",
    setor: ("pista"),
    idade: 11,
};

const convidado3 =  {
    Nome: "Leandro",
    sobrenome: "Sertanejo",
    setor: ("pista"),
    idade: 25,
};

const convidado4 =  {
    Nome: 'Leonardo',
    sobrenome: 'Caipira',
    setor: ('arquibancada'),
    idade: 45,
};

const convidado5 =  {
    Nome: 'Maryl',
    sobrenome: 'Streep',
    setor: ('arquibancada'),
    idade: 60,
};
const convidado6 =  {
    Nome: 'Gisele',
    sobrenome: 'Bundchen',
    setor: ('arquibancada'),
    idade: 29,
};

const listaDeConvidados = [convidado1, convidado2, convidado3, convidado4, convidado5, convidado6];

function modificarLista(listaConvidados) {

    var arrayResultante = []; 

    for (var i = 0; i < listaConvidados.length; i++) { 
    
        var objetoDoArray = listaConvidados[i];

        if (objetoDoArray.idade <= 17)
        objetoDoArray.openBar = false; 
        else
        objetoDoArray.openBar = true;
    
        arrayResultante.push(objetoDoArray);
      };

  return arrayResultante;
};

modificarLista(listaDeConvidados); // aqui, a função é chamada

const convidadosComBebidasProcessada = modificarLista(listaDeConvidados);

/* Crie três funções: `separarCamarote`, `separarPista` e `separarArquibancada`. 
Cada uma dessas funções deve receber uma lista como argumento e deve retornar essa lista filtrada constando somente os valores do setor camarote, pista e arquibancada (cada função deve retornar a lista com um dos setores). */

/*  
const separarCamarote = (lista) => {
    const resultado = lista.filter((convidado) => {
      if (convidado.setor === "camarote") {
        return true; // se for camarote, retorna true
      } else {
        return false; // caso contrário, retorna false (não vai pro array)
      }
    });
    return resultado; // array filtrada!
    console.log('camarote ', resultado);
  };

  // const filtroCamarote = separarCamarote(lista);

  const separarPista = (lista) => {
    const resultado = lista.filter((convidado) => {
      if (convidado.setor === "pista") {
        return true; // se for pista, retorna true
      } else {
        return false; // caso contrário, retorna false (não vai pro array)
      }
    });
    return resultado; // array filtrada!
    console.log('pista ', resultado);
  };
*/
//const filtroPista = separarPista(lista);

/*  const separarArquibancada = (lista) => {
    const resultado = lista.filter((convidado) => {
      if (convidado.setor === "arquibancada") {
        return true; // se for pista, retorna true
      } else {
        return false; // caso contrário, retorna false (não vai pro array)
      }
    });
    console.log('arquibancada ', resultado);
    return resultado; // array filtrada!
    
  };
*/
  
function separarArquibancada (value){
    if (value.setor === "arquibancada") {
        return true; // se for pista, retorna true
      } else {
        return false; // caso contrário, retorna false (não vai pro array)
      }
  }
  var filtroArquibancada = convidadosComBebidasProcessada.filter(separarArquibancada);
  console.log(filtroArquibancada);


function separarPista (value){
    if (value.setor === "pista") {
        return true; // se for pista, retorna true
      } else {
        return false; // caso contrário, retorna false (não vai pro array)
      }
  };
  var filtroPista = convidadosComBebidasProcessada.filter(separarPista);
  console.log(filtroPista);


  function separarCamarote (value){
    if (value.setor === "camarote") {
        return true; // se for pista, retorna true
      } else {
        return false; // caso contrário, retorna false (não vai pro array)
      }
  };
  var filtroCamarote = convidadosComBebidasProcessada.filter(separarCamarote);
  console.log(filtroCamarote);

// RESOLUÇÃO M1S03_Ex08
//*
/* [M1S03] Ex 8 - Projeto: criando um HTML e manipulando a DOM
Agora que nossas funções de filtros estão prontas, vamos manipular o DOM e montar uma interface. Construa uma interface utilizando o mock up abaixo, ou, se preferir, pegue os códigos prontos HTML e CSS disponibilizados nos links.
(https://www.figma.com/file/BH3j77Y4EQcEINoeuBciDG/Mock-Exemplo-da-Lista?node-id=0%3A1) 
Capture cada uma das listas `ul` de cada uma das colunas da página HTML em uma variável utilizando um dos métodos document.getElementById (precisa adicionar um ID na tag HTML) ou document.querySelector (selecionar por uma das classes CSS). No código disponibilizado pelo professor, os elementos `ul` já possuem um ID.
Cada uma das funções `separarCamarote`, `separarPista` e `separarArquibancada` criadas no exercício 7 retorna um array de elementos filtrados. O seu desafio será fazer com que cada uma das colunas HTML exiba a lista de convidados com base no seu setor. Você pode utilizar o método `forEach` para iterar sobre cada objeto na lista e adicionar ao `innerHTML`um `li` com o nome completo do convidado (nome e sobrenome).
Códigos HTML e CSS de exemplo: [https://gist.github.com/mikansc/052c1494f7efdf0f90d818299dfdc669](https://gist.github.com/mikansc/052c1494f7efdf0f90d818299dfdc669)
*/

// capturando os elementos no HTML
const ulArquibancadaEl = document.getElementById("listaArquibancada");
const ulPistaEl = document.getElementById("listaPista");
const ulCamaroteEl = document.getElementById("listaCamarote");

// esta função monta o nome da pessoa para ser exibido
// Criei apenas para facilitar a leitura dos forEach abaixo.

const montaNome = (objPessoa) => {

  const deveTerEmoji = objPessoa.openBar;

  if (deveTerEmoji) {
    return `${objPessoa.Nome} ${objPessoa.sobrenome} ${"🍹"} `;
  } else {
    return `${objPessoa.Nome} ${objPessoa.sobrenome} `;
  }
};

// realizando o forEach
filtroArquibancada.forEach((convidado) => {
  ulArquibancadaEl.innerHTML += `<li>${montaNome(convidado)}</li>`;
});

filtroCamarote.forEach((convidado) => {
  ulCamaroteEl.innerHTML += `<li>${montaNome(convidado)}</li>`;
});

filtroPista.forEach((convidado) => {
  ulPistaEl.innerHTML += `<li>${montaNome(convidado)}</li>`;
});


/*[M1S03] Ex 9 - Projeto: desafio final
Agora que já temos o código praticamente todo implementado, adicione em cada uma das iterações forEach do exercício uma verificação para saber se `openBar` do convidado é `true`. Caso seja true, imprima, junto ao seu nome, um emoji 🍹!
```jsx
// exemplo de implementação:
listaDeObjetos.forEach((objeto) => {
  if (objeto.propriedadeBooleana) {
    elemento.innerHTML +=
      "<li> Deu verdadeiro! 😀</li>";
  } else {
    elemento.innerHTML +=
      "<li> Deu falso... 😪</li>";
  }
});
```
/*Dica: o Emoji é um caractere de texto. Você pode copiar e colar dentro da sua string como se fosse uma letra! [https://emojipedia.org/](https://emojipedia.org/)
*/

/*
================================== RESOLUÇÃO ==================================================
  Como este é o exercício final, vou colocar aqui apenas a função nova que o exercício pede.
  O código completo do exercício vai estar no script.js
  Vamos usar, mais uma vez, uma função para nos auxiliar na verificação da existencia da propriedade
"openBar" como verdadeiro ou falso dentro do objeto do convidado. Depois, podemos chamar essa função
junto com a função montaNome() na hora de montar as strings.
  Vou chamar a função de "marcarOpenBar" porque nós vamos deixar uma "marca" de um emoji nos
convidados que podem consumir bebida alcoólica.
  Lembrando: um emoji funciona como um caractere, portanto precisa ser trabalhado como string.
*/


var lista1 = document.createElement("ul");

listaCamarote.forEach(camarote);
function camarote(listaCamarote) {
  let item = document.createElement("li");
  if (listaCamarote.openbar == true) {
    item.innerHTML = listaCamarote.nome + " " + listaCamarote.sobrenome + "🍹";
  } else if (listaCamarote.openbar == false) {
    item.innerHTML = listaCamarote.nome + " " + listaCamarote.sobrenome;
  }
  lista1.appendChild(item);
  document.getElementById("listaCamarote").appendChild(lista1);
}

var lista2 = document.createElement("ul");

listaPista.forEach(pista);
function pista(listaPista) {
  let item = document.createElement("li");
  if (listaPista.openbar == true) {
    item.innerHTML = listaPista.nome + " " + listaPista.sobrenome + "🍹";
  } else if (listaPista.openbar == false) {
    item.innerHTML = listaPista.nome + " " + listaPista.sobrenome;
  }
  lista2.appendChild(item);
  document.getElementById("listaPista").appendChild(lista2);
}

var lista3 = document.createElement("ul");

listaArquibancada.forEach(arquibancada);
function arquibancada(listaArquibancada) {
  let item = document.createElement("li");
  if (listaArquibancada.openbar == true) {
    item.innerHTML =
      listaArquibancada.nome + " " + listaArquibancada.sobrenome + "🍹";
  } else if (listaArquibancada.openbar == false) {
    item.innerHTML = listaArquibancada.nome + " " + listaArquibancada.sobrenome;
  }
  lista3.appendChild(item);
  document.getElementById("listaArquibancada").appendChild(lista3);
}
// Fim programa
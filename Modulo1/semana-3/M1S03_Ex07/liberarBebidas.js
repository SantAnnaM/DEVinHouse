/* [M1S03] Ex 7 - Projeto: funções e filtros de arrays
Crie três funções: `separarCamarote`, `separarPista` e `separarArquibancada`. 
Cada uma dessas funções deve receber uma lista como arumento e deve retornar essa lista filtrada constando somente os valores do setor camarote, pista e arquibancada (cada função deve retornar a lista com um dos setores).
Utilize para esta função o método `filter` de array. Exemplo:
    
    ```jsx
    function fazerUmFiltro(umaListaDeObjetos) {
      var listaFiltrada = umaListaDeObjetos.filter((objeto) => objeto.propriedade === "valor");
    	return listaFiltrada;
    }
    ```
    
Chame **cada uma das três funções**, passando como argumento a `convidadosComBebidasProcessada`; Salve **cada um dos resultados em uma variável diferente**. Exemplo
```jsx
// um exemplo com a função de camarote...
var listaCamarote = separarCamarote(convidadosComBebidasProcessada);
```
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
    idade: 15,
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
//console.log(filtroCamarote, filtroPista, filtroArquibancada);

// Fim programa
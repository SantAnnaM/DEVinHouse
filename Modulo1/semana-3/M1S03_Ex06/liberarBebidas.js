/*
Crie uma função chamada liberarBebidas que receba uma lista de objetos de convidados e, para cada objeto dentro da lista, verifique se a idade do convidado é maior que 17 anos. Caso seja maior, adicione uma propriedade “openBar” com o valor true ao objeto deste convidado. Caso seja menor, adicione a mesma propriedade, mas com o valor false.

Esta função deve criar um novo array vazio e, para cada iteração, adiciona a propriedade e adiciona o objeto modificado ao array vazio. Exemplo:

Chame a função recém criada passando o array de lista de convidados e salve o array retornado em uma variável convidadosComBebidasProcessada. O objeto deste array deve conter agora a propriedade openBar com o valor de acordo com a idade que você adicionou ao objeto inicial do exercício 4!


function modificarUmArrayDeObjetos(oArray) {
    var arrayResultante = [];    
    for (var i = 0; i < oArray.length; i++) {
        // aqui dentro rola o algoritmo de comparação, adição de propriedades, etc...
        var objetoDoArray = oArray[i];
        objetoDoArray.novaPropriedade = "valor da propriedade";
        arrayResultante.push(objetoDoArray)
        // fim do algoritmo
    }
    return arrayResultante; // vai retornar uma cópia do array com os objetos modificados
}

modificarUmArrayDeObjetos(umArrayDeObjetosQualquer) // aqui, a função é chamada

*/

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

console.log(listaDeConvidados);

// Fim programa
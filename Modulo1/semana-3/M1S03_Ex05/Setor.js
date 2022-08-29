/*
Crie um array no seu programa, com o nome listaDeConvidados, e adicione o objeto criado no exercício anterior (basta apenas inicializar o array com o objeto - não precisa chamar a função “push”). Exemplo:

var lista = [objeto]
Este array vai ser utilizado para adicionar os demais convidados
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
    Nome: 'Leandro',
    sobrenome: 'Sertanejo',
    setor: ('pista'),
    idade: 15,
};

const convidado4 =  {
    Nome: 'Leonardo',
    sobrenome: 'Caipira',
    setor: ('pista', 'arquibancada'),
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


console.log(listaDeConvidados);

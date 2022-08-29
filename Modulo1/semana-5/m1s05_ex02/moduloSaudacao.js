/* Módulo = arquivo em js com código a ser exportado
exportar saudação de forma nomeada. Posso colocar direto no function = export function //modsaudacao  () {};
 esta função só precisa retornar uma string olá.
*/

function funcSaudacao () {

    return "olá";
};

export {funcSaudacao};

// se eu tiver várias funções declaradas dentro deste .js, então posso exportar somente
// com um comando export { nome1, nome2, nme3}
/*
// quando usar o default, estou dizendo que o tipo de importação é o padrão e não o comum
para esclarecer o exemplo abaixo, meu x.js que faz o import está assim:
    import {
        user } from './user.js'
    }
    var u = new User('mauro')
    console.log(u.nome)

// quando trabalhar entidade (como o conceito de classes) então utilizo o "default"
// ex: Não posso fazer do jeito comum:
    export class user { 
        constructor (nome) } 
        this.nome = nome}{

        }
//
// Tenho que fazer deste jeito padrão
export default class user { 
        constructor (nome) } 
        this.nome = nome}{

        }

        //  Como importar?  Tenho que tirar as chaves porque não posso trabalhar como se estivesse definindo nome

        import user from './user.js


*/
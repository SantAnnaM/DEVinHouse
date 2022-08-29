import { funcSaudacao } from "./moduloSaudacao.js";
import saudacaoEspecial from "./saudacaoEspecial.js";
// importar a função saudaçãoEspecial do local ./saudacaoEspecial.js
// saudacaoEspecial.js está sem "{}"" porque ela é default.
// no index.html é chamado o index.js via tag <script type="module"...> </script> que por
// sua vez tem que ter o type="module" informado.

//modSaudacao;

// No exemplo acima, ao digitar modSaudacao o vscode já traz o caminho do módulo

// posso fazer tambem:
/* import {} from './moduloSaudacao.js.  Se clicar com o mouse entre os parenteseses e ctrl/espaço já puxa
*/
console.log(saudacaoEspecial("Mauro"));

// Posso criar um x.js e dentro ter várias funções - de prefeência que tratem de um mesmo 
// assunto - e aqui no meu index.js importar do x.js somente as funções que quero trabalhar.
// ex. import { somar, dividir, multiplicar, subtrair} from './js'

// posso importar o x.js como um objeto: (coloco o '*' e não uso chaves), a libray inteira é
// usada como se fosse uma variável com métodos internamente
// import * mat from ./x.js
// para usar no meu código, uso mat.nome, tipo = let s = mat.xyz
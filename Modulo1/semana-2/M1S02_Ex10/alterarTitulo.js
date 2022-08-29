 
// que é o texto que diz "Títudo da Página" dentro da tag  <h1>.
// Fazer isso com os métodos:  getElementById(), getElementsByClassName() ou querySelector() do DOM. Em seguida, 
// armazenar o valor em uma variável.


/* function alteraH1() {
    // A class newTitle é o elemento que tem o novo titulo digitado
    const new_title = document.querySelector('.newTitle');

    // guarda o texto obtido via .value
    const new_titleH1 = new_title.value;

    // Buscar o título a ser modificado e guardar 
    const titleElement = document.querySelector('.oldTitle');
    titleElement.textContent = new_title;
    }

    document.getElementById("btNewTitle").addEventListener('click', alteraH1);
*/

/* quando é clicado em um botão dentro do formulário, por padrão o navegador pega este formulário e envia para um servidor. Como não especifiquei nenhum caminho para enviar, ele envia para a mesma página e acaba recarregando a página. Como não quero enviar para nenhum lugar, por enquanto quero trabalhar dentro do meu js. Então dentro da function é inserido um nome que no caso coloquei "event", e através deste "event" vou poder chamar um método chamado preventDefault, porque com este comando eu evito a ação default que ele iria executar que no caso não vai enviar mais para nenhum lugar, vai deixar eu tratar. */

    var btNovoH1 = document.querySelector("#btNewTitle");

    btNovoH1.addEventListener("click", function (event) {

        event.preventDefault();

        var varNovoTitulo = document.querySelector("#newTitle");
        var conteudo = varNovoTitulo.NomeNovoTitulo.value;
        var titleElement = document.querySelector('.oldTitle');

        titleElement.textContent = conteudo;
    })
    // Fim função alteraH1.
function fprompt() {

        let n1 = prompt("Digite o ano:");
        
        
        if (n1 == null || n1 == 0) {
          alert("Não valeu!. Digite um ano com 4 dígitos");
        } else {
          
        let anoAtual = new Date().getFullYear();
        
        let anoCalculado = anoAtual - n1;

          alert("Diferença entre ano atual e ano digitado: " + anoCalculado);
          
    }
}
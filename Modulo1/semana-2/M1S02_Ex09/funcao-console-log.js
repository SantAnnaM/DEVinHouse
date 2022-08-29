function validarFormulario() {
                                
    var nomePessoa = window.document.getElementById('nomeCompleto');
    var enderecoPessoa = window.document.getElementById('motivoContato');
    var emailPessoa = window.document.getElementById('e-mail');
    var n1 = (nomePessoa.value);
    var n2 = (enderecoPessoa.value);
    var n3 = (emailPessoa.value);

    if (n1 == "" || n2 == "" || n3 == "")  {
        alert("Favor informar o seu nome, endereço e e-mail!");
        return false;     
    }
    else{
        alert(`Olá   ${n1}  , informações enviadas com sucesso!`);
        console.log("Formulário de contato => Nome:" + n1 + " - E-mail: " + n3 + "  - Descrição " + n2 );
        return true; 
    }
}
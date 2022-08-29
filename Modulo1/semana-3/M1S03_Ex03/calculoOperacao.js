var primeiroNumero;
            primeiroNumero = prompt("Digite o primeiro número");
            var segundoNumero;
            segundoNumero = prompt("Digite o segundo número");
            var operacao;
            operacao = prompt("Digite a operação: + - * ou /")

            if (operacao == "+")
                operacao1 = 1;
            else if (operacao == "-")
                operacao1 = 2;
            else if(operacao == "*")
                operacao1 = 3;
            else if(operacao == "/")
                operacao1 = 4;
            else
                alert("operação informada inválida");

            switch(operacao1){
                case 1 : 
                resultado = Number(primeiroNumero) + Number(segundoNumero);
                
                break;
                case 2 : 
                resultado = Number(primeiroNumero) - Number(segundoNumero);
                break;
                case 3 : 
                resultado = Number(primeiroNumero) * Number(segundoNumero);
                break;
                case 4 : 
                resultado = Number(primeiroNumero) / Number(segundoNumero);
                break;  
            }

            console.log("resultado: " + resultado);
            
            
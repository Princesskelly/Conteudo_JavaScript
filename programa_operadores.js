const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

const realizarCalculo = (num1, num2, operacao) => {
    const primeiroNumero = parseInt(num1);
    const segundoNumero = parseInt(num2);

    switch (operacao) {
        case '+':
            return primeiroNumero + segundoNumero;
        case '-' :
            return primeiroNumero - segundoNumero;
        case '*' :
            return primeiroNumero * segundoNumero;
        case '/' :
            return primeiroNumero / segundoNumero;
        default :
            return 0;
    }
}

leitor.question('Digite o primeiro número : \n', (primeiroNumero) => {
    
    leitor.question('Digite o segundo número : \n', (segundoNumero) => {

        leitor.question('Digite o operador : \n', (operacao) => {
            const resultado = realizarCalculo(primeiroNumero, segundoNumero, operacao);

            console.log({resultado});
            leitor.close();

        });
    });
});
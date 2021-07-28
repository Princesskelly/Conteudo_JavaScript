const listaconvidados = ["Maria", "João", "Paulo", "Ana", "Thiago"];
const nome = process.argv[2];
const idade = parseInt(process.argv[3]);

if (!listaconvidados.includes(nome)) {
    console.log("Essa pessoa não foi convidada!");
    return;
} 

if (idade <18) {
    console.log("Você é menor de idade.");
    return;
}

console.log("Seja bem vindo-a!");
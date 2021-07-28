const marca = process.argv[2];

if (marca === "ford") {
    console.log("marca ford atendida");
} else if (marca === "fiat") {
    console.log("marca fiat atendida");
} else {
    console.log("marca não atendida");
}

const nome = "Robson";

switch (nome) {
    case "João":
        console.log("João encontrado");
        break;
    case "Robson":
        console.log("Robson encontrado");
        break;
    default:
        console.log("Não encontrei a pessoa");

}
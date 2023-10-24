function verificaImpostos(rendaAnual, limiteImposto) {
    if (rendaAnual > limiteImposto) {
        return "Você deve pagar impostos.";
    } else {
        return "Você está isento de impostos.";
    }
}

const rendaAnual = parseFloat(prompt("Digite sua renda anual:"));
const limiteImposto = 40000; // Defina o limite para pagamento de impostos aqui.
const resultadoImpostos = verificaImpostos(rendaAnual, limiteImposto);
console.log(resultadoImpostos);

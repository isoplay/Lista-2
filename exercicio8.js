function verificaDivisibilidade(numero1, numero2) {
    if (numero2 === 0) {
      return "Não é possível dividir por zero.";
    }
    if (numero1 % numero2 === 0) {
      return `${numero1} é divisível por ${numero2}.`;
    } else {
      return `${numero1} não é divisível por ${numero2}.`;
    }
  }
  
  const num1 = parseInt(prompt("Digite o primeiro número:"));
  const num2 = parseInt(prompt("Digite o segundo número:"));
  
  const resultado = verificaDivisibilidade(num1, num2);
  console.log(resultado);
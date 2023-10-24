const nota1 = parseFloat(prompt("Digite a nota do aluno no primeiro trimeste"));
const nota2 = parseFloat(prompt("Digite a nota do aluno no segundo trimeste"));
const nota3 = parseFloat(prompt("Digite a nota do aluno no terceito trimeste"));

var soma = nota1 + nota2 + nota3;

if (soma >= 60){
    console.log ("O aluno esta aprovado")
} else {
    console.log ("O aluno esta reprovado")
}

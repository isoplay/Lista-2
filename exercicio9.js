
const ano = prompt("Digite um ano:");

const anoInt = parseInt(ano);

if ((anoInt % 4 === 0 && anoInt % 100 !== 0) || anoInt % 400 === 0) {
  console.log(anoInt + " é um ano bissexto.");
} else {
  console.log(anoInt + " não é um ano bissexto.");
}

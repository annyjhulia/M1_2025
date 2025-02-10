//notas do aluno
var notas = [6.5, 8.67, 4.79];

//variante para guardar a soma das notas do aluno
var soma = 0

//somando as notas
for (var s = 0; s < notas.length; s++) {
    soma += notas[s];
};

//calculando a média das notas a partir da soma
var media = soma/notas.length;

//resultado que será imprimido de acordo com a média
if (media >= 7) {
    console.log('Parabéns, você foi aprovado! Sua média foi de ' + media.toFixed(2) + '.')
} else {
    console.log('Infelizmente, você foi reprovado. Sua média foi de ' + media.toFixed(2) + '.')
}

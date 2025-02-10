//notas do aluno 
var nota1 = 8;
var nota2 = 4;
var nota3 = 6;

//média das notas
var media = (nota1 + nota2 + nota3)/3

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
var termino = prompt('Por favor insira o termo: ');

termino = termino.toLowerCase();

var caracteresInvalidos = 'àèìòùâêîôûäëïöüáéíóúãõÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÁÉÍÓÚÃÕ';
var acento = "´^¨~";

var resultado = termino.split('');

var concatResultado = [];

var change1 = 'enter';
var change2 = 'imes';
var change3 = 'ai';
var change4 = 'ober';
var change5 = 'ufat';

if (resultado != null) {
    console.log('O termo é ' + termino + ' e o resultado é: ' + '\n');

    var i;
    for (i = 0; i < resultado.length; i++) {
        if (caracteresInvalidos.indexOf(resultado[i]) == -1 || acento.indexOf(resultado[i]) != -1) {
            console.log(`A letra ${resultado[i]} é um personagem inválido!\n`);
        } else if (resultado[i] == 'e') {
            console.log(`A letra ${resultado[i]} = ${change1}\n`);
            concatResultado.push(change1);
        } else if (resultado[i] == 'i') {
            console.log(`A letra ${resultado[i]} = ${change2}\n`);
            concatResultado.push(change2);
        } else if (resultado[i] == 'a') {
            console.log(`A letra ${resultado[i]} = ${change3}\n`);
            concatResultado.push(change3);
        } else if (resultado[i] == 'o') {
            console.log(`A letra ${resultado[i]} = ${change4}\n`);
            concatResultado.push(change4);
        } else if (resultado[i] == 'u') {
            console.log(`A letra ${resultado[i]} = ${change5}\n`);
            concatResultado.push(change5);
        }
    }
    console.log('O termo é ' + termino + ' e o resultado concatenado é: ' + concatResultado.join(''));
}
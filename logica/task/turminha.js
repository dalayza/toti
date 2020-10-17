let nomes = ['zequinha', 'ulisses', 'yuri'];

// 1
var nomes1 = nomes.sort().reverse();
console.log('1. Ordenar os nomes de forma decrescente: ', nomes1);

// 2
var i;
for (var i = 0; i < nomes.length; i++) {
    let nomes2 = nomes[i].split('').reverse().join('');
    console.log(`2. Inverter a lista posicion ${i} de array de nomes usando recursividade: ${nomes2}`);
}

// 3
var listaChamadas = ['zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'yuri', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'zequinha', 'ulisses', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri', 'ulisses', 'yuri'];

console.log('3. Dadas várias listas de chamadas, consultar a quantidade de faltas de um aluno: ');

var i, x;

for (var i = 0; i < nomes.length; i++) {
    let chamadas = [];

    for (var x = 0; x < listaChamadas.length; x++) {
        if (listaChamadas[x] === nomes[i]) {
            chamadas.push(listaChamadas[x]);
        }
    }

    console.log(`Chamadas para ${nomes[i]}: ${chamadas.length}`);
}
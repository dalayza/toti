$(document).ready(function() {
    var name = '';
    var age = 0;
    var color = '';
    var question = 'sim';
    var persons = [];

    function PersonDetails(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    while (question.toLowerCase() == 'sim') {
        var name = prompt('Por favor insira seu nome: ');
        var age = prompt('Por favor insira sua idade: ');
        var cor = prompt('Por favor insira seu cor favorito: ');

        let me = new PersonDetails(name, age, color);

        persons.push(me);

        question = prompt('Inserir outro registro (sim / nao)?');
    }

    console.log(`Quantidade variável de registros: ${persons.length}`);

    me.forEach(special);

    function special(item, index) {
        console.log('Index: ' + index + ' => Item: ' + item + '\n');
    }
});
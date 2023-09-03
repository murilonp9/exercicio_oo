const carroDoJoao = {
    modelo: "Fiesta",
    fabricante: "Ford",
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vruum");
    }
}

const carroDaMaria = {
    modelo: "Ka",
    fabricante: "Ford",
    anoModelo: 2022,
    anoFabricacao: 2021,
    acelerar: function() {
        console.log("vruum");
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford", 2022, 2021);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = "murilo"
const idade = "27"
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

function exibeAtributo(nomeDoAtributo) {
    console.log(pessoa[nomeDoAtributo]);
}

exibeAtributo('nome');

pessoa.sobrenome = 'undefined';

Object.freeze(pessoa);

pessoa.nome = 'joao';

if (pessoa['sobrenome']) {
    console.log("A pessoa tem um sobrenome");
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));

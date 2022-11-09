//Declarações

var name //variável global
let name2 //variável de bloco
const name3 = 0 //constante (não é possível alterar seu valor)

let meuNome = "euclides"
console.log(meuNome)
meuNome = 21
console.log(meuNome)
meuNome = "Neto"
console.log(meuNome) //Tipagem dinâmica

//Global

//Hoisting, funciona somente com var (varival declarada posteriormente em um bloco menor, pode ser usada em qualquer local)
console.log('Variável existe aqui? ', idade)

{//Scopo (Bloco de código)
    //local
    var idade = 21
    console.log('Variável existe aqui? ', idade)
}
console.log('Variável existe aqui? ', idade)

//Local

//A variável se limita ao scopo
let idade2 = 18
console.log('Variável existe aqui? ', idade2)

{//Scopo (Bloco de código)
    //local
    let idade2 = 19
    console.log('Variável existe aqui? ', idade2)
}

console.log('Variável existe aqui? ', idade2)


//Objeto

const human = {
    name: "Euclides Neto",
    age: 21,
    weight: 70,
    isAthlete: false,
    encode: function encoding(){
        console.log(`Eu estou codificando.`)
    }
} //Object

console.log("O humano " +  human.name + " tem " + human.age + " anos.") //Concatenação
console.log(`O humano ${human.name} tem ${human.age} anos.`) //Interpolação


//Array

const animals = [
    "Elefante", //0
    "Gato", //1
    "Leão", //2
    "Cachorro", //3
    {
        name: "Morfeu",
        age: 3,
        weight: 4
    } //4
]
//tamanho 5
console.log(animals[4].name)
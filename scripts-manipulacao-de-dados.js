//Convertendo dados

//Convetendo String para number e de number para String
console.log(Number('5') + 20)
console.log(String(25) )

//Contar caracteres
let myName = 'Neto'
console.log(myName.length)

//Transformar toda a string em Maiúsculo ou Minúsculo
let anotherName = 'Camilla'
console.log(anotherName.toUpperCase())
console.log(anotherName.toLowerCase())

//Convertendo para inteiro
let decimalNumber = 19.11
console.log(parseInt(decimalNumber))

//Convertendo para Decimal
let intergerNumber = 25
console.log(parseInt(decimalNumber))

//Trabalhando com casas decimais
let bigDecimalNumber = 19.11
console.log(parseInt(bigDecimalNumber))
console.log(parseInt(bigDecimalNumber))

//Precisão Numérica
let anotherNumber = 210/9
console.log(anotherNumber.toPrecision(3))

//Manipulando arrays

//Colocando a frase em um array
let newPhrase = "Helo world =)"
let phraseToArray = newPhrase.split(" ")
console.log(phraseToArray)

//Convertendo de array para string
let arrayToString = phraseToArray.join(" ").toLowerCase()
console.log(arrayToString)

//Manipulando Array e Strings

//Verficar se contém palavras ou letras
let stringInclude = "From Zero to Hero, do Zero ao Hero"
console.log(stringInclude.includes("Hero"))

//Objetos

let ArrayInclude = [
  "FromZeroToHero",
  "Veem",
  "ne mim",
  "Camilla",
  {
    first: "Zero",
    last: "Hero"
  }
]
console.log(ArrayInclude.includes("camilla"))

//Verificar o começo da string
console.log(stringInclude.startsWith("From"))

//Verificar o final da string
console.log(stringInclude.endsWith("."))

//Criar uma string em um array de caracter
let toArray = "Quem ama o bootcamp From Zero to Hero?"
console.log(Array.from(toArray))

//Manipulando arrays

const animals = ["🐔", "🐶", "🐘", "🦒", "🦁"]
console.log(animals)

//Adicionar item ao fim do array
console.log(animals.push("🐀"))
console.log(animals)

//Adicionar item ao começo do array
console.log(animals.unshift("🐷"))
console.log(animals)

//Remover item do fim do array
console.log(animals.pop())
console.log(animals)

//Remover item do começo do array
console.log(animals.shift())
console.log(animals)

//pegar parte do array

//Sem modificar o array
console.log(animals.slice(0,3))
console.log(animals)

//Remover 1 ou mais itens do array
animals.splice(1,3)
console.log(animals)

//Encontrar a posição no array
let index = animals.indexOf("🦁")
console.log(index)
animals.splice(index, 1)
console.log(animals)
//Operador incremento e decremento (++ --)

let incrementNumber = 4
console.log(incrementNumber)

//incremento
incrementNumber++ //5
console.log(incrementNumber)
++incrementNumber //6
console.log(incrementNumber)

let decrementNumber = 50
console.log(decrementNumber)

//decremento
decrementNumber-- //49
console.log(decrementNumber)
decrementNumber-- //48
console.log(decrementNumber)
decrementNumber-- //47
console.log(decrementNumber)

//Operadores aritméticos (+ - * / %)
let nota1 = 10
let nota2 = 7.5
let nota3 = 5.5
let nota4 = 3.5
let avg = (nota1 + nota2 + nota3 + nota4)/4
console.log(Number(Math.floor(avg)))

//Operadores Relacionais e de igualdade
let numberRelation1 = 40
let numberRelation2 = 40

//Valores diferentes (!=)
console.log(numberRelation1 != numberRelation2)

//Valores e tipos diferentes (!==)
console.log(numberRelation1 !== numberRelation2)

//Valores iguais (==)
console.log(numberRelation1 == numberRelation2)

//Valores e tipos iguais (===)
console.log(numberRelation1 === numberRelation2)

//Operador de atibuição
let newNumber = 20

newNumber += 40
newNumber *= 3
newNumber -= 60
newNumber /= 6
newNumber %= 5
console.log(newNumber)

//Operadores condicionais (Ternário)
//(condicional) ? true : false

let value = 24
let anotherValue = 32

const newCondition = value >= anotherValue ? 'Isso é verdade'
                    : value <= anotherValue ? 'A segunda resposta é verdade'
                    : 'Estão todas falsas'
console.log(newCondition)
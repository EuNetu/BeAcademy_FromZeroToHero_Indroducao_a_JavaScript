//if e else (> < == === != !==)(&& || !)
let num = 10
let num2 = 20
let isAdmin = true

if(num < 10){
  console.log("Sou maior")
}else if(num < 10 && num2 == 20){
  console.log('Segunda resposta verdadeira')
}else{
  console.log('Resposta falsa')
}

//Switch Case
let myExpression = 'x'

switch (myExpression) {
  case 'a':
    console.log('Apertou a')
    break;
  case 'b':
    console.log('Apertou b')
    break;
  case 'c':
    console.log('Apertou c')
    break;

  default:
    console.log('Você apertou outra tecla', myExpression)
    break;
}

//Calculadora
function calc(num1, operator, num2) {
  let resultado

  switch (operator) {
    case '+':
      resultado = num1 + num2
      break;
    case '-':
      resultado = num1 - num2
      break;
    case '*':
      resultado = num1 * num2
      break;
    case '/':
      resultado = num1 / num2
      break;
  
    default:
      console.log('Não entendi')
      break;
  }

  return resultado
}
//Chamada da função com switch
console.log(calc(7, '*', 3))

//Throw e Try Catch

//Saber a idade
function myAge(myage) {
  if(!myage){
    throw 'VocÊ precisa colocar a idade!'
  }

  console.log('Eu executei depois do erro!')
}

try{
  myAge(20)
  console.log('Já tratei e deu certo')
} catch(error){
  console.log(error)
}

console.log('Programa continua')
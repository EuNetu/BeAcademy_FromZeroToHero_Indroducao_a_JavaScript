//Criação de uma função
function myFirstFunction() {
  console.log("Hello World");
}
//Chamada da função
myFirstFunction();

//Função com parâmetros (função de soma)
function sum(number1, number2) {
  console.log(number1 + number2);
}
//Chamada da função com argumentos
sum(10, 11);

function myFunctionWithReturn(number1, number2) {
  let total = number1 + number2;
  return total;
}
//Utilizando o retorno da função
console.log(myFunctionWithReturn(10, 11));

//Uso na prática (Exemplo restaurante)
function makeDish(food1, food2, food3, food4) {
  return `Meu prato de comida tem ${food1}, ${food2}, ${food3}, ${food4}`;
}
//Atribuição do retorno de uma função em uma variável
const dish = makeDish("macarrão", "purê", "frango", "feijão");
console.log(dish);

//Arrow Function
const myArrowFunction = (number1, number2) => {
  let total = number1 + number2;
  return total;
};
const resultado = myArrowFunction(15, 6);
console.log(resultado);

//Função Anônima
(function () {
  console.log("Sou anônima");
})(); //Autoexecução

//Exemplo prático de uma função anônima
setTimeout(function () {
  console.log("Levará 3 segundos para executar essa função");
}, 3000);

//Exemplo prático de uma função anônima (Com arrow function)
setTimeout(() => {
  console.log("Levará 3 segundos para executar essa função");
}, 3000);

//Análise de scopo utilizando função
let topic = "Estudar";
function changeTopic() {
  topic = "Escutar música";
  return topic;
}
console.log(topic); //Saída => Estudar
console.log(changeTopic()); //Saída => Escutar música

//Callback
function myFuctionWithCallback(callback) {
  console.log("Início da função");

  callback(9, 12);

  console.log("Final da da função");
}
//Passando a função como argumento
myFuctionWithCallback((number1, number2) => {
  return console.log(number1 + number2);
});

//Function construct
function Sum(number1, number2) {
  this.number1 = number1;
  this.number2 = number2;
  this.calc = function (number1, number2) {
    return (total = this.number1 + this.number2);
  };
}
//intanciação de Sum
const math = new Sum(12, 13);
console.log(math.calc()); //Saída => 25

//Fuction construct (Exemplo presente no JS)
const data = new Date().getDate();
console.log(data);

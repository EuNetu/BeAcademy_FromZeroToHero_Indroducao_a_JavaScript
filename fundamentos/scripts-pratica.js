var person; // 1 - Declaração da variável

// 2 - Ela é do tipo undefined

person = {
  name: "Neto",
  age: 21,
  weight: 70.3,
  isAdmin: true,
  isAMan: true,
};

//4 - É do tipo Object

let human = {
  name: "Neto",
  age: 21,
  weight: 70.3,
  isAdmin: true,
  isAMan: true,
};

console.log(`O humano ${human.name} tem o peso ${human.weight} kg.`);

let humans = [human];

console.log(humans[0]);

let newHuman = {
  name: "Camilla",
  age: 19,
  weight: 60.8,
  isAdmin: false,
  isAMan: false,
};

human[1] = newHuman;

//9 -

//a) undefined

//b)
//undefined
//2
//undefined

//c)
//Erro, pois a variável não está definida
//3
//Erro, pois a variável não está definida

//d)
//10
//Erro, pois declarações com const não podem ser alteradas

//For

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//While
let interator = 1;
while (interator <= 20) {
  console.log(interator);

  interator++;
}

//For OF
let listNames = ["Neto", "Camilla", "Sophia", "Dante"];
for (names of listNames) {
  console.log(names);
}

//For in
let animal = {
  name: "leão",
  weight: 200,
  age: 4,
};
for (item in animal) {
  console.log(animal[item]);
}

//For in com array
let myFamily = ["Neto", "Camilla", "Sophia", "Dante"];

for (const item in myFamily) {
  console.log(myFamily[item]);
}

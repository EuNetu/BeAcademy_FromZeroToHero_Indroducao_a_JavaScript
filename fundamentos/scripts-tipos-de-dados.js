//Comentário em linha

/* 
    Comentário em bloco
*/

console.log(`Uso de "Template" 'strings'`)

console.log(12) //Integer
console.log(24.5) //Float
console.log(12*24/4) //calc
console.log(Infinity) //infinito
console.log(50+(53*4.5)) //calc com número decimal
console.log(Math.round(50+(53*4.5))) //calc com número arredondado
console.log(42 == 24) //bool
console.log(null === undefined) //bool
console.log({
    marca: 'FIAT',
    largura: '550cm',
    peso: 1,
    velocidade: (90 * 200) * 2,
    andar: function(params) {
        console.log(`Sua velocidade é  de 200`)
    },
    possuiAr: true

}) //Object
console.log([
    "Bolacha", //0
    "Coca-cola", //1
    "Verduras", //2
    "Água" //3
]) //Array

function x(texto){
  console.log(texto);
}
x("Olá");

//expressão de função
// console.log(soma(1,2)) Não funcionara por hoisting
const soma = function(num1, num2){return num1 + num2}
console.log(soma(1,2));

//ARROW FUNCTION
const apresentar = nome => `Meu nome é ${nome}`;
console.log(apresentar("Matheus"));
const somaDe2 = (num1, num2) => num1 + num2;
console.log(somaDe2(5, 4))

//ARROW FUNCTION COM + DE 1 LINHA

const somaDe3 = (num1, num2, num3) => {
  return num1 + num2 + num3;
}

console.log(somaDe3(5,4,235))
let numeros = [21, 24, 53, 11]

const somaTudo = numeros.reduce(function(acum, atual){
  return atual + acum
},0)
console.log(somaTudo)

//A função de callback pode ser declarada em reduce de 3 maneiras
// Dentro da função através por arrow function ou função anonima e fora da função e apenas declarar.  

// function soma(acum, atual){
//   return atual + acum 
// } 
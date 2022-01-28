let numeros = [21, 24, 53, 11]

const somaTudo = numeros.reduce(function(acum, atual){
  return atual + acum
},0)
console.log(somaTudo)

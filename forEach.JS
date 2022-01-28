const notas = [10, 8, 6.5, 7.5]
let soma = 0;

notas.forEach((nota) => {
  soma += nota
})

let media = soma/notas.length;
console.log(media)

//MAP 

const pontoExtra = notas.map((nota) => nota >= 10 ? nota : ++nota)

console.log(pontoExtra)


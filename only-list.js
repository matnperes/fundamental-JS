const pessoas = [{
  nome: "Matheus",
  peso: 77,
  idade: 19,
  anoNasc: "2002",
  comidaPref: "Japa",
  cpf: "54543055",
  colecao: ["Tenis", "perfume"],
}, 
{
  nome: "José",
  peso: 50,
  idade: 15,
  anoNasc: "2007",
  comidaPref: "pizza",
  cpf: "52156184",
  colecao: ["Games", "Cards"],
}, 
]

// pessoas.forEach(pessoa =>{
//   console.log(`${pessoa.nome} tem coleção de:  ${pessoa.colecao}`)
// })

let colecoes = [... pessoas[0].colecao, ... pessoas[1].colecao ]
console.log(colecoes)

const jsonPessoas = JSON.stringify(pessoas)
const converteJSON = JSON.parse(jsonPessoas)

console.log(jsonPessoas)
console.log(converteJSON)
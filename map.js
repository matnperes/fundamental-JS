const notas = [10, 8, 6.5, 7.5]
const pontoExtra = notas.map((nota) => nota >= 10 ? nota : ++nota)

console.log(pontoExtra)

//-------------

const nomes = ["NeIDe FerreIra", "JORGE Washington", "ZÉ CARLos" ]
const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase())

console.log(nomesMaiusculos)

let nome = "Matheus"

console.log(nome[2])
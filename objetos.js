const obj = {
  nome: "Matheus",
  idade: 19,
  sexo: "Masc",
  peso: 73,
}

console.log(`As três primeiras letras do nome do cliente são: ${obj.nome.substring(0, 3)}`)
// o metodo substring() recebe dois parametros  de incide inicio e fim e retorna os elementos contidos no indice indicado 
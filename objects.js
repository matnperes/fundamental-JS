// const obj = {
//   nome: "Matheus",
//   idade: 19,
//   sexo: "Masc",
//   peso: 73,
// }

// console.log(`As três primeiras letras do nome do cliente são: ${obj.nome.substring(0, 3)}`)
// o metodo substring() recebe dois parametros  de incide inicio e fim e retorna os elementos contidos no indice indicado


const pessoa = {
  nome: "Matheus",
  idade: 19,
  mail: "email@email.com",
  fone: ["091122322", "271834281"]
}

pessoa.pais = [{
  nome: "Josiane",
  idade: 31.,
  parentesco: "Mãe"
}];

pessoa.pais.push({
  nome: "Robson",
  idade: 40,
  parentesco: "Pai"
})

console.table(pessoa.pais)

// pessoa.fone.forEach((qq, i) => {
//   console.log(qq)
// })
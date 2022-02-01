//Objeto é uma coleção de propriedades, que nada mais é do que a relação entre chave (nome) e valor. O valor pode ser uma função, neste caso estaremos trabalhando com métodos de um objeto. Além dos métodos e propriedades que criamos, nativamente o JavaScript fornece alguns métodos e propriedades (em alguns casos, fundamentais para a construção de algoritmos).



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
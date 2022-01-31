const pessoa = {
  nome: "Matheus",
  peso: 77,
  idade: 19,
  anoNasc: "2002",
  comidaPref: "Japa",
  cpf: "54543055",
  correr: function(){
    this.peso--
  },
  colecao: [""],
  addLista: function(chave, valor){
    pessoa.colecao.pop()
    this[chave].push(valor)//this faz referencia ao objeto principal, aqui vamos add um valor a chave chamada como parametro
  }
}

let relatorio = "";

for (let item in pessoa){
  if(typeof pessoa[item] === "object" || typeof pessoa[item] === "function"){
    continue
  } else {
    console.log(`
    ${item} ===> ${pessoa[item]}
    `)
  }
}

console.log(typeof pessoa.colecao)

// pessoa.addLista("colecao", "Tenis")
// pessoa.addLista("colecao", "Perfume")


// console.log(pessoa)


// console.log(pessoa.peso)
// pessoa.correr()
// console.log(pessoa.peso)



// const pessoa2 = Object.create(pessoa);
// console.log(pessoa)
// console.log(pessoa2)


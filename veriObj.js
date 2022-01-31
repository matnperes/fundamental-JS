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

function seguro(obj){
  const chavesObj = Object.keys(obj);// também existe Object.values() para valores e entries() que retorna uma lista com as chaves e propriedades
  if(chavesObj.includes("cpf")){
    console.log(`Oferecer seguro para ${obj.nome}`)
  }
}
seguro(pessoa)
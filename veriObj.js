class Pessoa{
  constructor(nome, peso, idade, anoNasc, comidaPref, cpf){
    this.nome = nome;
    this.peso = peso;
    this.idade = idade;
    this.anoNasc = anoNasc;
    this.comidaPref = comidaPref;
    this.cpf = cpf
    this.colecao = [""];
  }
  correr(){
    this.peso--
  }
  addLista(chave, valor){
    Pessoa.colecao.pop()
    this[chave].push(valor)//this faz referencia ao objeto principal, aqui vamos add um valor a chave chamada como parametro
  }
  
}

const matheus = new Pessoa("Matheus", 75, 19, 2002, "Japa", "84290247");
const luana = new Pessoa("Luana", 65, 20, 2001, "Feijão", "")

function seguro(obj){
  var chavesObj = Object.keys(obj);// também existe Object.values() para valores e entries() que retorna uma lista com as chaves e propriedades
  if(chavesObj.includes("cpf") && obj.cpf != false){
    console.log(`Oferecer seguro para ${obj.nome}`)
  }
}
seguro(matheus);
seguro(luana)


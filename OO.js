class Pessoa{
  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }
}

class Programador extends Pessoa{
  constructor(nome, idade, linguagem){
    super(nome,idade)
    this.linguagem = linguagem
  }
}

const novoDev = new Programador("Matheus", 19, "JS")

console.log(novoDev)
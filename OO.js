class Pessoa{// classe sempre começando com letras maiusculas
  constructor(nome, idade, peso){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso
  } // se for utilizado algum método, devera ser criado fora de propriedades 
  correr(){
    peso--
  }
}

class Programador extends Pessoa{
  constructor(nome, idade, linguagem){
    super(nome,idade)
    this.linguagem = linguagem
  }
} 

const matheus = new Pessoa("Matheus", "19", 75.5)
console.log(matheus)


const novoDev = new Programador("Matheus", 19, "JS") 
novoDev["peso"] = 15

console.log(novoDev) 
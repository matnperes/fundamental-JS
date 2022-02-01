const string = "ola"
console.log(Number(string))

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let objeto = {
  nome: "Matheus",
  idade: 19,
  Sx: "Masc"
}

console.table(objeto)

function cumprimentar(){
  return 'Oi gente!'
 }
 
 function cumprimentaPessoa(nomePessoa) {
  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
 }
 
 cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

 
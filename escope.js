//const = constante e tem escopo de bloco ou seja não sai por nada
//let = variavel e tem escopo de bloco ou seja não sai por nada
//var = variavel e tem escopo global a não ser que esteja dentro de uma função
//Uma variavel declarada esta relacionada com o contexto de execução as não declaradas sempre são globais

// if(true){
//    var cachorro = "Mile"
// }

function oCachorro(){
  cachorro = "Simon"; //não declarou, então criou uma variavel global
  let gato = "natanael"
}
oCachorro()

//console.log(gato)
console.log(cachorro)

var pato = null;

console.log(typeof pato)


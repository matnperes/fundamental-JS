// let array = []
// array.push("hi")
// console.log(array)
// array.push("hello") // add a element in the last index of array
// console.log(array)
// array.pop()
// console.log(array)

// let types = [{name: "Matheus", age: 19, species: "human"}, {name: "alek", species: "dog"}]
// console.table(types)
// types.pop()
// types.push({name: "Jane", age: 22, species: "human"})
// console.table(types)

let array = [0,,1,,,]
console.log(array.length)
console.log(array[1])
console.log(array)

let alunos = ["Matheus", "João", "Patricia", "Luana", "Jorge", "Pedro", "Mariana", "Laís"]
let metade1 = []
let metade2 = []

for(var i=0; i < alunos.length/2; i++){
  metade1.push(alunos[i])
}
console.log(metade1)

for(var a= alunos.length/2; a <alunos.length; a++){
  metade2.push(alunos[a])
}
console.log(metade2)
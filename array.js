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

// let array = [0,,1,,,]
// console.log(array.length)
// console.log(array[1])
// console.log(array)

// GET ELEMENTS DE ARRAY

// let students = ["Matheus", "João", "Patricia", "Luana", "Jorge", "Pedro", "Mariana", "Laís"]
// let metade1 = [] HARD
// let metade2 = []
// for(var i=0; i < alunos.length/2; i++){
//   metade1.push(alunos[i])
// }
// console.log(metade1)
// for(var a= alunos.length/2; a <alunos.length; a++){
//   metade2.push(alunos[a])
// }
// console.log(metade2)

// let half1 = students.slice(0, students.length/2);
//                    //start   //end              
// let half2 = students.slice(students.length/2)

// console.log(`${half1}\n${half2}`)

// CHANGE ARRAY WITH SPLICE

// let animals = ["gato", "peixe", "periquito", "baleia"]

// Add more elements 
// animals.splice(1, 0, "Tartaruga");
//     where?, how many remove?, "What?"
// console.log(animals)
// animals.splice(1, 3, "elefante" );
// console.log(animals)

// CONCAT ARRAYS
// let girls = ["Joana", "Patricia", "Rafaela", "Bianca"]
// let boys = ["Pedro", "Gustavo", "Anderson", "Felipe"]

// let all = girls.concat(boys)
// console.log(all)

//ARRAY TWO DIMENSIONS

let id = [32421, 34511, 41241, 24112]
let students = ["Spencer", "Carol", "Sam", "Rachel"]

// console.log(`Hi, ${classRoom[1][2]}! your id in university is ${classRoom[0][2]}.  `)
// console.log(students.includes("Spencer"))

let classRoom = [id, students]
// FIND IN ARRAYS

const findStudent = (nameStudent) => {
  if(classRoom[1].includes(nameStudent)){
    let index = classRoom[1].indexOf(nameStudent)
    return `Hi, ${classRoom[1][index]} your id is ${classRoom[0][index]}`
  }else{
    return `Aluno não encontrado`
  }
}
console.log(findStudent("Sam"));

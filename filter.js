let carros = ["gol", "polo", "onix", "up"]
let motor = ["1.0", "1.6", "1.4", "1.0"]

const carrosFortes = carros.filter((_, indice) => motor[indice] != "1.0")
console.log(carrosFortes)
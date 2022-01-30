const obj = {
  nome: "Matheus",
  idade: 19,
  sexo: "Masc",
  peso: 73,
  andar: () => {
    this.peso - 1
  }
}
console.log(obj.peso)
obj.andar()
console.log(obj.peso)
function Auto(marca, modelo, ano, cor){
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.cor = cor;
  this.pintar = function(cor){
    this.cor = cor
  }
 }

 function Moto(marca, modelo, ano, cor){
   Auto.call(this,marca,modelo,ano,cor)
 }

const hornet = new Moto("honda", "hornet", "2015", "preto")
console.log(hornet)
Moto.prototype.cilindradas = this.cilindradas

const pcx = new Moto("honda", "pcx", "2015", "preto")
pcx.cilindradas = "150"
console.log(pcx)

const civic = new Auto("Honda", "Civic", 2012)
console.log(civic)


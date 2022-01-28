console.log('Hellow world');
console.log(1/0)
function ganhoPorHora(salario, horasTrabalhadasNoMes) {
  const salarioHora = (salario / horasTrabalhadasNoMes); 
  // return Math.round(salarioHora); retornará o inteiro mais próximo
  // return salarioHora.toFixed(2); com o toFixed, retornará as casas decimais definida e para cima
  const formatado = salarioHora.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'});
  return formatado;
}
console.log(ganhoPorHora(4000, 140))

const hashtag = '\u0023'
console.log(hashtag)

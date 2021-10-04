let numeros = [2,4,6];

let dobroDeNumeros = numeros.map(function(num) {
return num*3;  
});

console.log(dobroDeNumeros);

let frutas = ["Uva", "Maçã", "Cereja", "Morango", "Abacaxi"]

let moraNoMar = frutas.find(function (fruta) {
return fruta == "Abacaxi";  
});

console.log(moraNoMar);

let idades =[22,8,14,17,30];
let maiores = idades.filter(function(idade){
  return idade >=17;
});

console.log(maiores);

let numeros2 = [5,7,16];
let soma = numeros2.reduce(function(pilha,numero){
  return pilha + numero;
});

console.log(soma);

let paises = ["Argentina", "Brasil", "Colombia"];
paises.forEach(function(pais){
  console.log(pais);
});





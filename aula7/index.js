let n1 = 15
let n2 = 11
console.log(n1.toString() + n2); //Vai concatenar pois é umja String

//No caso de quando se há um número mt grande, se pode fazer assim para marcar qts casas decimais quiser
let n3 = 10.648364643
console.log(n3.toFixed(2))

let num1 = 0.7
let num2 = 0.1

num1 += num2
num1 += num2
num1 += num2

num1 = parseFloat(num1.toFixed(2))// O parseFloat e o Number resolvem o valor para ser inteiro
console.log(Number.isInteger(num1))
console.log(num1)
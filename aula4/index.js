// Operadores Aritméticos +, -
const num1 = 10
const num2= 5
const num3 = 15
console.log(num1 * num2)
console.log(num1 ** num2)// Elevação ao quadrado
console.log(num1 % num2)//Pega o resto da conta

console.log((num1 + num2) * num3) //O parênteses dá a precedência de quem estiver dentro dele

//Incremento ++ e Decrememto --

let contador = 0
const passo =2 

contador = passo + contador;
console.log(contador)
contador = passo + contador;
console.log(contador)
contador = passo + contador;
console.log(contador)

//ouuu

contador+= passo;// contador = contador + passo

//Nan - Not a number. ParseInt faz conversão para inteiro, ParseFloat o deixa quebrado
const n1 = 10
const n2 ='5.1'
console.log( n1 + n2)
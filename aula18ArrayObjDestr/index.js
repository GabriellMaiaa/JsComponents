const numeros = [100, 200, 300, 400, 500, 600, 700 , 800]
const [primeiro, segundo, ...resto] = numeros;/// Esse tres pontos pegam o RESTO
console.log(primeiro, segundo)
console.log(resto)
//Ouitras formas
const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);

//Em relação a Arrays dentro de Arrays
//                  0        1         2
//              0  1  2   0  1  2
const teste = [ [0, 1, 2], [3, 4, 5] ,[6, 7, 8] ];
// Chame o número 7 na destruturação
console.log(teste[2][0])
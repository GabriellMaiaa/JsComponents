const numeros = [100, 200, 300, 400, 500, 600, 700 , 800]
const [primeiro, segundo, ...resto] = numeros;/// Esse tres pontos pegam o RESTO
console.log(primeiro, segundo)
console.log(resto)
//Ouitras formas
const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco)
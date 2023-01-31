//Um pouco mais sobre Strings

let umaString = '"Um texto"'//Você pode por aspas dentro de aspas 
console.log(umaString)

//As strings são determinadas com índices
//           0123456789
let teste = 'Qualquer texto'
console.log(teste[5])

console.log(`${umaString} e ${teste}`)
console.log(umaString.indexOf('x'))//Acha a posição do index de que vc procura

let umTexto = 'Um texto qualquer'
console.log(umTexto.replace('qualquer', 'camarada')) //Substitui baseado na palavra escolhida

console.log(umTexto.length)

console.log(umTexto.slice(2,6))//Pega a parte baseada nos indices
console.log(umaString.split('q'))
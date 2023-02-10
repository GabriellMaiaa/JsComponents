// For - Estrutura de repetição
//Var de indicação, condição, e o resultado
for (let i = 0; i <= 50; i++ ) {// O laço de repetição é baseado n as condições impostas
    console.log(i)
}
//VocÊ pode manipular de quanto ele pula = i += 10, e começar de qualquer numero

for (let i = 0; i >= 10; i++) {
    const par = i % 2
    console.log(i, par)
}

//O For com Arrays
const frutas = ['Maçã', 'Uva', 'Banana'];

for(let i = 0; i < frutas.length; i++) {
    console.log(`As frutas são ${frutas[i]}`)
}
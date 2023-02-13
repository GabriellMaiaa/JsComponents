const numeros = [1, 2, 3, 4, 5 ,6, 7];
// Continue pula a condição e continua pra prox iteração
// Break sai do laço
for (let i in numeros) {// FOR IN
    let numero = numeros[i]
    //console.log(numero)

//O continue faz com que aquilo que esteja na condição e esteja em código
// abaixo da qustão, não apareça no console
    if (numero === 3) {
        console.log('PULEI O NÚMERO 3')
        continue;
    }
    if (numero === 7 ) {
        console.log('O 7 foi encontrado, fim de laço')
        break; // O BREAK faz o laço acabar quando a condição é feita
    }

    console.log(numero)
}




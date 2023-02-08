//O if pode ser usado sozinho
// O Else necessita de um if antes
//Posso ter VÁRIOS Else IF, mas só um Else

const hora = 29;
if(hora >= 0 && hora <= 11) {// Hora entre 0 e 11h
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17){ // O ELSE IF serve quando vocÊ quer que tenhya mais uma condição
    console.log('Boa tarde!')
} else if(hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá, este horário não existe!')
}
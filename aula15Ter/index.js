// Se consiste em ? e o :
//Serve para substituir o IF
const pontuacao =999;

/*if(pontuacao >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuário normal')
}*/

const nivelUsuario = pontuacao >= 1000 ? 'Usuário VIP' : 'Usuário Normal'
console.log(nivelUsuario)
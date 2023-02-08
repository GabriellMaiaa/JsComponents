// Operadores de Lógicos
/**
 * && - AND, E -> As duas expressões tem que ser verdadeiras
 * || - OR, OU -> Uma ou outra precisa ser verdadeira
 * ! - NOT, NEGAÇÃO
 */
const expAnd = true && true && false;
console.log(expAnd)
const expOr = true || false; //Um ou outro precisa ser true
console.log(expOr)

const nome = 'Gabriel Maia';
const idade = 18;
 if(nome == 'Gabriel Maia') {
    console.log('O nome está certo')
}
const vaiLogar = nome == 'Gabriel Maia' && idade === 17;
console.log(vaiLogar)
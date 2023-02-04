function saudacao (nome) {
    return(`Bom dia senhor ${nome}!`)  //Se põe sua mensagem no retorno da função
}
const variavel = saudacao('Gabriel Maia');
console.log(variavel)

function soma (x, y) {
    const resultado = x + y ;// Não é possível alterar variaveis de dentro das funções
    return resultado;
}
console.log(soma(2, 4))
const resultado = soma(14,4);
console.log(`A idade de Gabriel é ${resultado}`);
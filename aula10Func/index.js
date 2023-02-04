function saudacao (nome) {
    return(`Bom dia senhor ${nome}!`)  //Se põe sua mensagem no retorno da função
}
const variavel = saudacao('Gabriel Maia');
console.log(variavel)

function soma (x = 1, y = 1) {// Se fizer isso, quando vier sem parâmetros, ESSES serão os números PADRÕES
    const resultado = x + y ;// Não é possível alterar variaveis de dentro das funções
    return resultado;
}
console.log(soma(2, 4))// Se não for preenchido os argumento dará erro na função
const resultado = soma(14,4);
console.log(`A idade de Gabriel é ${resultado}`);

const raiz = (n) => { //Arrow function
    return n ** 0.5 //Para ver a Raiz quadrada
};
console.log(raiz(144))

//Quando só houver um parâmetro e um argumento, a ARROW FUNCTION FICA ASSIM:
const raize = n => n ** 0.5;
console.log(raize(225))
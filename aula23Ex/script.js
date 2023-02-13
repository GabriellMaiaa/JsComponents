// Escreva uma função chamada ePaisagem que recebe
// dois argumentos, largura e altura de uma img
// Retorne true se a img estiver no modo paisagem

function ePaisagem (largura, altura) {
    return largura > altura ? true : false;
}
console.log(ePaisagem(1080, 1920))

//const ePaisagem = (largura, altura) => {largura > altura ? true : false;}
//Versão ARROW FUNCTION
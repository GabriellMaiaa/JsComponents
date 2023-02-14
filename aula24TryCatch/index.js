// Tratamento de ERRO - TRY E CATCH

try {
    console.log('Não existo');
} catch(erro) {
    console.log('Testee');
}
function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X e Y precisam ser números')// Lançar o erro que pode ocorrer
    }
    return x + y
}
try {// Como capturar o Erro
    console.log(soma(10, 45));// Se n ocorrer erro no try, o catch pegará
} catch(error) {
   console.log(error) 
}

// Tratamento de ERRO - TRY E CATCH

try {
    console.log('Não existo');
} catch(erro) {
    console.log('Testee');
}
function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X e Y precisam ser números')
    }
    return x + y
}
try {
    console.log(soma('10, 45));
} catch(error) {
   console.log(error) 
}

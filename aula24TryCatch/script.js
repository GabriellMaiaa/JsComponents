try {// É executada quando não há erros
    console.log('Abri um arquivo')
    console.log('Fechei o arquivo')
} catch(e) {
    console.log('Tratando o erro')
} finally {// é sempre executado no final
    console.log('FINALLY: Eu sempre sou executado')
}

function retornaHora(data) {
    if(!(data instanceof Date)) {// Se for algo diferente da instância de uma DATA
        console.log('   Não é')
    }
}
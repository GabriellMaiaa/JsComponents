try {// É executada quando não há erros
    console.log('Abri um arquivo')
    console.log('Fechei o arquivo')
} catch(e) {
    console.log('Tratando o erro')
} finally {// é sempre executado no final
    console.log('FINALLY: Eu sempre sou executado')
}

function retornaHora(data) {
    if(data && ! (data instanceof Date)) {// Se for algo diferente da instância de uma DATA
        throw new TypeError('Esperando instância de Date')
    }
    if(!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR')
}
const hora = retornaHora();
console.log(hora)
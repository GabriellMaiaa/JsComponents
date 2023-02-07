//Objetos básico
const array = [1,2,3]
array.push('Gabriel')
console.log(array)

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Castro'
}
console.log(pessoa1)
//Função de criar objetos
function criaObjetos (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
const pessoa2 = criaObjetos('Gabriel', 'Maia', 18);
console.log(pessoa2)
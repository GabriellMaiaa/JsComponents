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
///////////////////////
const pessoa3 = {
    nome: 'Gabriel',
    sobrenome: 'Ribeiro Maia',
    idade: 23,

    fala(){
        console.log(`O meu nome é ${this.nome} ${this.sobrenome}, e tenho ${this.idade}`)
    },
    aumentaIdade(){
        this.idade++//Vai adicionar mais um
    }
};
pessoa3.fala();
pessoa3.aumentaIdade()
pessoa3.fala();
pessoa3.aumentaIdade()
pessoa3.fala();
pessoa3.aumentaIdade()
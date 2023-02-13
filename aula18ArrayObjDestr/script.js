const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Maia',
    idade: 18,
    endereco: {
        rua: 'São João',
        numero: 54
    }
}
//Atribuição via desestruturação
const {nome = '', sobrenome = ''} = pessoa;// Você traz as opções em forms de objeto
console.log(nome, sobrenome)

// Se vocÊ quiser trazer algumas opções do objeto dentro do objeto, se faz assim :
const {endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, numero, endereco)// se nquiser que apareça tudo, só adicionar o nome do obejto ao fim

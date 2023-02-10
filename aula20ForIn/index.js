//Vetor - Array de somente uma sequência
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
// FOR IN abaixo, é interessante em arrays de objetos
// Ele lê os índices(vetor) ou chaves do objeto
for(let index in frutas) {
    console.log(frutas[index])
}
// Acessando com o for in OBJETOS

const pessoa = {
    nome: 'Gabriel',
    sobrenome: "Maia",
    idade: 19
}
for (let i in pessoa) {
    console.log(pessoa[i])// Com objetos é da mesma forma
}// Se quiser acessar somente o nome da opção, basta deixar só o I
console.log(pessoa.nome)

for (let argumento in pessoa) {// Quando você quer mesclar e chamar o argumento e o conteúdo
    console.log(argumento, pessoa[argumento])
}
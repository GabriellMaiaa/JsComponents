//São funções que retornam objetoss
function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome
    }
}
const p1= criaPessoa('Gabriel', 'Maia')
console.log(p1)
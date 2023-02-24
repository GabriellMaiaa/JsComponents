//São funções que retornam objetoss
// Factory Functions - Dá pra por funções dentro dos objetos
function criaPessoa(nome, sobrenome,a , p) {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} está falando sobre ${assunto}`
        },
        altura: a,
        peso:p,
        get imc() {// O GET torna o imc funcção como se fosse um ATRIBUTO.
            const indice = this.peso / (this.altura ** 2);
            return indice;
        }
    }
}// O THIS serve para chamar aquele argumento do objeto que é chamado
const p1= criaPessoa('Gabriel', 'Maia',1.90, 90 );
console.log(p1.imc)// O get o tornou um atributo normal

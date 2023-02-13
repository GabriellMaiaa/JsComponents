let i = 0; // Diferente do FOR, a variável é criada fora

while (i <= 10) {
    console.log(i)
    i++; // Se não tiver o i++ o laço vai ser infinito
}

function aleatorio(min, max) {// Gera um número aleatório
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}
let r = aleatorio(1, 30)
console.log(r)

const min=1;
const max=50;

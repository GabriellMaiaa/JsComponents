const elementos = [
    {tag: 'p', texto: 'Frase teste blabvla'},
    {tag: 'div', texto: 'Frase 2 meu parceiroo'},
    {tag: 'H1', texto: 'Frase 3 continuando'},
]

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];// Vai percorrer os elementos do Array
    console.log(tag, texto)
}
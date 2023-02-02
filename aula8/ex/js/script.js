const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Seu número -2 é ${numero -2 }</p>`
texto.innerHTML = `<p> Raiz quadrada ${numero ** 0.5 }</p>`
texto.innerHTML = `<p>${numero}inteiro ${Number.isInteger(numero)}</p>`
texto.innerHTML = `<p> Arredondando para baixo é ${Math.floor(numero)}</p>`
texto.innerHTML = `<p> Arredondando para baixo é ${Math.ceil(numero)}</p>`
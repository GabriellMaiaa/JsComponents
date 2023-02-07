function meuEscopo () {
    const form = document.querySelector('.form');

    form.onsubmit = function(e) {
        e.preventDefault()//Previne o comportamento padrão de refresh
        console.log('Foi enviado');
    };
};
meuEscopo();
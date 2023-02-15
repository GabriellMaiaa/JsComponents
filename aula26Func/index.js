function funcao() {
    console.log('Oiee')
}
funcao('valor')// Deveria dar erro por não ter parâmetros, mas o JS não está nem aí 

function teste() {//São os Arguments
   let total = 0
   for(let argumento of arguments){
    total += argumento
   }
    console.log(total) 
}
teste(1,2,3,4,5,6)//Esses valores são salvos no argumento

function conta(operador, acumulador, ...numeros) {// Rest Operator- Tudo depois fica
    console.log(operador, acumulador, numeros);// dentro do Array
}
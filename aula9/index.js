//ARRAYS - Coleção de dados, variável com vários valores

const alunos =['GABRIEL', 'FERNANDA', 'MARCOS', 'MARIA']
console.log(alunos)
console.log(alunos[2])
//Se eu quiser editar o arrray 
alunos[1] = 'KARLA'// Aqui altera de acordo com o indice do Array
console.log(alunos)
console.log(alunos.length)

//Para adicionar elementos ao array usa-se o PUSH
//alunos.push = ('MAIA');
//console.log(alunos)
//Para adicionar no início usa-se o UNSHIFT
alunos.unshift("FÁBIO");
console.log(alunos)
//Para remover, usa o POP
const removidos = alunos.pop();
console.log(alunos)
console.log(removidos)// O SHIFT remove do início

//Se eu quiser fatiar para aparecerem só os que eu quero, uso o SLICE
console.log(alunos)
console.log(alunos.slice(0, 3))
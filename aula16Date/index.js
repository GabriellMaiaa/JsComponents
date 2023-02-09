//A função DATE é construtora, e precisa de um NEW antes.
const data = new Date();
console.log(data)
console.log('Hoje é dia ', data.getDate())
console.log('Estamos no mÊs', data.getMonth())
console.log('Estamos no ano de ', data.getFullYear())
console.log('São ', data.getHours())
console.log('ms', data.getMinutes())
console.log('Dia ', data.getDay())// Pega o dia numeral
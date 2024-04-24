// import estudante from './estudante.json'

const estudante = require('./estudante.json')

// console.log(estudante)
// console.log(typeof estudante)

const chaves = Object.keys(estudante)
const valores = Object.values(estudante)

console.log(chaves)
console.log(valores)
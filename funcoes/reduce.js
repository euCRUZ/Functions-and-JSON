const salaJs = [7, 8, 8, 7, 10, 6.5, 7, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function calculaMedia(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((acumulador, notaAtual) =>  acumulador + notaAtual, 0)
    const media = somaDasNotas / listaDeNotas.length
    return media.toFixed(2)
}

console.log(calculaMedia(salaJs))
console.log(calculaMedia(salaPython))
console.log(calculaMedia(salaJava))
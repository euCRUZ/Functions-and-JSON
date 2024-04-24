const estudantes = require('./estudantes')

const estudantesOrdenados = ordena(estudantes, 'nome')
console.log(estudantesOrdenados)

function ordena(lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1
        if (a[propriedade] > b[propriedade]) return 1
        return 0
    })
}
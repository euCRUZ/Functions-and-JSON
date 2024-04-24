const estudantes = require('./estudantes')

const estudantesSemEndereco = filtraPorPropriedade(estudantes, 'cep')
console.log(estudantesSemEndereco)

function filtraPorPropriedade(lista, propriedade) {
    return lista.filter(estudante => {
        return !estudante.endereco.hasOwnProperty(propriedade)
    })
}
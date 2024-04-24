const medias = [10, 4.5, 8.1, 5.5]
const alunos = ['João', 'Maria', 'José', 'Ana']

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7
})

console.log(reprovados) 
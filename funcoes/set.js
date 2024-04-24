const nomesDuplicados = ['Ana', 'Clara', 'Ana', 'Bia', 'Clara']

//const nomesAtualizados = new Set(nomesDuplicados)

const transformandoEmArray = [...new Set(nomesDuplicados)]

console.log(transformandoEmArray)
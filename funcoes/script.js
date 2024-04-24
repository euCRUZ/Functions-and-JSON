const alunos = ['João', "Ana", "Caio", "Lara"]
const medias = [10, 7, 9, 8]
const lista = [alunos, medias]

const adicionar = lista[0].push("Miguel")

function exibeNomeNota(aluno){
    const indiceAluno = lista[0].indexOf(aluno)
    if (lista[0].includes(aluno)){
        if (lista[1][indiceAluno] != undefined){
            console.log(`\nO aluno ${aluno} tem média ${lista[1][indiceAluno]}\n`)
        } else {
            console.log("\nAluno não tem média\n")
        }
    } else {
        console.log("\nAluno não encontrado\n")
    }
} 

exibeNomeNota("Miguel")	
exibeNomeNota("Caio")	
exibeNomeNota("YG")	
const alunos = ['João', "Ana", "Caio", "Lara"]
const medias = [10, 7, 9, 8]
const lista = [alunos, medias]

const adicionar = lista[0].push("Miguel")

function exibeNomeNota(aluno){
    
    if (lista[0].includes(aluno)){
        const [alunos, medias] = lista
        const indice = alunos.indexOf(aluno)
        if (lista[1][indice] != undefined){
            console.log(`O aluno ${aluno} tem média ${medias[indice]}`)
        } else {
            console.log("Aluno não tem média")
        }
    } else {
        console.log("Aluno não encontrado")
    }
} 

exibeNomeNota("Miguel")	
exibeNomeNota("Caio")	
exibeNomeNota("YG")	
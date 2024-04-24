const estudante = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 42,
    cpf: '12345678909',
    turma: 'JavaScript',
    bolsita: true,
    telefones: ['123456789', '987654321'],
    enderecos: [
        {
        rua: 'Rua 1',
        numero: '123',
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP'
        }, 
        {
        rua: 'Rua 2',
        numero: '456',
        bairro: '',
        cidade: 'São Paulo',
        estado: 'SP'
        }],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

function exibirTelefone(tel1, tel2) {
    console.log(`Ligar para ${tel1}`)
    console.log(`Ligar para ${tel2}`)
}


exibirTelefone(...estudante.telefones)

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio)
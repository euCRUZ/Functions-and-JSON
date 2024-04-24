const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia', 'Ana', 'Leonardo', 'Barbara', 'Guilherme', 'Gabriel', 'Camila', 'Carlos', 'Liz', 'Roberto', 'Juliana', 'Giovanni'];

const metade = estudantes.length / 2;

console.log('Sala 1:\n')
const sala1 = estudantes.slice(0, metade).forEach((estudante) => {console.log(estudante)})

console.log('-------------------------')

console.log('Sala 2:\n')
const sala2 = estudantes.slice(metade).forEach((estudante) => {console.log(estudante)})


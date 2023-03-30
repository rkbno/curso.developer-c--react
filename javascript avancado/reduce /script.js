function novoAluno(nome, idade){
    return { nome, idade}
}

let alunos=[
    novoAluno("mario", 3),
    novoAluno("joão", 10),
    novoAluno("gabriel", 3),
    novoAluno("maria", 2),
]


function idadeDaturma (total, aluno){
    return total + aluno.idade
}

console.log(alunos.reduce(idadeDaturma, 0))